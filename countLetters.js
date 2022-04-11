// --== main function ==--

const countLetters = function(string) {
  const report = {};
  // remove spaces from string
  const stringParsed = string.replaceAll(" ", "");

  // go through each letter.
  for (const l of stringParsed) {
    // increment count if it exists otherwise create and set to 1
    // console.log(l, "before:", report[l]);
    report[l] = report[l] + 1 || 1;
    // console.log(l, "after:", report[l]);
  }
  return report;
};

// -- test --
const countedReport = countLetters("lighthouse in the house");
console.log(countedReport);

// todo implement assert equal