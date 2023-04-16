const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedString = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {

        let keyCharCode = key.charCodeAt(keyIndex % key.length);

        encryptedString += String.fromCharCode(((charCode - 65 + keyCharCode - 65) % 26) + 65);
        keyIndex++;
      } else {
        encryptedString += String.fromCharCode(charCode);
      }
    }

    return this.direct ? encryptedString : encryptedString.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    let decryptedString = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      let encryptedChar = message.charCodeAt(i);

      if (encryptedChar >= 65 && encryptedChar <= 90) {
        let keyChar = key.charCodeAt(keyIndex % key.length);
        decryptedString += String.fromCharCode(((encryptedChar - 65 - keyChar + 91) % 26) + 65);
        keyIndex++;
      } else {
        decryptedString += String.fromCharCode(encryptedChar);
      }
    }

    return this.direct ? decryptedString : decryptedString.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
