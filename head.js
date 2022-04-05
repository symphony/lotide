const assertEqual = function(actual, expected) {
  // Create console messages
  const isEqual = actual === expected;
  const failedMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const passedMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  // test and return appropriate response
  if (!isEqual) console.log(failedMsg);
  else console.log(passedMsg);
};

const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([15]), 15);
assertEqual(head([]), undefined);