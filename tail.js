const assertEqual = function(actual, expected) {
  let isEqual = actual === expected;

  // exception to handle arrays
  loop:
  if (Array.isArray(actual) && actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) break loop;
    }
    isEqual = true;
  }

  // Create console messages
  const failedMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const passedMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  // test and return appropriate response
  if (!isEqual) console.log(failedMsg);
  else console.log(passedMsg);
};

const tail = function(array) {
  const headlessArray = array.slice(1);
  return headlessArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test tail edge cases
assertEqual(tail([1, 4]), 4);
assertEqual(tail([1, 4]), [4, 3, 2]);
assertEqual(tail([1]), []);
