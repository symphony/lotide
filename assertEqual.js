// --== Assert equal section ==--
// Global assert eq file. Works with arrays and objects.

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
// Does not work if values contain (non-array) objects
const eqObjects = function(objectA, objectB) {
  // return if either object is an array, else continue
  if (Array.isArray(objectA) || Array.isArray(objectB)) return false;
  // console.log("I am here");

  // We can return if objects aren't the same length
  if (Object.keys(objectA).length !== Object.keys(objectB).length) return false;

  // now we need to compare every key and value pair between both objects, for this we can use our helper function that does the actual comparing
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
// Prints result to console - does not return a value
const assertEqual = function(actual, expected) {
  // Imports util library so we can print objects properly
  const inspect = require('util').inspect;
  // Create console messages
  const failedMsg = `🛑 Assertion Failed 🛑 > ${inspect(actual)} !== ${inspect(expected)}`;
  const passedMsg = `✅ Assertion Passed ✅ > ${inspect(actual)} === ${inspect(expected)}`;

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
// moved to ../test/assertEqualTest.js

module.exports = {eqNonObj, eqObjects, assertEqual};