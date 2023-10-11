function caesarCipher(string) {
  if (string.length <= 0) {
    return "Empty String!!!";
  }

  let stringArray = string.split("");

  let outputString = "";

  stringArray.forEach((element) => {
    let char = element;

    if (element.match(/[a-z]/i)) {
      var code = element.charCodeAt();

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + 1) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + 1) % 26) + 97);
      }
    }

    outputString += char;
  });

  return outputString;
}

module.exports = caesarCipher;
