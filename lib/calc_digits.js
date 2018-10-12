// To find the number of digits of a given number
const numberOfDigits = function (number) {
  let digitCount=0;
  while(number>0) {
    number=Math.floor(number/10);
    digitCount++;
  }
  return digitCount;
}
exports.numberOfDigits=numberOfDigits;
