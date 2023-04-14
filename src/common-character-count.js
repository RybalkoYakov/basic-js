const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount( s1, s2 ) {
  function countLetters(string) {
    let result = {}
    for (let i = 0; i < string.length; i++) {
      if (result[string[i]]) {
        result[string[i]]++
      } else {
        result[string[i]] = 1
      }
    }
    return result
  }

  let counter = 0

  const letters1 = countLetters(s1)
  const letters2 = countLetters(s2)

  for (const key in letters1) {
    if (letters2[key]) {
      counter += Math.min(letters1[key], letters2[key])
    }
  }

  return counter
}

module.exports = {
  getCommonCharacterCount
};
