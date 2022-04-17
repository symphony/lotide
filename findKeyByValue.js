// -- main function --
const findKeyByValue = function(object, value) {
  // we can search through key names using for..in
  for (const key in object) {
    if (object[key] === value) return key;
  }
};

module.exports = { findKeyByValue };