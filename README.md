Charcod.es
==========

Find those nice - but ever elusive - unicode characters.

How
---

It splits everything into trigrams (`foobar` is split into `foo`, `oob`, `oba`
and `bar`), which are put into a dictionary, all pointing back too `foobar`.

When searching for, ex. `fobar`, the word is split in the same manner and the
parts are looked up in the search dictionary (where `oba` and `bar` will
match). The results are then ranked by most matching trigrams.

The only major down-side to this (so far) is that large string will produce
huge result-sets, which are quite expensive to set up in the DOM.

Add stuff
---------

The build-script will fetch a unicode XML database and extract all the codes,
their official names and aliases. Ditto for HTML char entities (not fully
implemented yet, tho). Further aliases can be added manually by adding/editing
files in the `unicode/`-directory.

Feel free to fork and add ASCII-fications and what not to these files.

