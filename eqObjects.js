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
// Does not work if values contain objects
const eqTrueObjects = function(objectA, objectB) {
  // console.log("I am here");
  // we need to compare every key and value from first object to second
  for (const key in objectA) {
    if (objectA[key] !== objectB[key]) return false;
  }
  // we ALSO need to compare object 2 keys to object 1 since one could contain more keys than the other
  for (const key in objectB) {
    // console.log("key:", key, "valueA:", objectA[key], "valueB:", objectB[key]);
    if (objectA[key] !== objectB[key]) return false;
  }
  // all checks passed
  return true;
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