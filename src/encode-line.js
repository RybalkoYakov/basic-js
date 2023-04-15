const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine( str ) {
  let counter = 1
  let result = ''
  let prevCharacter = str[0]

  if (str.length === 0) return str

  for (let i = 1; i < str.length; i++) {
    if (str[i] === prevCharacter) {
      counter++
    } else {
      counter === 1 ? result += prevCharacter : result += counter + prevCharacter
      counter = 1
      prevCharacter = str[i]
    }
  }
  counter === 1 ? result += prevCharacter : result += counter + prevCharacter
  return result
}

module.exports = {
  encodeLine
};
