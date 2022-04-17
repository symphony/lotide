/**
 * Flattens an array of any depth to a single level
 * @param {array} array
 */
const flatten = array => {
  return array.reduce((acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item), []);
};

module.exports = { flatten };