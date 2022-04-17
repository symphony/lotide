const {assertEqual} = require('./assertEqual');
const flatten = (array) => {
  return array.reduce((acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item), []);
};

assertEqual(flatten([1, [2, [3], [4, [[[5, [6]]]]]]]), [1, 2, 3, 4, 5, 6]);