const takeUntil = function(array, callback) {
  const sliced = [];
  // loop and test each element for callback condition
  for (const element of array) {
    if (callback(element)) break; // break when found
    sliced.push(element); // append element if not
  }
  return sliced;
};

// -- tests --
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// -- Expected output --
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]