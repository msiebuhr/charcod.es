
$PHONY:=ucd.nounihan.flat.xml

run:
	python -m SimpleHTTPServer

all: data-all.json data-nounihan.json

ucd.nounihan.flat.xml:
	wget -c http://www.unicode.org/Public/6.1.0/ucdxml/ucd.nounihan.flat.zip -O /tmp/ucd.nounihan.flat.zip
	unzip -p /tmp/ucd.nounihan.flat.zip > $@

ucd.all.flat.xml:
	wget -c http://www.unicode.org/Public/6.1.0/ucdxml/ucd.all.flat.zip -O /tmp/ucd.all.flat.zip
	unzip -p /tmp/ucd.all.flat.zip > $@

data-%.json: ucd.%.flat.xml ucd-xml2json.js
	./ucd-xml2json.js < $< > $@

clean:
	rm /tmp/ucd.*.flat.zip

