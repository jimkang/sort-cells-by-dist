test:
	node tests/sort-cells-by-dist-tests.js
	node tests/coord-array-tests.js

pushall:
	git push origin master && npm publish

prettier:
	prettier --single-quote --write "**/*.js"
