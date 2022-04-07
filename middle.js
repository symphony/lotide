// --== assert equal section ==--

// Help function - Checks if 2 arrays are identical, returns true or false
const eqArrays = function(actual, expected) {
  // We can return if arrays aren't the same length
  if (actual.length !== expected.length) return false;

  // Check each index, return if mismatch
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) return false;
  }

  // All checks passed
  return true;
};


// Compares and prints result if 2 given arrays match or not
// Doesn't return a value
const assertArraysEqual = function(actual, expected) {
  // Test via Arrays function
  let isEqual = eqArrays(actual, expected);

  // Create console messages
  const failedMsg = `🛑 Assertion Failed 🛑 > ${actual} !== ${expected}`;
  const passedMsg = `✅ Assertion Passed ✅ > ${actual} === ${expected}`;

  // test and print appropriate response
  if (!isEqual) console.log(failedMsg);
  else console.log(passedMsg);
};


// Compares if 2 arguments are identical
// Doesn't return a value
const assertEqual = function(actual, expected) {
  // Pass to array function if array
  if (Array.isArray(actual) && actual.length === expected.length) {
    assertArraysEqual(actual, expected);
    return;
  }
  // exit function if both are arrays else continue
  let isEqual = actual === expected;

  // Create console messages
  const failedMsg = `🛑 Assertion Failed 🛑 > ${actual} !== ${expected}`;
  const passedMsg = `✅ Assertion Passed ✅ > ${actual} === ${expected}`;

  // test and return appropriate response
  if (!isEqual) console.log(failedMsg);
  else console.log(passedMsg);
};

// --== end assertequal section ==--


// --== main middle function ==--
// Returns either a single or pair of elements found in the middle of a given array
const middle = function(array) {
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


// -= test section =-
const testArrayOdd = [1,3,3,6,4];
const testArrayEven = ["does it", "return", "this", "and this", "correctly", "?"];
// console.log(middle(testArrayOdd));
// console.log(middle(testArrayEven));

// -= assert equal tests =-
console.log("\n--Test with assert equal--");
// edge cases - array too short
assertEqual(middle([1]), []); // => []
assertEqual(middle([1, 2]), []); // => []

// odd length tests
assertEqual(middle([1, 2, 3]), [2]); // => [2]
assertEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

// even length tests
assertEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

// more tests tests
assertEqual(middle(testArrayOdd), [3]);
assertEqual(middle(testArrayEven), ["this", "and this"]);