const assertArraysEqual = require('../eq-standalones/assertArraysEqual');

// Test arrays eq
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // false

// More tests
assertArraysEqual([4], [4]); // true
assertArraysEqual([4], 4); // false
assertArraysEqual(["1", "b", 3], ["1", "b", 1 + 2]); // true
assertArraysEqual([4, 3, 2], [4, 3, "2"]); // true
assertArraysEqual([1], []); // false
assertArraysEqual([0], [false]); // false