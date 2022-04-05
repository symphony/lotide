// take in arguments and convert them to a single string
const arg = process.argv.slice(2).join(" ");

const reverseString = function(string) {
  // console.log(string);
  let reversed = "";

  // iterate backwards through string, append each character to result
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string.charAt(i);
  }

  return reversed;
};

console.log(reverseString(arg));