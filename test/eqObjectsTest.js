
const eqObjects = mainExport.eqObjects;
const assertEqual = mainExport.assertEqual;

// -- tests obs w nested objects --
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

// -- tests objs w nested arrays --
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(cd, cd2); // => false