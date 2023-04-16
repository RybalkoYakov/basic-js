const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!")

  const copy = [...arr]

  const controlSequences = {
    '--discard-next': function (arr) {
      const i = arr.indexOf('--discard-next')
      arr[i + 1] = null
      arr[i] = null
    },
    '--discard-prev': function (arr) {
      const i = arr.indexOf('--discard-prev')
      arr[i - 1] = null
      arr[i] = null
    },
    '--double-next': function (arr) {
      const i = arr.indexOf('--double-next')
      if (arr[i + 1] !== null) {
        arr[i] = null
        arr.splice(i, 0, arr[i + 1])
      } else {
        arr[i] = null
      }
    },
    '--double-prev': function (arr) {
      const i = arr.indexOf('--double-prev')
      if (arr[i - 1] !== null) {
        arr[i] = null
        arr.splice(i, 0, arr[i - 1])
      } else {
        arr[i] = null
      }
    },
  }

  for (let i = 0; i < copy.length; i++) {
    if (Object.keys(controlSequences).includes(arr[i])) {
      controlSequences[arr[i]](copy)
    }
  }

  return copy.filter(value => value !== null && value !== undefined)
}

module.exports = {
  transform
};
