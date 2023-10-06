const calculator = require("../scripts/calculator");

test("Addition", () => {
  expect(calculator.add(15, 4)).toBe(19);
});

test("Subtraction", () => {
  expect(calculator.subtract(10, 37)).toBe(-27);
});

test("Division", () => {
  expect(calculator.divide(55, 11)).toBe(5);
});

test("Multiplication", () => {
  expect(calculator.multiply(12, 3)).toBe(36);
});
