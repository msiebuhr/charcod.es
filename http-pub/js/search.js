define(function (util) {
    // {{{ wordToTrigrams(word)
    function wordToTrigrams(word) {
        word = word.toLowerCase();
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

    function Search() {
        this.trigramTable = {};
        this.resultIndex = [];
    }

    /* External functions */
    // {{{ addTerm(words, data)
    Search.prototype.addTerm = function (words, data) {
        var trigrams = {};

        // Push result on output index;
        this.resultIndex.push(data); 

        // Note - we don't check if we push the same data multiple times.
        for (var i = 0; i < words.length; i += 1) {
            var trigrams = wordToTrigrams(words[i]);
            for (var j = 0; j < trigrams.length; j += 1) {
                var trigram = trigrams[j];
                if (!(trigram in this.trigramTable)) { this.trigramTable[trigram] = []; }
                this.trigramTable[trigram].push(this.resultIndex.length - 1);
            }
        }
    };
    // }}}

    // {{{ search(text, maxResults)
    Search.prototype.search = function (text, maxResults) {
        var that = this,
            words = text.toLowerCase().split(" "),
            maxResults = maxResults || 12 * 25,
            triGrams = [],
            charCodesFound = {};

        // Convert search terms to tri-grams
        words.forEach(function (word, index) {
            triGrams = triGrams.concat(wordToTrigrams(word));
        });

        // Look up tri-grams
        triGrams.forEach(function (triGram) {
            if (triGram in that.trigramTable) {
                var charCodes = that.trigramTable[triGram];

                for (var i = 0; i < charCodes.length; i += 1) {
                    var charCode = charCodes[i];
                    charCodesFound[charCode] = charCodesFound[charCode] || 0;
                    charCodesFound[charCode] = charCodesFound[charCode] + 1;
                }
            }
        });

        // Score the results for how many matches there were
        var sortedOutput = [];
        for (var charCode in charCodesFound) {
            sortedOutput.push({ code: charCode, score: charCodesFound[charCode] });
        }

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
            var shortOutput = [];
            for (var i = 0; i < sortedOutput.length && i < maxResults; i += 1) {
                shortOutput.push(sortedOutput[i]);
            }

            // Strip everything but the actual code
            return shortOutput.map(function (data) {
                return that.resultIndex[data.code];
            });
        }

        return [];
    }
    // }}}

    return Search;
});
