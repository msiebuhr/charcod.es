var trigramTable = {};

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
    var i = 0,
    len = tags.length;

    for (; i < len; i += 1) {
        tagToTrigrams(unicodeChar, tags[i]);
    }
}
// }}}

// {{{ tagToTrigrams(unicodeChar, tag)
function tagToTrigrams(unicodeChar, tag) {
    var trigrams = wordToTrigrams(tag),
    i = 0,
    len = trigrams.length,
    trigram;

    for (; i < len; i += 1) {
        trigram = trigrams[i];
        if (!trigramTable[trigram]) {
            trigramTable[trigram] = [];
        }
        trigramTable[trigram].push(unicodeChar);
    }
}
// }}}

// {{{ search
function search(text) {
    var words = text.toLowerCase().split(" "),
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
            // First, up those with better scores
            if (b.score !== a.score) {
                return b.score - a.score;
            }

            // If same score, sort "lower" codepoints before "larger" ones.
            return a.code - b.code;
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
