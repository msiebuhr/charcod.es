#!/usr/bin/env node

var expat = require('node-expat'),
    JSONStream = require('JSONStream'),
    fs = require('fs');
var argparse = require('optimist')
    .usage('Usage: $0 [-v] [-o <outfile>] [-i <infile>]')
    .alias('o', 'output')
    .alias('i', 'input');
var args = argparse.argv;

// Parse XML
var parser = new expat.Parser("UTF-8"),
    output = args.output ? fs.createWriteStream(args.output) : process.stdout,
    input = args.input ? fs.createReadStream(args.input) : process.stdin,
    jsonStream = JSONStream.stringify("[", ",\n", "]\n");

jsonStream.pipe(output);

// Parse!
var currentChar = {};
parser.on('startElement', function (name, attrs) {
    if (name === 'char' && attrs.cp) {
        currentChar = {
            c: parseInt(attrs.cp, 16), // Codepoint
            n: attrs.na.toLowerCase(), // Name
            b: attrs.blk.toLowerCase(), // Block
        }
    } else if (name === 'name-alias') {
        currentChar.a = currentChar.a || [];
        currentChar.a.push(attrs.alias.toLowerCase());
    }
});

parser.on('endElement', function (name) {
    if (name === 'char') {
        //console.dir(currentChar);
        jsonStream.write(currentChar);
    } else if (name === 'ucd') {
        jsonStream.end();
    }
});

// Connect input to parser && start
input.on('data', function (data) {
    parser.parse(data);
});
input.resume()
