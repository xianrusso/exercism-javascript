export class RotationalCipher {
  static rotate(phrase, num) {
    const regex = /[^A-Za-z]/;
    let cipher = '',
        charBase,
        charCode,
        shiftedChar;
    for(const char of phrase) {
      if (regex.test(char)) {
        cipher += char;
        continue;
      }

      charCode = char.charCodeAt();
      charBase = charCode >= 97 ? 97 : 65;
      shiftedChar = ((charCode - charBase) + num) % 26 + charBase;
      cipher += String.fromCharCode(shiftedChar);
    }
    return cipher;
  }
}