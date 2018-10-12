let numberOfDigits = require('./calc_digits.js').numberOfDigits;
let pick_numbers_from_last=require('./pick_numbers_from_last.js').pick_numbers_from_last;

const isTrimorphic = function (number) {
  let numberCube = Math.pow(number,3);
  let digits = numberOfDigits(number);
  let endDigits = pick_numbers_from_last(numberCube,digits);
  return(number == endDigits)
}
exports.isTrimorphic=isTrimorphic;
