EXTRA_JSON:=$(shell find unicode -type f -name \*.json \! -name \?\?-\*-unicode.json)
CURRENT_GIT:=$(shell git describe --long --tags --always --dirty 2> /dev/null|| echo unknown)
HTTP_PUB_FILES:=$(shell find http-pub -type f \! -name data.json)

.PHONY:test

test: http-pub/data.json
	./node_modules/.bin/mocha -R spec

run: http-pub http-pub/data.json
	(cd $<; python3 -m http.server)

run-production: http-pub-production
	(cd $<; python3 -m http.server)

http-pub-production: http-pub/index.html $(HTTP_PUB_FILES) http-pub/data.json
	rm -rf $@/*
	./node_modules/.bin/buildProduction \
		--precacheserviceworker \
		--sourcemaps \
		--subresourceintegrity \
		--contentsecuritypolicy \
		--root $(<D) \
		--outroot $@ \
		$<

ucd.nounihan.flat.xml: Makefile
	curl -s -C - http://www.unicode.org/Public/13.0.0/ucdxml/ucd.nounihan.flat.zip > /tmp/ucd.nounihan.flat.zip
	unzip -p /tmp/ucd.nounihan.flat.zip > $@

w3c-unicode.xml: Makefile
	curl -s -C - http://www.w3.org/2003/entities/2007xml/unicode.xml > $@

unicode/01-w3c-unicode.json: w3c-unicode.xml w3c-xml2json.js
	./w3c-xml2json.js -i $< -o $@

unicode/00-base-unicode.json: ucd.nounihan.flat.xml ucd-xml2json.js
	./ucd-xml2json.js -i $< -o $@

http-pub/data.json: unicode/00-base-unicode.json unicode/01-w3c-unicode.json $(EXTRA_JSON) compact-json.js
	./compact-json.js -o $@ unicode/00-base-unicode.json unicode/01-w3c-unicode.json $(EXTRA_JSON)

clean:
	rm -rf http-pub/data.json
	rm -rf unicode/00-base-unicode.json unicode/01-w3c-unicode.json
	rm -rf /tmp/ucd.*.flat.zip
	rm -fr http-pub-production

distclean: clean
	rm -rf ucd.nounihan.flat.xml w3c-unicode.xml http-pub-production
