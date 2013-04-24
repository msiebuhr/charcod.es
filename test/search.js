var assert = require('chai').assert,
    fs = require('fs'),
    path = require('path'),
    requirejs = require('requirejs');

requirejs.config({
    baseUrl: __dirname,
    paths: {
        'js': '../http-pub/js'
    }
});

describe('Search', function () {
    var Search;

    before(function (done) {
        requirejs(['js/search'], function (RequireSearch) {
            Search = RequireSearch;
            done();
        });
    });

    it('Should be a function', function () {
        assert.isFunction(Search);
    });

    // {{{ Lipsum
    describe('Loaded with Lipsum', function () {
        var s,
            data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'.split(" ");

        before(function () {
            s = new Search();

            data.forEach(function (word) {
                s.addTerm([word], word);
            });
        });

        data.forEach(function (word) {
            it("Search for " + word + " returns " + word, function () {
                var res = s.search(word);
                assert.include(res, word);
            });

            var firstTrigram = word.substr(0, 3);

            it("Search for " + firstTrigram + " returns " + word, function () {
                var res = s.search(firstTrigram);
                assert.include(res, word);
            });
        });

    });
    // }}}

    // {{{ Unicode
    describe('Read data.json', function () {
        var s,
            dataFile = fs.readFileSync(path.join(__dirname, '../http-pub/data.json'), 'utf-8'),
            data;

        it('data.json is an JSON-file with an object', function () {
            try {
                data = JSON.parse(dataFile);
            } catch (e) {
                assert(false, "Couldn't parse data.json...");
            }
            assert.isArray(data);
        });

        it("Has n (name) on objects", function () {
            for(var i = 0; i < data.length; i += 1) {
                assert.property(data[i], 'n');
            }
        });

        describe('Load the search index', function () {
            var s;

            before(function () {
                s = new Search();

                data.forEach(function (code) { 
                    assert.property(code, 'n');
                    var words = code.n.split();
                    if ('a' in code) {
                        words = words.concat(code.a);
                    }

                    s.addTerm(words, code);
                });
            });

            it('Search for "hammer" include "hammer and pick"-code', function () {
                var res = s.search('hammer');
                assert.isArray(res);
                var found = false;
                for (var i = 0; i < res.length; i += 1) {
                    if (res[i].n === 'hammer and pick') {
                        found = true;
                        break;
                    }
                }
                assert(found, "'hammer and pick' not found");
            });

            it('Search for "TOMATO" returns "tomato"-char', function () {
                var res = s.search('TOMATO'),
                    found = false;
                assert.isArray(res);
                res.forEach(function (code) {
                    if (code.n === 'tomato') { found = true; }
                });
                assert(found, "{n: tomato ...} not found");
            });

            it("Search with maxResults=1 return only one result", function () {
                assert.lengthOf(s.search('arrow', 1), 1);
            });

            it("Search for arrow returns 'arrow'-stuff on top", function () {
                var res = s.search('arrow');

                assert(res.length > 0, "Got no results!");
                assert(res[0].n.indexOf('arrow') !== -1, "First result does not include 'arrow'");
            });
        });
    });
    // }}}
});
