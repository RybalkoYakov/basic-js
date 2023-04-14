const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const stringNumber = n.toString();
  let maxNumber = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < stringNumber.length; i++) {
    if (parseInt(stringNumber.slice(0, i) + stringNumber.slice(i + 1)) > maxNumber) {
      maxNumber = parseInt(stringNumber.slice(0, i) + stringNumber.slice(i + 1));
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
