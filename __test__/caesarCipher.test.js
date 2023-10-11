const caesarCipher = require("../scripts/caesarCipher");

test("cryptography working", () => {
  expect(caesarCipher("abaRacaDabara")).toBe("bcbSbdbEbcbsb");
});

test("cryptography working with spaces", () => {
  expect(caesarCipher("abC de")).toBe("bcD ef");
});

test("if no string is provided ", () => {
  expect(caesarCipher("")).toStrictEqual("Empty String!!!");
});

test("end of alphabets", () => {
  expect(caesarCipher("Azax and Zaxa")).toStrictEqual("Baby boe Abyb");
});

test("special characters", () => {
  expect(caesarCipher("You are not !@#$%$%^&*, HAHAHA!!")).toStrictEqual(
    "Zpv bsf opu !@#$%$%^&*, IBIBIB!!"
  );
});
