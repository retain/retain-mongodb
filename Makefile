TESTS = test/spec/test
REPORTER = spec
MOCHA = ./node_modules/mocha/bin/mocha
_MOCHA = ./node_modules/mocha/bin/_mocha
ISTANBUL = ./node_modules/istanbul/lib/cli.js
UGLIFY = ./node_modules/uglify-js/bin/uglifyjs

BROWSERIFY = ./node_modules/browserify/bin/cmd.js

server:
	node test/fixtures/server/server.js --start

test: test-server

test-server:
	$(MOCHA) --timeout 200 $(TESTS) --reporter spec

test-cov: istanbul

istanbul:
	$(ISTANBUL) cover $(_MOCHA) -- -R spec test/spec/server

coveralls:
	cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

clean:
	rm -rf ./coverage