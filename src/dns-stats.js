const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let domainsArr = domains.map(value => value.split('.')).map(value => transformDomains(value))
  let resultObj = {}

  function transformDomains(array) {
    array.reverse()
    let domains = []
    for (let i = 0; i < array.length; i++) {
      if (array[i - 1]) {
        domains.push(`${domains[i - 1]}.${array[i]}`)
      } else {
        domains.push(`.${array[i]}`)
      }
    }
    return domains
  }

  for (let i = 0; i < domainsArr.length; i++) {
    for (let j = 0; j < domainsArr[i].length; j++) {
      if (resultObj[domainsArr[i][j]]) {
        resultObj[domainsArr[i][j]]++
      } else {
        resultObj[domainsArr[i][j]] = 1
      }
    }
  }

  return resultObj
}

module.exports = {
  getDNSStats
};
