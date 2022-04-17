/**
 * Checks each value in an object for the provided condition, returns key name when found
 * @param {object} object
 * @param {function} callback
 * @returns
 */
const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) return key;
  }
  return "None found";
};

module.exports = { findKey };