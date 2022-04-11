const assertEqual = require('../assertEqual').assertEqual;
const eqArrays = require("../eq-standalones/eqArrays");

// Test arrays assert
console.log("✅: ", eqArrays([1, 2, 3], [1, 2, 3]));
console.log("🛑: ", eqArrays([1, 2, 3], [3, 2, 1]));

console.log("✅: ", eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log("🛑: ", eqArrays(["1", "2", "3"], ["1", "2", 3]));

// Array Test
console.log("-- Test eqArray -- should be true");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// TEST CODE
console.log("-- non array tests --");
assertEqual(1, "1");
assertEqual("well, well, well", "whale, whale, whale");
assertEqual("HELLO WORLD".toLowerCase(), "hello world");
assertEqual(13 + 8, 7 * 3);
assertEqual(undefined, 0);
assertEqual(!NaN, "this is getting complex" > "?");