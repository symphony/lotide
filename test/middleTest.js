const { assertEqual, middle } = require("../lib/index");

// -= test section =-
const testArrayOdd = [1,3,3,6,4];
const testArrayEven = ["does it", "return", "this", "and this", "correctly", "?"];
// console.log(middle(testArrayOdd));
// console.log(middle(testArrayEven));

// -= assert equal tests =-
console.log("\n--Test with assert equal--");
// edge cases - array too short
assertEqual(middle([1]), []); // => []
assertEqual(middle([1, 2]), []); // => []

// odd length tests
assertEqual(middle([1, 2, 3]), [2]); // => [2]
assertEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

// even length tests
assertEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

// more tests tests
assertEqual(middle(testArrayOdd), [3]);
assertEqual(middle(testArrayEven), ["this", "and this"]);