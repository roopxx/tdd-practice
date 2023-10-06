function reverseString(string) {
  let stringArray = string.split("");
  let reverseArray = stringArray.reverse().join("");
  return reverseArray;
}

module.exports = reverseString;
