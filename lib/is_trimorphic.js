let numberOfDigits = require('./calc_digits.js').numberOfDigits;
let {pickNumbersFromLast} = require('./pick_numbers_from_last.js');

const isTrimorphic = function (number) {
  let numberCube = Math.pow(number,3);
  let digits = numberOfDigits(number);
  let endDigits = pickNumbersFromLast(numberCube,digits);
  return(number == endDigits)
}
exports.isTrimorphic=isTrimorphic;
