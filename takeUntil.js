// -- assert eq --
const eqArrays = function(elemA, elemB) {
  // Compare length
  if (elemA.length !== elemB.length) return false;
  // Compare elements
  for (let i = 0; i < elemA.length; i++) {
    if (elemA[i] !== elemB[i]) return false;
  }
  // All checks passed
  return true;
};

const assertArraysEqual = function(actual, expected) {
  // Create console messages
  const failedMsg = `🛑 Assertion Failed 🛑 > ${actual} !== ${expected}`;
  const passedMsg = `✅ Assertion Passed ✅ > ${actual} === ${expected}`;

  // test and return appropriate response
  console.log(eqArrays(actual, expected) ? passedMsg : failedMsg);
};
// -- end assert --

// -- main function --
// saves each element of an array up until a specified condition is passed
const takeUntil = function(array, callback) {
  const sliced = [];
  // loop and test each element for callback condition
  for (const element of array) {
    if (callback(element)) break; // break when found
    sliced.push(element); // append element if not
  }
  return sliced;
};

// -- tests --
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');

// print results
console.log(results1);
console.log('---');
console.log(results2);

// assert eq tests
// -- Expected output --
const expected1 = [ 1, 2, 5, 7, 2 ];
const expected2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
assertArraysEqual(results1, expected1);
assertArraysEqual(results2, expected2);