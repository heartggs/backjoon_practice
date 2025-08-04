// 공 [1547번]
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const swaps = input.slice(1).map((line) => line.split(" ").map(Number));

let initBall = 1;

for (let [a, b] of swaps) {
  if (initBall === a) {
    initBall = b;
  } else if (initBall === b) {
    initBall = a;
  }
}

console.log(initBall);
