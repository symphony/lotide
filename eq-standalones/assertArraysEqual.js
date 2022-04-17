const { eqArrays } = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  // Create console messages
  const failedMsg = `🛑 Assertion Failed 🛑 > ${actual} !== ${expected}`;
  const passedMsg = `✅ Assertion Passed ✅ > ${actual} === ${expected}`;

  // test and return appropriate response
  console.log(eqArrays(actual, expected) ? passedMsg : failedMsg);
};

module.exports = { assertArraysEqual };