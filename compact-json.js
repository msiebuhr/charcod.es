#!/usr/bin/env node

/*
 * Loads a number of verbose JSON files and writes them a 'compacted'
 * JSON-file.
 *
 * The verbose files are designed to be easy to edit by hand; the compact ones
 * are smaller to store and send over the wire.
 *
 * Any number of verbose files can be compacted into one large compact file.
 *
 * Verbose files:
 *     {
 *         { "→": { "alias": ["->", "arrow"] },
 *         { "…": { "alias": ["...", "dots"] },
 *         { "…": { "altnames": {"latex": "\dots"} },
 *         …
 *     }
 *
 * Compact:
 *     [
 *         {
 *             c: characterCodeInDecimal,
 *             n: "lowercase unicode name"
 *             b: "unicode block"
 *             a: ["alias", "can", "be", "here"]
 *             altnames: {"alternative": "name", "latex": "\dots"}
 *         },
 *         …
 *     ]
 *
 */

var JSONStream = require('JSONStream'),
    _ = require('underscore'),
    fs = require('fs');

var argparse = require('optimist')
    .usage('Usage: $0 [-v] [-o <outfile>] <infile> ... <infile>')
    .demand(1)
    .alias('v', 'verbose')
    .alias('o', 'output');
var args = argparse.argv;

var output = args.output ? fs.createWriteStream(args.output) : process.stdout,
    jsonStream = JSONStream.stringify("[", ",\n", "]\n");

function print(string) {
    process.stderr.write(_(arguments).toArray().join(" "));
}
print = args.verbose ? print : function () {};

jsonStream.pipe(output);

function verbose2compact(obj, key) {
    var out = {};

    // Copy properties
    if ('alias' in obj) { out.a = obj.alias; }
    if ('name' in obj) { out.n = obj.name; }
    if ('block' in obj) { out.b = obj.block; }
    if ('altnames' in obj) { out.altnames = obj.altnames; }

    // Copy code -- or decode it from the key.
    if ('code' in obj) { out.c = obj.code; }
    else if (key) { out.c = key.charCodeAt(0); }

    return out;
}

function mergeCompact(existing, added) {
    // Update "single" attributes, if missing
    if (added.n && !existing.n) { existing.n = added.n; }
    if (added.b && !existing.b) { existing.b = added.b; }
    if (added.c && !existing.c) { existing.c = added.c; }
    // Update alia
    if (existing.a || added.a) {
        existing.a = _.union(existing.a || [], added.a || []);
    }
    if (existing.altnames || added.altnames) {
        existing.altnames = _.defaults({}, existing.altnames || {}, added.altnames || {});
    }

    return existing;
}

var data = {};

_(args._).uniq().sort().forEach(function(file) {
    print("Reading", file);
    var json = JSON.parse(fs.readFileSync(file));

    if (_.isArray(json)) {
        console.warn("File " + file + " isn't a verbose JSON-file (it's an array)");
        return;
    }

    print(" · loaded", _(json).size(), "codepoints.");

    // Convert to code → compact block
    _(json).forEach(function (value, key) {
        //if (!json.hasOwnProperty(key)) { return; }
        var compact = verbose2compact(value, key),
            code = compact.c;

        // Merge with existing key?
        if (code in data) {
            data[code] = mergeCompact(data[code], compact);
        } else {
            //console.warn("Inserting", code);
            data[code] = compact;
        }
    });
    print("\n");
});

_(data).forEach(function (elem, key) {
    jsonStream.write(elem);
});

print("Writing", _(data).size(), "elements to", args.output || "-","\n");

jsonStream.end();
