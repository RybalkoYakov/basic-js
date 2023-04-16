const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options
  if (typeof str === 'boolean') str = str.toString()
  if (typeof addition === "boolean") addition = addition.toString()
  if (str === null) str = 'null'
  if (addition === null) addition = 'null'

  if (!separator) separator = '+'
  if (!addition) addition = ''
  if (!additionSeparator) additionSeparator = '|'
  if (!additionRepeatTimes) additionSeparator = ''


  function createAddition() {
    if (additionRepeatTimes <= 0) return ''
    return (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition
  }


  return (str + createAddition() + separator).repeat(repeatTimes - 1) + str + createAddition()
}

module.exports = {
  repeater
};
