EXTRA_JSON:=$(shell find unicode -type f -name \*.json \! -name \?\?-\*-unicode.json)
CURRENT_GIT:=$(shell git describe --long --tags --always --dirty 2> /dev/null|| echo unknown)
HTTP_PUB_FILES:=$(shell find http-pub -type f \! -name data.json)

.PHONY:test

test: http-pub/data.json
	./node_modules/.bin/mocha -R spec

run: http-pub http-pub/data.json
	(cd $<; python -m SimpleHTTPServer)

run-production: http-pub-production
	(cd $<; python -m SimpleHTTPServer)

run-gh-pages: gh-pages
	(cd $<; python -m SimpleHTTPServer)


http-pub-production: http-pub/index.html $(HTTP_PUB_FILES) http-pub/data.json
	rm -rf $@/*
	./node_modules/.bin/buildProduction \
		--manifest \
		--sourcemaps \
		--subresourceintegrity \
		--contentsecuritypolicy \
		--root $(<D) \
		--outroot $@ \
		$<

# Set up git pages
# (cd gh-pages; git checkout --orphan gh-pages; git rm -rf .)
gh-pages:
	git clone git@github.com:msiebuhr/charcod.es.git gh-pages
	(cd gh-pages; git checkout gh-pages)

commit-gh-pages: http-pub/data.json gh-pages http-pub-production
	(cd gh-pages; git pull origin gh-pages)
	(cd gh-pages; find . -type f \! -name CNAME \! -regex '.*git.*' -print0 | xargs -0 git rm)
	cp -vr http-pub-production/* gh-pages/
	(cd gh-pages; git add .; git commit --all --edit --message="Publish master@$(CURRENT_GIT).")

push-gh-pages:
	(cd gh-pages; git pull origin gh-pages)
	(cd gh-pages; git push origin gh-pages)

ucd.nounihan.flat.xml:
	cat /tmp/ucd.nounihan.flat.zip | curl -s -C - http://www.unicode.org/Public/10.0.0/ucdxml/ucd.nounihan.flat.zip > /tmp/ucd.nounihan.flat.zip
	unzip -p /tmp/ucd.nounihan.flat.zip > $@

w3c-unicode.xml:
	cat $@ | curl -s -C - http://www.w3.org/2003/entities/2007xml/unicode.xml > $@

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
