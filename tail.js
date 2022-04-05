const assertEqual = function(actual, expected) {
  // Create console messages
  const isEqual = actual === expected;
  const failedMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const passedMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  // test and return appropriate response
  if (!isEqual) console.log(failedMsg);
  else console.log(passedMsg);
};

const tail = function(array) {
  const headlessArray = array.slice(1);
  console.log("Tail array: ", headlessArray);
  return headlessArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test tail edge cases
assertEqual(tail([]), []); // FALSE but should be true; can't compare arrays
assertEqual(tail([1]), []); // FALSE but should be true; can't compare arrays
