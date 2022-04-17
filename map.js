/**
 * Takes an array and applies callback function to each element
 * @param {array} array
 * @param {function} callback
 * @returns Array of results
 */
const map = function(array, callback) {
  const results = [];
  // passes each element in array to callback function, along with index number and parent array
  // appends returned value in new array
  for (let i = 0; i < array.length; i++) {
    results.push(callback(array[i], i, array));
  }
  console.log(results);
  return results;
};

module.exports = { map };