const mainExport = require('../assertEqual');
const eqNonObj = mainExport.eqNonObj;
const eqObjects = mainExport.eqObjects;
const assertEqual = mainExport.assertEqual;

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