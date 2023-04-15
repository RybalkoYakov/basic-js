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
function transform( /*arr*/ ) {
  // if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!")
  //
  // const copy = [...arr]
  //
  // const controlSequences = {
  //   '--discard-next': function (arr, index) {
  //     arr[index + 1] = null
  //     arr.splice(index, 1)
  //   },
  //   '--discard-prev': function (arr, index) {
  //     arr[index - 1] = null
  //     arr.splice(index, 1)
  //   },
  //   '--double-next': function (arr, index) {
  //     arr.splice(index + 1, 0, arr[index + 1])
  //   },
  //   '--double-prev': function (arr, index) {
  //     arr.splice(index - 1, 0, arr[index - 1])
  //   },
  // }
  //
  // for (let i = 0; i < arr.length; i++) {
  //   if (Object.keys(controlSequences).includes(arr[i])) {
  //     controlSequences[arr[i]](copy, i)
  //   }
  // }
  //
  // return copy.filter(value => value !== null)
}

module.exports = {
  transform
};
