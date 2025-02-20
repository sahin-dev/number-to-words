# Number to Words

[![npm version](https://img.shields.io/npm/v/number-to-words.svg)](https://www.npmjs.com/package/number-to-words)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D12.0.0-brightgreen)](https://nodejs.org)

A lightweight npm package to convert numbers into their text representation (e.g., `1000` → `"one thousand"`).

---

## Installation

You can install the package via npm:

```bash
npm i number-to-text-converter
```
or

```bash
yarn add number-to-text-converter
```

## Basic Usage
```bash
const numberToWords = require('number-to-text-converter');

console.log(numberToWords(1000)); // "one thousand"
console.log(numberToWords(1010)); // "one thousand ten"
console.log(numberToWords(123456)); // "one hundred twenty-three thousand four hundred fifty-six"
console.log(numberToWords(999999999)); // "nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine"
```

## Edge Cases

```bash
console.log(numberToWords(0)); // "zero"
console.log(numberToWords(-42)); // "negative forty-two"
console.log(numberToWords(1000000)); // "one million"
```

## API

numberToWords(number)
    - number (Number): The number to convert into words.
    - Returns (String): The text representation of the number.

## Supported Range

This package supports numbers in the range of -999,999,999,999,999 to 999,999,999,999,999 (quadrillions).

## Contributing

Contributions are welcome! If you find a bug or want to add a feature, please open an issue or submit a pull request.

Fork the repository.

Create a new branch (git checkout -b feature/your-feature).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/your-feature).

Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

##  Support

If you find this package useful, please consider giving it a ⭐️ on GitHub!