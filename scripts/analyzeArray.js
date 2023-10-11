function analyzeArray(array) {
  let regex = /\D/g;
  if (array.length === 0) {
    return "The array is empty!!!";
  }
  if (array.some((elem) => regex.test(elem))) {
    return "Array has alphanumeric values which cannot be taken";
  }
  let average = array.reduce((prev, curr) => prev + curr, 0) / array.length;
  let max = Math.max(...array);
  let min = Math.min(...array);
  let length = array.length;

  let object = {
    average,
    min,
    max,
    length,
  };
  return object;
}

module.exports = analyzeArray;
