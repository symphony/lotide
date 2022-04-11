const assertEqual = require('../assertEqual').assertEqual;
const tail = require("../tail");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test tail edge cases
assertEqual(tail([1, 4]), 4);
assertEqual(tail([1, 4]), [4, 3, 2]);
assertEqual(tail([1]), []);
