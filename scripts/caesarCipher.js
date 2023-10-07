function caesarCipher(string) {
  if (string.length <= 0) {
    return "Empty String!!!";
  }

  let stringArray = string.split("");
  let encryptedArray = [];
  stringArray.forEach((element) => {
    let code;
    if (element == " ") {
      code = element.charCodeAt();
    } else {
      code = element.charCodeAt() + 1;
    }
    encryptedArray.push(String.fromCharCode(code));
  });

  return encryptedArray.join("");
}

module.exports = caesarCipher;
