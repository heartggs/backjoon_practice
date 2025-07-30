// 직사각형에서 탈출 [1085번]
let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [x, y, w, h] = input;
let answer = [];

answer.push(Math.abs(x - 0));
answer.push(Math.abs(y - 0));
answer.push(Math.abs(w - x));
answer.push(Math.abs(y - h));

console.log(Math.min(...answer));
