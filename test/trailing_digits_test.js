assert = require('assert');
let pickNumbersFromLast=require('../lib/trailing_digits.js').pickNumbersFromLast;

//zero and one digits
assert.equal(pickNumbersFromLast(1,0),0);

assert.equal(pickNumbersFromLast(1,1),1);
assert.equal(pickNumbersFromLast(12,1),2);
assert.equal(pickNumbersFromLast(123,1),3);
assert.equal(pickNumbersFromLast(1234,1),4);

assert.equal(pickNumbersFromLast(4834,2),34);
assert.equal(pickNumbersFromLast(3443,3),443);
assert.equal(pickNumbersFromLast(34343343,4),3343);
assert.equal(pickNumbersFromLast(1234,5),1234);
assert.equal(pickNumbersFromLast(8762,2),62);

// large numbers
assert.equal(pickNumbersFromLast(9898798,2),98);
assert.equal(pickNumbersFromLast(1234,99),1234);

// negative values
assert.equal(pickNumbersFromLast(1234,-1),0);
assert.equal(pickNumbersFromLast(00010,-3),0);
assert.equal(pickNumbersFromLast(10001,-5),0);

console.log('Test passed');
