// --== Assert equal section ==--

// -Helper function- Checks if 2 (non object) elements are identical, returns true or false
// does not work if nested elements are arrays or objects
const eqNonObj = function(elemA, elemB) {
  // first check if non arrays and matching, else continue
  if (elemA === elemB) return true;

  // Array tests below
  // We can return if both aren't arrays
  if (!Array.isArray(elemA) || !Array.isArray(elemB)) return false;

  // We can return if arrays aren't the same length
  if (elemA.length !== elemB.length) return false;

  // Compare indexes, return if mismatch
  for (let i = 0; i < elemA.length; i++) {
    if (elemA[i] !== elemB[i]) return false;
  }

  // All elements match
  return true;
};

// -Helper function- Checks if 2 objects are identical, returns true or false
// Does not work if values contain objects
const eqObjects = function(objectA, objectB) {
  // return if either object is an array, else continue
  if (Array.isArray(objectA) || Array.isArray(objectB)) return false;
  // console.log("I am here");

  // We can return if objects aren't the same length
  if (Object.keys(objectA).length !== Object.keys(objectB).length) return false;

  // now we need to compare every key and value pair between both objects, for this we can use our help function
  // if any comparison is false we can return
  for (const key in objectA) {
    // console.log("key:", key, "ValueA:", objectA[key], "ValueB:", objectB[key]);
    // console.log("matching?:", eqNonObj(objectA[key], objectB[key]));
    if (!eqNonObj(objectA[key], objectB[key])) return false;
  }

  // all pairs identical
  return true;
};

// -- main eq function --
// Compares if 2 arguments are identical
// Prints to console - does not return a value
const assertEqual = function(actual, expected) {
  // Create console messages
  const failedMsg = `🛑 Assertion Failed 🛑 > ${actual} !== ${expected}`;
  const passedMsg = `✅ Assertion Passed ✅ > ${actual} === ${expected}`;

  // First do a non-object comparison
  let isEqual = eqNonObj(actual, expected); // send to sub function

  // Exception to check if objects (but not arrays)
  const areObjs = typeof(actual) === "object" && typeof(expected) === "object";
  if (!isEqual && areObjs) isEqual = eqObjects(actual, expected); // send to sub function


  // print appropriate response
  console.log(isEqual ? passedMsg : failedMsg);
};

// --== End assert equal section ==--


// -- TEST CODE --
// -- standard tests --
assertEqual(1, "1");
assertEqual("well, well, well", "whale, whale, whale");
assertEqual("HELLO WORLD".toLowerCase(), "hello world");
assertEqual(13 + 8, 7 * 3);
assertEqual(undefined, 0);
assertEqual(!NaN, "this is getting complex" > "?");

// -- array tests --
console.log("✅: ", eqNonObj([1, 2, 3], [1, 2, 3]));
console.log("🛑: ", eqNonObj([1, 2, 3], [3, 2, 1]));

console.log("✅: ", eqNonObj(["1", "2", "3"], ["1", "2", "3"]));
console.log("🛑: ", eqNonObj(["1", "2", "3"], ["1", "2", 3]));

// -- tests obs w primitives --
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

// -- tests objs w arrays --
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(cd, cd2); // => false

