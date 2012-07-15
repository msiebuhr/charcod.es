/*global $*/
(function () {
    var _gaq = _gaq || [],
        defer = (function (document, script) {
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

    _gaq.push(['_setAccount', 'UA-33198175-1']),
    _gaq.push(['_trackPageview']),

    defer(('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js');

    defer('http://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min.js', function () {
        var trigramTable = {}, // For tags.length > 3
            unicodeTable = {},
            popup = (function () {
                var active,
                    info,
                    getTpl = function (elm) {
                        var codepoint = elm[0].id.replace('id', ''),
                            info = unicodeTable[codepoint],
                            tpl = $('.templates .charInfo').clone();

                        tpl.find('h2').html(elm.html());
                        tpl.find('h3').html(info.n);
                        tpl.find('.char-html').html('&amp;#' + codepoint + ';');
                        tpl.find('.char-source').html('\\u' + (parseInt(codepoint, 10) + 0x10000).toString(16).substr(-4));
                        tpl.find('.char-codepoint').html(codepoint);
                        tpl.find('.char-group').html(info.b);
                        if (info.a && info.a.length > 0) {
                            tpl.find(".aliases").html(info.a.join(', '));
                        }

                        return tpl;
                    };

                return {
                    activate: function (elm) {
                        if (active) {
                            this.deactivate();
                        }
                        active = elm;
                        info = getTpl(elm);

                        var offset = elm.position().top,
                            currentElement = elm;
                        while (currentElement.next().length && currentElement.next().position().top === offset) {
                            currentElement = currentElement.next();
                        }
                        info.insertAfter(currentElement);

                        active.addClass('active');
                    },

                    deactivate: function () {
                        active.removeClass('active');
                        info.remove();
                        active = info = undefined;
                    }
                }
            }());

        // Click-handler that show a modal dialog
        $('#results').on('click', 'a', function (e) {
            popup.activate($(e.target));
            e.preventDefault();
        });

        // {{{ load data
        $.ajax({
            url: 'data.json',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (index, unicodeChar) {
                    unicodeTable[unicodeChar.c] = unicodeChar;

                    // Use name as tags
                    tagsToTrigrams(unicodeChar.c, unicodeChar.n.split(" "));

                    // Then the block
                    tagsToTrigrams(unicodeChar.c, [unicodeChar.b]);

                    // Use alias as tags
                    if (unicodeChar.a) {
                        tagsToTrigrams(unicodeChar.c, unicodeChar.a);
                    }
                });

                // Handle search input
                var timeout,
                    searchField = $('#searchField');

                searchField.keyup(function (e) {
                    if (timeout) {
                        window.clearTimeout(timeout);
                    }
                    timeout = window.setTimeout(function () {
                        searchAndShow(searchField.val());
                    }, 250);
                });

                $('.form-search').submit(function () {
                    searchAndShow(searchField.val());
                    return false;
                });

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

        // {{{ wordToTrigrams(word)
        function wordToTrigrams(word) {
            if (word.length === 0) {
                return [];
            } else if (word.length < 3) {
                return [word];
            }
            var triGrams = [];
            for (var i = 0; i <= word.length - 3; i += 1) {
                triGrams.push(word.substr(i, 3));
            }
            return triGrams;
        }
        // }}}

        // {{{ tagsToTrigrams(unicodeChar, tag)
        function tagsToTrigrams(unicodeChar, tags) {
            for (var i = 0; i < tags.length; i += 1) {
                tagToTrigrams(unicodeChar, tags[i]);
            }
        }
        // }}}

        // {{{ tagToTrigrams(unicodeChar, tag)
        function tagToTrigrams(unicodeChar, tag) {
            function addOrCreate(table, key, value) {
                table[key] = table[key] || [];
                table[key].push(value);
            }

            $.each(wordToTrigrams(tag), function (index, triGram) {
                addOrCreate(trigramTable, triGram, unicodeChar);
            });
        }
        // }}}

        // {{{ search
        function search(text) {
            var words = text.split(" "),
                triGrams = [],
                charCodesFound = {};

            // Convert search terms to tri-grams
            $.each(words, function (index, word) {
                triGrams = triGrams.concat(wordToTrigrams(word));
            });

            // Look up tri-grams
            $.each(triGrams, function (index, triGram) {
                if (triGram in trigramTable) {
                    var charCodes = trigramTable[triGram];
                    for (var i = 0; i < charCodes.length; i += 1) {
                        var charCode = charCodes[i];
                        charCodesFound[charCode] = charCodesFound[charCode] || 0;
                        charCodesFound[charCode] = charCodesFound[charCode] + 1;
                    }
                }
            });

            // Score the results for how many matches there were
            var sortedOutput = [];
            $.each(charCodesFound, function (charCode, matchingTriGrams) {
                sortedOutput.push({code: charCode, score: matchingTriGrams});
            });

            if (sortedOutput.length > 0) {
                // Sort in reverse
                sortedOutput.sort(function (a, b) {
                    return b.score - a.score;
                });

                // Filter out low-scoring stuff.
                var cutoffScore = Math.ceil(sortedOutput[0].score / 2);
                sortedOutput = $.map(sortedOutput, function (data, index) {
                    if (data.score > cutoffScore || index < 12 * 25) {
                        return data;
                    }
                });

                // Strip everything but the actual code
                return $.map(sortedOutput, function (data) {
                    return data.code;
                });
            }

            return [];
        }
        // }}}

        // {{{ searchAndShow(text)
        function searchAndShow(text) {
            text = text.replace(/^\s*|\s*$/, '').toLowerCase();
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

            // Show help?
            if (codes.length === 0) {
                $("#help").show()
            } else {
                $("#help").hide()
            }

            $("#results").html($.map(codes, function (code) {
                return '<a href="#' + code + '" id="id' + code + '">&#' + code + ';</a>';
            }).join(""));

            // If there is only one result, show details right away
            if (codes.length === 1) {
                popup.activate($('#results a').first());
            }
        }
        // }}} searchAndShow(text)
    });
}());
