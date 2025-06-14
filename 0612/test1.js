const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const a = input[0];
const b = input[1];

// if (a > b) {
//   console.log(">");
// } else if (a < b) {
//   console.log("<");
// } else {
//   console.log("==");
// }

// 삼항 연산자
console.log(a > b ? ">" : a < b ? "<" : "==");
