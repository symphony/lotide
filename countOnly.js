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

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // console.log("all items:", allItems, "accepted:", itemsToCount );
  const report = {};
  for (const firstName of allItems) {
    // console.log("counting:", firstName, "allowed?:", itemsToCount[firstName]);
    // Check if key name is in our accepted list
    if (itemsToCount[firstName]) {
      // Increase count by 1 if it exists, otherwise create it and set count to 1
      report[firstName] = report[firstName] + 1 || 1;
    }
  }
  // console.log(report);
  return report;
};



// -- test data --
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);