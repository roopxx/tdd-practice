const reverseString = require("../scripts/reverseString");

test("reverse the strings", () => {
  expect(reverseString("The reversed string")).toBe("gnirts desrever ehT");
});
