var test = require('tap').test;

var removeUnprintable = require('../remove-unprintable');

test('remove unprintable chars', function(t) {
	t.equal(removeUnprintable('foo'), 'foo');
	t.equal(removeUnprintable('\u0000foo\u000b bar'), 'foo bar');
	t.end();
});