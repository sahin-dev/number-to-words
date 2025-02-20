const numberToWords = require('../index');

console.log(numberToWords(1000)); // "one thousand"
console.log(numberToWords(1010)); // "one thousand ten"
console.log(numberToWords(123456)); // "one hundred twenty-three thousand four hundred fifty-six"
console.log(numberToWords(999999999)); // "nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine"