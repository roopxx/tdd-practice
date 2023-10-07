const analyzeArray = require("../scripts/analyzeArray");

test("when provided an array of small numbers", () => {
  let result = {
    average: 4.5,
    min: 1,
    max: 8,
    length: 8,
  };
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8])).toStrictEqual(result);
});

test("when an empty array is provided ", () => {
  expect(analyzeArray([])).toStrictEqual("The array is empty!!!");
});

test("when an array with large values is provided ", () => {
  let result = {
    average: 25689.2,
    min: 225,
    max: 64676,
    length: 5,
  };
  expect(analyzeArray([225, 3387, 4434, 55724, 64676])).toStrictEqual(result);
});

test("when the array contains alphanumeric values", () => {
  expect(
    analyzeArray([1, 32, 12, "alpha", 34, 54, "values", 23])
  ).toStrictEqual("Array has alphanumeric values which cannot be taken");
});
