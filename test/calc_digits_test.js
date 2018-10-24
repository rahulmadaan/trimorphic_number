// Test cases for Calculating digits in a given number
assert = require('assert');
let numberOfDigits=require('../lib/calc_digits.js').numberOfDigits;

assert.equal(numberOfDigits(1),1);
assert.equal(numberOfDigits(01),1);
assert.equal(numberOfDigits(10),2);
assert.equal(numberOfDigits(11),2);

// large values
assert.equal(numberOfDigits(99),2);
assert.equal(numberOfDigits(499),3);
assert.equal(numberOfDigits(490900),6);

// negative values
assert.equal(numberOfDigits(-1),0);
assert.equal(numberOfDigits(-10),0);
assert.equal(numberOfDigits(-20),0);
console.log('Test Passed');
