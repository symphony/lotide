// --== Assert equal section ==--



// -Helper function- Checks if 2 arrays are identical, returns true or false
// does not work if elements are arrays or objects
const eqArrays = function(arrayA, arrayB) {
  // We can return if arrays aren't the same length
  if (arrayA.length !== arrayB.length) return false;

  // Check each index, return if mismatch
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) return false;
  }

  // All checks passed
  return true;
};

// -Helper function- Checks if 2 objects are identical, returns true or false
// Does not work if values contain arrays or objects
const eqTrueObjects = function(objectA, objectB) {
  console.log("I am here");
  // we need to save each key and value to arrays then send to array subfunction
  const pairsA = Object.keys(objectA).concat(Object.values(objectA));
  const pairsB = Object.keys(objectB).concat(Object.values(objectB));
  console.log("A entries:", pairsA, "B entries:", pairsB);

  // send to sub function. return result directly
  return eqArrays(pairsA, pairsB);
};

// -- main eq function --
// Compares if 2 arguments are identical
// Prints to console - does not return a value
const assertEqual = function(actual, expected) {
  // Standard comparison (ie. non arrays or objects)
  let isEqual = actual === expected;

  // Exception to check if arrays
  const areArrays = Array.isArray(actual) && Array.isArray(expected);
  if (areArrays) isEqual = eqArrays(actual, expected); // send to sub function

  // Exception to check if objects (but not arrays)
  const areObjs = !areArrays && typeof(actual) === "object" && typeof(expected) === "object";
  if (areObjs) isEqual = eqTrueObjects(actual, expected); // send to sub function

  // The order in which we check above is important. Arrays always override normal values and objects need to override arrays (since objects can be arrays.)

  // If neither object or array, original comparison will be used

  // Create console messages
  const failedMsg = `🛑 Assertion Failed 🛑 > ${actual} !== ${expected}`;
  const passedMsg = `✅ Assertion Passed ✅ > ${actual} === ${expected}`;

  // test and return appropriate response
  if (!isEqual) console.log(failedMsg);
  else console.log(passedMsg);
};

// --== End assert equal section ==--

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqTrueObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqTrueObjects(ab, abc), false); // => false