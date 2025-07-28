// solved.ac [18110번]
let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const num = input[0];
if (num === 0) {
  console.log(0);
  return;
}

const levels = input.slice(1).sort((a, b) => a - b);
const 절사평균15 = Math.round(num * 0.15);

const cut = levels.slice(절사평균15, num - 절사평균15);
const sum = cut.reduce((acc, val) => acc + val, 0);
const avg = Math.round(sum / cut.length);

console.log(avg);
