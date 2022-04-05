const arg = process.args.slice(2);
const reverseString = function(string) {
  let reversed = "";

  // todo reverse method
  for (let i = string.length - 1; i > 0; i--) {
    reversed += i;
  }

  return reversed;
};

console.log(reverseString(arg));