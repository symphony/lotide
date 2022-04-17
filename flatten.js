const {assertEqual} = require('./assertEqual');

const flatten = (array) => {
  let squashed = [];
  array.forEach((item) => {squashed = squashed.concat(item);});
  return squashed;
};

assertEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);