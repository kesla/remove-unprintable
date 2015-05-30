var removeUnprintable = require('./remove-unprintable');

console.time('no unprintable')
for(var i = 0 ; i < 1000000; ++i) {
  removeUnprintable('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
}
console.timeEnd('no unprintable')

console.time('with unprintable')
for(var i = 0 ; i < 1000000; ++i) {
  removeUnprintable('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\u000b');
}
console.timeEnd('with unprintable')
