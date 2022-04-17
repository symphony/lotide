/**
 * Takes a list and list of items to count and returns a report with the totals
 * @param {array} allItems - an array of strings that we need to look through
 * @param {object} itemsToCount - an object specifying what to count
 * @returns Object
 */
const countOnly = (allItems, itemsToCount) => {
  const report = {};
  for (const item of allItems) {
    // Check if key name is in our accepted list
    if (itemsToCount[item]) {
      // Increase count by 1 if it exists, otherwise create it and set count to 1
      report[item] = report[item] + 1 || 1;
    }
  }
  return report;
};

module.exports = { countOnly };