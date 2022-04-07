// --== Assert equal section ==--

// Helper function - Checks if 2 arrays are identical, returns true or false
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

// --== End assert equal section ==--

// --== main function ==--

const countLetters = function(string) {
  const report = {};
  // remove spaces from string
  const stringParsed = string.replaceAll(" ", "");

  // go through each letter.
  for (const l of stringParsed) {
    // increment count if it exists otherwise create and set to 1
    // console.log(l, "before:", report[l]);
    report[l] = report[l] + 1 || 1;
    // console.log(l, "after:", report[l]);
  }
  return report;
};

// -- test --
const countedReport = countLetters("lighthouse in the house");
console.log(countedReport);

// todo implement assert equal