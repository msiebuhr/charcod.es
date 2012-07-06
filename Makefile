PHONY:=ucd.nounihan.flat.xml
EXTRA_JSON:=$(shell find unicode -type f -name \*.json)

run: http-pub/data.json
	(cd http-pub; python -m SimpleHTTPServer)

copy-gh-pages: http-pub/data.json
	git clone git@github.com:msiebuhr/unicodefinder.git gh-pages
	(cd gh-pages; git checkout --orphan gh-pages; git rm -rf .)
	cp http-pub/* gh-pages/
	echo "http-pub/* copied to gh-pages/ - check it's OK and commit/push it!"

ucd.nounihan.flat.xml:
	wget -c http://www.unicode.org/Public/6.1.0/ucdxml/ucd.nounihan.flat.zip -O /tmp/ucd.nounihan.flat.zip
	unzip -p /tmp/ucd.nounihan.flat.zip > $@

w3c-unicode.xml:
	wget -c http://www.w3.org/2003/entities/2007xml/unicode.xml -O $@

unicode/01-w3c-unicode.json: w3c-unicode.xml w3c-xml2json.js
	./w3c-xml2json.js -i $< -o $@

unicode/00-base-unicode.json: ucd.nounihan.flat.xml ucd-xml2json.js
	./ucd-xml2json.js -i $< -o $@

http-pub/data.json: unicode/00-base-unicode.json unicode/01-w3c-unicode.json $(EXTRA_JSON)
	./compact-json.js -o $@ $^

clean:
	rm -rf http-pub/data.json
	rm -rf unicode/00-base-unicode.json
	rm -rf /tmp/ucd.*.flat.zip

