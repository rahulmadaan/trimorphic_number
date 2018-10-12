const pickNumbersFromLast = function (number,digits) {
  let divisor = Math.pow(10,digits);
  return Math.round(number % divisor);
}
exports.pickNumbersFromLast=pickNumbersFromLast;
