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

// Test arrays eq
console.log("✅: ", eqArrays([1, 2, 3], [1, 2, 3]));
console.log("🛑: ", eqArrays([1, 2, 3], [3, 2, 1]));

console.log("✅: ", eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log("🛑: ", eqArrays(["1", "2", "3"], ["1", "2", 3]));



// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let isEqual = actual === expected;

  // Create console messages
  const failedMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const passedMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  // test and return appropriate response
  if (!isEqual) console.log(failedMsg);
  else console.log(passedMsg);
};


// Array Test
console.log("-- Test eqArray -- should be true");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// TEST CODE
console.log("-- non array tests --");
assertEqual(1, "1");
assertEqual("well, well, well", "whale, whale, whale");
assertEqual("HELLO WORLD".toLowerCase(), "hello world");
assertEqual(13 + 8, 7 * 3);
assertEqual(undefined, 0);
assertEqual(!NaN, "this is getting complex" > "?");


