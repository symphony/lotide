const tail = function(array) {
  const headlessArray = array.slice(1);
  return headlessArray;
};

module.exports = tail;