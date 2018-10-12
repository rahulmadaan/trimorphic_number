const isTrimorphic = require('../lib/is_trimorphic.js').isTrimorphic;

const main = function () {
  inputNumber = +process.argv[2]; 
  console.log(isTrimorphic(inputNumber));
}

main();
