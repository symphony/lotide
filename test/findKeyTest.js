const { assertEqual, findKey } = require('../lib/index');
// -- tests --
const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(results1, "noma");


const results2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5); // => "Error"

assertEqual(results2, "None found");