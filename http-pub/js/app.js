/*global $, _gaq, unescape, escape, tagsToTrigrams, search*/
(function () {
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
            code = text.charCodeAt(0);
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

    var defer = (function (document, script) {
            var scripts = {},
                firstScript = document.getElementsByTagName(script)[0];

            return function (url, callback) {
                var inc;

                if (typeof scripts[url] === 'undefined') {
                    inc = document.createElement(script);
                    inc.async = true;
                    inc.src = url;
                    if (callback) {
                        inc.onload = function () {
                            if (!inc.onloadDone) {
                                inc.onloadDone = true;
                                callback();
                            }
                        };
                        inc.onreadystatechange = function () {
                            if (inc.readyState === "loaded" || inc.readyState === "complete") {
                                inc.onload();
                            }
                        };
                    }
                    firstScript.parentNode.insertBefore(inc, firstScript);
                    scripts[url] = inc;
                } else {
                    if (callback) {
                        callback();
                    }
                }
            };
        }(document, 'script'));

    document.getElementById('searchField').focus();

    // Block form submission. Search will be activated when data is downloaded
    document.forms[0].onsubmit = function () {
        return false;
    };

    _gaq = window._gaq || [];
    _gaq.push(['_setAccount', 'UA-33198175-1']);
    _gaq.push(['_setDomainName', 'charcod.es']);
    _gaq.push(['_trackPageview']),

    defer(('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js');

    defer('http://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min.js', function () {
        var unicodeTable = {},
            popup = (function () {
                var active,
                    info,
                    getTpl = function (codePoint) {
                        var info = unicodeTable[codePoint],
                            tpl = $('.templates .charInfo').clone(),
                            combining = unicodeTable[codePoint] && unicodeTable[codePoint].n.indexOf('combining') !== -1,
                            htmlCodes = [ '&amp;#' + codePoint + ';' ],
                            permaLink = location.href.replace(/(#.*)?$/, '#' + codePoint);


                        tpl.find('h2').html((combining ? "&#9676;" : "") + '&#' + codePoint + ';');
                        tpl.find('.permalink').attr('href', permaLink).html(permaLink);

                        // Source code name
                        tpl.find('.char-source').html(codePointToString(parseInt(codePoint, 10)));
                        // Code point
                        tpl.find('.char-codepoint').html(codePoint);

                        if (info) {
                            tpl.find('h3').html(info.n);
                            tpl.find('.char-group').html(info.b);
                            if (info.a && info.a.length > 0) {
                                tpl.find(".aliases").html(info.a.join(', '));
                            }

                            // Set HTML names
                            if (info.altnames && info.altnames.html) {
                                htmlCodes.push('&amp;#' + info.altnames.html + ';');
                            }
                            tpl.find('.char-html').html(htmlCodes.join("<br>"));

                            // Track the group/block of what chars people are clicking.
                            _gaq.push(['_trackEvent', 'popup', 'activate', info.b]);

                            // LaTeX names
                            if (info.altnames && info.altnames.latex) {
                                tpl.find('.char-latex').html(info.altnames.latex);
                            } else {
                                tpl.find('.char-latex-row').hide();
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
                        location.hash = codePoint;
                    },

                    deactivate: function () {
                        //_gaq.push(['_trackEvent', 'popup', 'deactivate']);
                        active.removeClass('active');
                        info.remove();
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

        // {{{ load data
        $.ajax({
            url: 'data.json',
            dataType: 'json',
            success: function (data) {
                var i = 0,
                    len = data.length,
                    unicodeChar,
                    name;

                for (; i < len; i += 1) {
                    unicodeChar = data[i];
                    unicodeTable[unicodeChar.c] = unicodeChar;

                    // Use name as tags
                    tagsToTrigrams(unicodeChar.c, unicodeChar.n.split(" "));
                    // Then the block
                    tagsToTrigrams(unicodeChar.c, [unicodeChar.b]);
                    // Use alias as tags
                    if (unicodeChar.a) {
                        tagsToTrigrams(unicodeChar.c, unicodeChar.a);
                    }

                    // Index alternative names
                    if (unicodeChar.altnames) {
                        for (name in unicodeChar.altnames) {
                            tagsToTrigrams(unicodeChar.c, [unicodeChar.altnames[name]]);
                        }
                    }
                }

                // Search right away if the user has already typed something
                if (searchField.val()) {
                    searchAndShow(searchField.val());
                }
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
                codes = search(text);
            }
            if (text.length === 1 && codes.length === 0) {
                // Assume unicode input
                codes = [text.charCodeAt(0)];
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
        if (location.hash) {
            var h = location.hash.split('#')[1];

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

            console.log("searchTerm", searchTerm);
            console.log("highlight", highlight)

            searchField.val(searchTerm);
            searchAndShow(searchTerm);

            // Find the 'highlight'-element and activate the popup
            if (highlight) {
                var elem = $('#id' + highlight);
                if (elem.length > 0) {
                    popup.activate(elem[0]);
                }
            }
        }
    });
}());
