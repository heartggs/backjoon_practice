// 제로 [10773번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const K = Number(input[0]);
const stack = [];

for (let i = 1; i < K + 1; i++) {
  const n = Number(input[i]);

  if (n === 0) {
    stack.pop();
  } else {
    stack.push(n);
  }
}

const sum = stack.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
