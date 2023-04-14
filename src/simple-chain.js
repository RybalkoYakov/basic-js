const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink( value ) {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink( position ) {
    if (position <= 0 || position > this.chain.length || typeof position !== "number") throw new Error("You can't remove incorrect link!")

    this.chain.splice(position  - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let tmp = this.chain
    this.chain = []
    return tmp.join('~~')
  }
};

module.exports = {
  chainMaker
};
