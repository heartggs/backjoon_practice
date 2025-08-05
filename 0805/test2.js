// 플러그 [2010번]
let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input[0];
const plugs = input.slice(1);
const total = plugs.reduce((sum, curr) => sum + curr, 0);
let result = 0;
// for (let i = 1; i <= n; i++) {
//   result += input[i];
// }

result = total - (n - 1);
console.log(result);
