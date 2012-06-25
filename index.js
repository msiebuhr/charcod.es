$(document).ready(function () {
    trigramTable = {}; // For tags.length > 3
    unicodeTable = {};

    // {{{ tagToTrigrams(unicodeChar, tag)
    function tagToTrigrams(unicodeChar, tag) {
        function addOrCreate(table, key, value) {
            table[key] = table[key] || [];
            table[key].push(value);
        }

        for (var i=0; i<=tag.length-3; i++) {
            addOrCreate(trigramTable, tag.substr(i, 3), unicodeChar);
        }
    }
    // }}}

    // Load unicode data
    $.ajax({
        url: 'data.json',
        dataType: 'json',
        success: function(data) {
            unicodeTable = data;

            $.map(unicodeTable, function (tags, unicodeChar) {
                $.map(tags, function (tag) {
                    tagToTrigrams(unicodeChar, tag);
                });
            });
        },
        error: function () {
            console.log("could not load data.json:", arguments);
        }
    });

    // Handle search input
    $("#searchField").keyup(function (e) {
        // TODO: Check for non-text keypresses and empty strings
        var searchTerm = e.srcElement.value,
            resultCharScore = {},
            results = {};

        // Lookup trigrams
        for (var i=0; i<=searchTerm.length-3; i++) {
            var tri = searchTerm.substr(i, 3);
            if (tri in trigramTable) {
                results[tri] = results[tri] || [];
                results[tri] = results[tri].concat(trigramTable[tri]);

                // Count how many trigram-parts that match any char.
                $.each(trigramTable[tri], function (index, unicodeChar) {
                    resultCharScore[unicodeChar] = resultCharScore[unicodeChar] || 0;
                    resultCharScore[unicodeChar] = resultCharScore[unicodeChar] + 1;
                });
            }
        }

        // Transform to map of [score] → [chars with score]
        var charByScore = {};
        $.map(resultCharScore, function (score, unicodeChar) {
            if (score in charByScore) {
                charByScore[score].push(unicodeChar);
            } else {
                charByScore[score] = [unicodeChar];
            }

            // Add to inner HTML
        });

        var html = ['<div class="row">'];
        $.map(resultCharScore, function (score, unicodeChar) {
            html.push('<div class="span1 resultChar">' + unicodeChar + '</div>');
        });
        html.push('</div>');
        $("#results").html(html.join(" "));


    });
});
