// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // Create console messages
  const isEqual = actual === expected;
  const failedMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const passedMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  // test and return appropriate response
  if (!isEqual) console.log(failedMsg);
  else console.log(passedMsg);
};

// TEST CODE
assertEqual(1, "1");
assertEqual("well, well, well", "whale, whale, whale");
assertEqual("HELLO WORLD".toLowerCase(), "hello world");
assertEqual(13 + 8, 7 * 3);
assertEqual(undefined, 0);
assertEqual(!NaN, "this is getting complex" > "?");