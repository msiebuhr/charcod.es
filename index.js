$(document).ready(function () {
    trigramTable = {}; // For tags.length > 3
    unicodeTable = {};

    // {{{ load data
    $.ajax({
        url: 'data.json',
        dataType: 'json',
        success: function(data) {
            $.each(data, function (index, unicodeChar) {
                unicodeTable[unicodeChar.c] = unicodeChar;

                // Use name as tags
                tagsToTrigrams(unicodeChar.c, unicodeChar.n.split(" "));

                // Use alias as tags
                if (unicodeChar.a) {
                    tagsToTrigrams(unicodeChar.c, unicodeChar.a);
                }
            });
        },
        error: function () {
            console.log("could not load data.json:", arguments);
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
        for (var i=0; i<=word.length-3; i++) {
            triGrams.push(word.substr(i, 3));
        }
        return triGrams;
    }
    // }}}

    // {{{ tagsToTrigrams(unicodeChar, tag)
    function tagsToTrigrams(unicodeChar, tags) {
        for(var i=0; i<tags.length; i++) {
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
                for(var i=0; i<charCodes.length; i++) {
                    var charCode = charCodes[i];
                    charCodesFound[charCode] = charCodesFound[charCode] || 0;
                    charCodesFound[charCode] = charCodesFound[charCode] + 1;
                }
            }
        });

        // Score the results for how many matches there were
        var sortedOutput = [];
        $.each(charCodesFound, function(charCode, matchingTriGrams) {
            sortedOutput.push({code: charCode, score: matchingTriGrams});
        });

        // Sort in reverse
        sortedOutput.sort(function (a, b) {
            return b.score - a.score;
        });

        // Filter out low-scoring stuff.
        var cutoffScore = Math.ceil( sortedOutput[0].score/2 );
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
    // }}}

    function searchAndShow(text) {
        var codes = search(text);

        var html = ['<div class="row">'];
        $.each(codes, function (index, code) {
            html.push('<div class="span1 resultChar" id="' + code + '">&#' + code + ';</div>');
            // Break every 12th box
            if (index % 12 === 11) {
                html.push('</div>\n<div class="row">');
            }        });
        html.push('</div>');
        $("#results").html(html.join(""));

        // Click-handler that show a modal dialog
        $(".resultChar").on('click', function (e) {
            // Get data about the click-target
            var target = $(e.target),
                codepoint = target[0].id,
                info = unicodeTable[codepoint];

            // Set up the modal dialog
            $("#charInfoModal > .modal-header > h3").html(
                target.html() + ' <small>' + info.n.toUpperCase() + '</small>'
            );

            // Build a sensible description
            var body = [];
            function addToBody(name, values) {
                body.push('<dt>' + name + '</dt>');
                values.forEach(function (value, index) {
                    body.push('<dd>' + value + '</dd>');
                });
            }
            //addToBody("Name", [info.n.toUpperCase()]);
            addToBody("Codepoint", [codepoint]);
            addToBody("Group / Category", [info.b]);
            addToBody("Source code", ["\\u" + (parseInt(codepoint, 10) + 0x10000).toString(16).substr(-4)]);
            addToBody("HTML", ["&amp;#" + codepoint + ";"]);
            if (info.a && info.a.length > 0) {
                addToBody('Alias(es)', info.a);
            }
            $("#charInfoModal > .modal-body > dl").html( body.join("\n") );

            // Show it!
            $("#charInfoModal").modal('show');
        });
    }

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
});
