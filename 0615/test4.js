const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let max = input[0];
let index = 0;
for (let i = 1; i < input.length; i++) {
  if (input[i] > max) {
    max = input[i];
    index = i;
  }
}
console.log(max);
console.log(index + 1);
