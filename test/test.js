var test = require('tap').test;

var removeUnprintable = require('../remove-unprintable');

test('remove unprintable chars', function(t) {
    t.equal(removeUnprintable('foo'), 'foo');
    t.equal(removeUnprintable('\u0000foo\u000b bar'), 'foo bar');
    t.equal(removeUnprintable('foo\tbar'), 'foo\tbar');
    t.equal(removeUnprintable('foo' + String.fromCharCode(65279) + 'bar'), 'foobar');
    t.equal(removeUnprintable('foo\nbar'), 'foo\nbar');
    t.end();
});