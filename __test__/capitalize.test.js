const capitalize = require("../scripts/capitalize");

test("capitalize the first letter of the string", () => {
  expect(capitalize("the first letter is not lowercase")).toBe(
    "The first letter is not lowercase"
  );
});
