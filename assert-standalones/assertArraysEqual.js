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


// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  // Test via Arrays function
  let isEqual = eqArrays(actual, expected);

  // Create console messages
  const failedMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const passedMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  // test and return appropriate response
  if (!isEqual) console.log(failedMsg);
  else console.log(passedMsg);
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
