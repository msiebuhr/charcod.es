PHONY:=ucd.nounihan.flat.xml
EXTRA_JSON:=$(shell find unicode -type f -name \*.json)

run: http-pub/data-nounihan.json
	(cd http-pub; python -m SimpleHTTPServer)

ucd.nounihan.flat.xml:
	wget -c http://www.unicode.org/Public/6.1.0/ucdxml/ucd.nounihan.flat.zip -O /tmp/ucd.nounihan.flat.zip
	unzip -p /tmp/ucd.nounihan.flat.zip > $@

unicode/00-base-unicode.json: ucd.nounihan.flat.xml ucd-xml2json.js
	./ucd-xml2json.js -i $< -o $@

http-pub/data-nounihan.json: unicode/00-base-unicode.json $(EXTRA_JSON)
	./compact-json.js -o $@ $^

clean:
	rm http-pub/data-nounihan.json
	rm unicode/00-base-unicode.json
	rm /tmp/ucd.*.flat.zip

