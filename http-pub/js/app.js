/*global $, _gaq, unescape, escape, search*/

require(['search'], function (Search) {
    /* Determine if `text` is a char-code short-cut of some sort or a plain
     * search-term.
     */
    function isCharCode(text) {
        var sourceMatch = text.match(/^\\u([\dABCDEFabcdef]{4})$/),
            codePointMatch = text.match(/^&#(\d+);$/) || text.match(/^(\d+)$/),
            code = undefined;

        if (sourceMatch) {
            code = parseInt(sourceMatch[1], 16);
        } else if (codePointMatch) {
            code = codePointMatch[1];
        } else if (text.length === 1) {
            // TODO: Should check if first char is part of a surrogate pair
            code = text.codePointAt(0);
        }

        return code;
    }

    function highSurrogate(codePoint) {
        return Math.floor((codePoint - 0x10000) / 0x400) + 0xD800;
    }

    function lowSurrogate(codePoint) {
        return (codePoint - 0x10000) % 0x400 + 0xDC00;
    }

    function unicodeEscape(codePoint) {
        if (codePoint <= 0xFFFF) {
            return '\\u' + (codePoint + 0x10000).toString(16).substr(-4).toUpperCase();
        } else {
            throw 'Code point outside BMP cannot be encoded.';
        }
    }

    function codePointToString(codePoint) {
        if (codePoint <= 0xFFFF) {
            // Anything inside the BMP can be escaped as usual
            return unicodeEscape(codePoint);
        } else {
            // Outside the BMP we generate surrogate pairs
            return unicodeEscape(highSurrogate(codePoint)) + unicodeEscape(lowSurrogate(codePoint));
        }
    }

    document.getElementById('searchField').focus();

    // Block form submission. Search will be activated when data is downloaded
    document.forms[0].onsubmit = function () {
        return false;
    };

    _gaq = window._gaq || [];
    _gaq.push(['_setAccount', 'UA-33198175-1']);
    _gaq.push(['_setDomainName', 'charcod.es']);
    _gaq.push(['_trackPageview']);

    var unicodeTable = {},
        popup = (function () {
            var active,
                info,
                cpb,
                getTpl = function (codePoint) {
                    var info = unicodeTable[codePoint],
                        tpl = $('.templates .charInfo').clone(),
                        combining = unicodeTable[codePoint] && unicodeTable[codePoint].n.indexOf('combining') !== -1,
                        htmlCodes = [ '&amp;#' + codePoint + ';' ];



                    // Set location-hash intelligently
                    var searchTerm = $('#searchField').val(),
                        permaLink = searchTerm + '/' + codePoint,
                        permaLinkChar = codePoint;
                    if (searchTerm === codePoint) {
                        permaLink = codePoint;
                    }
                    location.hash = '#' + permaLink;

                    tpl.find('h2').html((combining ? "&#9676;" : "") + '&#' + codePoint + ';');
                    tpl.find('.permalink').attr('href', '#' + permaLinkChar);

                    // Source code name
                    tpl.find('.char-source').html(codePointToString(parseInt(codePoint, 10)));
                    // Code point
                    tpl.find('.char-codepoint').html(codePoint);

                    if (info) {
                        tpl.find('h3').html(info.n);
                        // TODO: Just changes URL - doesn't currently act on it!
                        tpl.find('.char-group')
                            .attr('href', '#' + info.b)
                            .html(info.b);

                        // Set HTML names
                        if (info.altnames && info.altnames.html) {
                            htmlCodes.push('&amp;' + info.altnames.html + ';');
                        }
                        tpl.find('.char-html').html(htmlCodes.join("<br>"));

                        // Track the group/block of what chars people are clicking.
                        _gaq.push(['_trackEvent', 'popup', 'activate', info.b]);

                        // LaTeX names (or hide the row)
                        if (info.altnames && info.altnames.latex) {
                            tpl.find('.char-latex').html(info.altnames.latex);
                        } else {
                            tpl.find('.char-latex-row').hide();
                        }

                        // Aliases (or hide the row)
                        if (info.a && info.a.length > 0) {
                            tpl.find('.char-aliases').html(info.a.join(', '));
                        } else {
                            tpl.find('.char-aliases-row').hide();
                        }

                        // Activate clipboard button
                        var btn = tpl.find('.copyButton')[0];
                        // Remove button if we're in Safari. Doesn't support copy/paste...
                        // Safari: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11) AppleWebKit/601.1.56 (KHTML, like Gecko) Version/9.0 Safari/601.1.56
                        // Chrome: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36
                        if (btn && navigator.userAgent.indexOf(' Safari/') > 0 && navigator.userAgent.indexOf(' Chrome/') === -1) {
                            tpl.find('.copyButton').hide();
                        } else if (btn) {
                            // Otherwise, make it copy the right data
                            _gaq.push(['_trackEvent', 'copy-button', info.b]);
                            btn.setAttribute('data-clipboard-text', String.fromCodePoint(codePoint));
                            cpb = clipboardButton(btn);
                        }
                    }

                    return tpl;
                };

            return {
                activate: function (elm) {
                    var codePoint = elm[0].id.replace('id', ''),
                        offset = elm.position().top,
                        currentElement = elm;

                    if (active) {
                        this.deactivate();
                    }
                    active = elm;
                    info = getTpl(codePoint);

                    while (currentElement.next().length && currentElement.next().position().top === offset) {
                        currentElement = currentElement.next();
                    }
                    info.insertAfter(currentElement);

                    active.addClass('active');

                },

                deactivate: function () {
                    _gaq.push(['_trackEvent', 'popup', 'deactivate']);
                    active.removeClass('active');
                    if (info) {
                        info.remove();
                    }
                    if (cpb) {
                        cpb.destroy();
                        cpb = undefined;
                    }
                    active = info = undefined;
                }
            };
        }());

    // Click-handler that show a modal dialog
    $('#results').on('click', 'a', function (e) {
        popup.activate($(e.target));
        e.preventDefault();
    });

    // Handle search input
    var timeout,
        searchField = $('#searchField');

    searchField.keyup(function (e) {
        if (timeout) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
            searchAndShow(searchField.val().trim());
        }, 250);
    });

    $('.form-search').submit(function () {
        searchAndShow(searchField.val().trim());
        return false;
    });

    var search = new Search();

    // {{{ load data
    $.ajax({
        url: GETSTATICURL('data.json'),
        dataType: 'json',
        success: function (data) {
            var i,
                len = data.length,
                unicodeChar,
                indices,
                name;

            for (i = 0; i < len; i += 1) {
                unicodeChar = data[i];
                unicodeTable[unicodeChar.c] = unicodeChar;

                // Fill 'indices' with stuff I want to search on
                indices = [].concat(
                    unicodeChar.n.split(" "), // Name
                    [unicodeChar.b], // Block name
                    unicodeChar.a ? unicodeChar.a : []  // Any aliases
                    //unicodeChar.c ? unicodeChar.c : [],  // Any aliases
                );

                // Index alternative names
                if (unicodeChar.altnames) {
                    for (name in unicodeChar.altnames) {
                        indices.push(unicodeChar.altnames[name]);
                    }
                }

                search.addTerm(indices, unicodeChar.c);
            }

            // Search right away if the user has already typed something
            if (searchField.val()) {
                searchAndShow(searchField.val());
            }

            // Re-apply location hash, so stuff will show up.
            applyLocationHash();
        },
        error: function () {
            throw new Error("could not load data.json: " + arguments);
        }
    });
    // }}}

    // {{{ searchAndShow(text)
    function searchAndShow(text) {
        _gaq.push(['_trackEvent', 'search', undefined, text]);
        var codes = [],
            sourceMatch = text.match(/^\\u(\d{4})$/),
            codePointMatch = text.match(/^&#(\d+);$/) || text.match(/^(\d+)$/);

        if (sourceMatch) {
            codes = [parseInt(sourceMatch[1], 16)];
        } else if (codePointMatch) {
            codes = [codePointMatch[1]];
        } else {
            codes = search.search(text);
        }

        // If we don't find any codes, assume it's a char that has been
        // pasted + allow for surrogate pairs.
        if (text.length >= 1 && codes.length === 0) {
            // Assume unicode input
            codes = [text.codePointAt(0)];
        }

        // Show help?
        if (codes.length === 0) {
            $("#help").show();
        } else {
            $("#help").hide();
        }

        $("#results").html($.map(codes, function (code) {
            var combining = unicodeTable[code] && unicodeTable[code].n.indexOf('combining') !== -1,
                outHtml = (combining ? "&#9676;" : "") + "&#" + code + ";";

            return '<a href="#id' + code + '" id="id' + code + '">' + outHtml + '</a>';
        }).join(""));

        // If there is only one result, show details right away
        if (codes.length === 1) {
            popup.activate($('#results a').first());
        }
    }
    // }}} searchAndShow(text)

    // {{{ applyLocationHash()
    function applyLocationHash() {
        if (!location.hash) {
            return;
        }
        var h = decodeURIComponent(location.hash.split('#')[1]);

        // Two elements → search-term/char-to-highlight
        // One element → char-to-highlight (if it matches a char)
        //               otherwise, consider it a search term

        var test = h.match(/^([^\/]+)\/(.*)$/),
            isCode = isCharCode(h),
            searchTerm = undefined,
            highlight = undefined;

        if (test) {
            searchTerm = test[1];
            highlight = test[2];
        } else if (isCode) {
            searchTerm = highlight = isCode;
        } else {
            searchTerm = h;
            highlight = undefined;
        }

        if (highlight && searchTerm === undefined) {
            searchTerm = highlight;
        }

        searchField.val(searchTerm);
        searchAndShow(searchTerm);

        // Find the 'highlight'-element and activate the popup
        if (highlight) {
            var elem = $('#id' + highlight).first();
            if (elem) {
                popup.activate(elem);
            }
        }
    }
    // }}} applyLocationHash()

    window.onhashchange = function (changeEvent) {
        if (changeEvent.newURL !== changeEvent.oldURL) {
            applyLocationHash();
        }
    };
    applyLocationHash();
});
