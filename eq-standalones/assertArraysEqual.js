// -- Arrays eq --
const eqArrays = function(elemA, elemB) {
  // Compare length
  if (elemA.length !== elemB.length) return false;
  // Compare elements
  for (let i = 0; i < elemA.length; i++) {
    if (elemA[i] !== elemB[i]) return false;
  }
  // All checks passed
  return true;
};

const assertArraysEqual = function(actual, expected) {
  // Create console messages
  const failedMsg = `🛑 Assertion Failed 🛑 > ${actual} !== ${expected}`;
  const passedMsg = `✅ Assertion Passed ✅ > ${actual} === ${expected}`;

  // test and return appropriate response
  console.log(eqArrays(actual, expected) ? passedMsg : failedMsg);
};

// Test arrays eq
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // false

// More tests
assertArraysEqual([4], [4]); // true
assertArraysEqual([4], 4); // false
assertArraysEqual(["1", "b", 3], ["1", "b", 1 + 2]); // true
assertArraysEqual([4, 3, 2], [4, 3, "2"]); // true
assertArraysEqual([1], []); // false
assertArraysEqual([0], [false]); // false
