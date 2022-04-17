const { map } = require("../map");
const { assertArraysEqual } = require('../lib/index');

const words = ["ground", "parmesan", "to", "major", "spaghetti"];

// -- Callback examples --
const singWord = word => `*ahem* [singing voice] ${word} 🎵`;

const getCurrentAndNextItem = (element, i, array) => {
  return `${element} > ${array[i + 1] || "(end of list)"}`;
};

const reverseString = (string) => {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
};

const createObjectWithNameAndIndex = (element, i) => {
  return {name: element, index: i};
};


// -- Expected outputs --
const expected1 = [
  '*ahem* [singing voice] ground 🎵',
  '*ahem* [singing voice] parmesan 🎵',
  '*ahem* [singing voice] to 🎵',
  '*ahem* [singing voice] major 🎵',
  '*ahem* [singing voice] spaghetti 🎵'
];

const expected2 = [
  'ground > parmesan',
  'parmesan > to',
  'to > major',
  'major > spaghetti',
  'spaghetti > (end of list)'
];

const expected3 = ['dnuorg', 'nasemrap', 'ot', 'rojam', 'ittehgaps'];

const result4 = map(words, createObjectWithNameAndIndex);
const expected4 = [
  { name: 'ground', index: 0 },
  { name: 'parmesan', index: 1 },
  { name: 'to', index: 2 },
  { name: 'major', index: 3 },
  { name: 'spaghetti', index: 4 }
];

// run tests
assertArraysEqual(map(words, singWord), expected1);
assertArraysEqual(map(words, getCurrentAndNextItem), expected2);
assertArraysEqual(map(words, reverseString), expected3);
// arrays eq doesn't work with nested objects :(
assertArraysEqual(result4[0].name, expected4[0].name);
assertArraysEqual(result4[3].index, expected4[3].index);