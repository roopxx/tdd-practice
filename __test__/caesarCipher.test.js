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
