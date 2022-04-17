/**
 * Returns either a single or pair of elements found in the middle of a given array
 */
const middle = array => {
  // requires array - return error if incorrect entry
  if (!Array.isArray(array)) return "Please provide a single array";
  // check if array is required length
  if (array.length <= 2) return [];

  // We need to check if array length is odd or even
  // console.log("Array: ", array, "length: ", array.length);
  const center = array.length / 2;
  const isEven = Number.isInteger(center);
  // console.log("is even: ", isEven);

  // return single element and break from function
  // console.log("middle index: ", center | 0);
  if (!isEven) return [array[center | 0]];

  // else find middle pair of indices and return
  return [array[center - 1], array[center]];
};

module.exports = { middle };