const { assert } = require("joi");

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


// Compares and prints log if 2 given arrays match or not
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

// -- Without Function --
// iterates through source array and searches for that element in all of the unwanted array
const without = function(source, unwanted) {
  // console.log("source:", source, " unwanted:", unwanted);
  const result = source.filter(element => !unwanted.includes(element));
  // console.log("result:", result);
  return result;
};


// ---=== TESTS === ---

// EQ Array Test
console.log("\n-- Test AssertEqual with arrays --");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// Test to make sure the original array was not altered by the function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


console.log("\n-- Test Without Function --");
// Without() Tests
assertEqual(without([1, 2, 3], [1]), [2, 3]); // => pass
assertEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => pass