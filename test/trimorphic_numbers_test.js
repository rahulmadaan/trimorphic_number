let isTrimorphic = require('../lib/is_trimorphic.js').isTrimorphic;
assert = require('assert');

//zero value
assert.equal (isTrimorphic(0), true);

assert.equal (isTrimorphic(1), true);
assert.equal (isTrimorphic(10), false);

assert.equal (isTrimorphic(24), true);
assert.equal (isTrimorphic(25), true);

assert.equal (isTrimorphic(44), false);
assert.equal (isTrimorphic(49), true);
assert.equal (isTrimorphic(100), false);

// large values
assert.equal (isTrimorphic(499), true);
assert.equal (isTrimorphic(4999), true);

// negative values
assert.equal (isTrimorphic(-1), false);
assert.equal (isTrimorphic(-10), false);

console.log('Test Passed');


