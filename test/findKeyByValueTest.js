const { assertEqual, findKeyByValue } = require('../lib/index');

// -- tests --
const bestTvShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTvShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTvShowsByGenre, "That '70s Show"), undefined);