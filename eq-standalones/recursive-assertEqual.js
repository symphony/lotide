const { inspect } = require('util');

const eqNonObj = (elemA, elemB) => {
  if (elemA === elemB) return true;
  if (!Array.isArray(elemA) || !Array.isArray(elemB)) return false;
  if (elemA.length !== elemB.length) return false;

  for (let i = 0; i < elemA.length; i++) {
    if (typeof elemA[i] === 'object' && typeof elemB[i] === 'object') return eqObjects(elemA[i], elemB[i]);
    if (elemA[i] !== elemB[i]) return false;
  }

  return true;
};

const eqObjects = (objectA, objectB) => {
  if (objectA === objectB) return true;
  if (Object.keys(objectA).length !== Object.keys(objectB).length) return false;

  for (const key in objectA) {
    if (typeof objectA[key] === 'object' && typeof objectB[key] === 'object')
      return eqObjects(objectA[key], objectB[key]);
    if (!eqNonObj(objectA[key], objectB[key])) return false;
  }

  return true;
};

const assertEqual = (actual, expected, note) => {
  const pass = `👽 Assertion Passed 🐸 > ${inspect(actual)} === ${inspect(expected)}${note ? ' (' + note + ')' : ''}`;
  const fail = `🦐 Assertion Failed 🍅 > ${inspect(actual)} !== ${inspect(expected)}${note ? ' (' + note + ')' : ''}`;

  console.log(eqObjects(actual, expected) ? pass : fail);
};

module.exports = { eqNonObj, eqObjects, assertEqual };


// recursive tests
const ab = { a: { a: "1", b: "2" }, b: "2" };
const ba = { b: "2", a: { a: "1", b: "2" } };
assertEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(ab, abc, 'should be false');

const cd = { c: { a: "1", b: "2" }, d: ["2", ["2", ["2", 3]]] };
const dc = { d: ["2", ["2", ["2", 3]]], c: { a: "1", b: "2" } };
assertEqual(cd, dc);

const cd2 = { d: ["2", ["2", { a: "1" }], 4], c: "1" };
const cd3 = { c: "1", d: ["2", ["2", { a: "1" }], 4] };
assertEqual(cd2, cd3);