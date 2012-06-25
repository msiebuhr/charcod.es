$(document).ready(function () {
    trigramTable = {}; // For tags.length > 3
    unicodeTable = {};

    // {{{ load data
    $.ajax({
        url: 'data-nounihan.json',
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

        var tgs = wordToTrigrams(tag);

        if (tgs.indexOf("") !== -1) {
            console.log("''", unicodeChar);
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
            html.push('<div class="span1 resultChar">&#' + code + ';</div>');
        });
        html.push('</div>');
        $("#results").html(html.join(" "));
    }

    // Handle search input
    var timeout;
    $("#searchField").keyup(function (e) {
        if (timeout) {
            console.log("cancel timeout");
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
            console.log("timeout done");
            searchAndShow(e.srcElement.value);
        }, 250);
    });
});
