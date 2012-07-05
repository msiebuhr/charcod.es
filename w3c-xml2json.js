#!/usr/bin/env node

/*
 * Read in a huge mess of XML and output some nice-ish JSON, which we will
 * later compact.
 */

var expat = require('node-expat'),
    JSONStream = require('JSONStream'),
    fs = require('fs');
var argparse = require('optimist')
    .usage('Usage: $0 [-v] [-o <outfile>] [-i <infile>]')
    .alias('o', 'output')
    .alias('i', 'input');
var args = argparse.argv;

// {{{ fixedFromCharCode(codePoint)
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/fromCharCode
function fixedFromCharCode (codePt) {
    if (codePt > 0xFFFF) {
        codePt -= 0x10000;
        return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
    } else {
        return String.fromCharCode(codePt);
    }
}
// }}}

// Parse XML
var parser = new expat.Parser("UTF-8"),
    output = args.output ? fs.createWriteStream(args.output) : process.stdout,
    input = args.input ? fs.createReadStream(args.input) : process.stdin,
    jsonStream = JSONStream.stringifyObject("{", ",\n", "}\n");

jsonStream.pipe(output);

// Parse!
var currentChar = {},
    currentText = "";
parser.on('startElement', function (name, attrs) {
    if (name === 'character' && attrs.dec && attrs.dec.match(/^\d+$/)) {
        currentChar = {
            code: parseInt(attrs.dec, 10), // Codepoint
            //name: attrs.na.toLowerCase(), // Name
            //block: attrs.blk.toLowerCase(), // Block
        }
    } else if (name === 'entity' && attrs.set.match(/html/)) {
        currentChar.altnames = currentChar.altnames || {}
        currentChar.altnames.html = attrs.id;
    }
});

parser.on('text', function (text) { currentText = text; });

parser.on('endElement', function (name) {
    if (name === 'character') {
        // Skip chars that doesn't have any altnames
        if ('altnames' in currentChar) {
            jsonStream.write([fixedFromCharCode(currentChar.code), currentChar]);
        }
    } else if (name === 'latex') {
        if (currentText.match(/^\\/)) {
            currentChar.altnames = currentChar.altnames || {}
            currentChar.altnames.latex = currentText;
        }
    } else if (name === 'unicode') {
        jsonStream.end();
    }
});

// Connect input to parser && start
input.on('data', function (data) {
    parser.parse(data);
});
input.resume()
