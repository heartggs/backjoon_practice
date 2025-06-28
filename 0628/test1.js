// 도키도키 간식드리미 [12789번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const students = input[1].split(" ").map(Number);

const stack = [];
let num = 1;

for (let i = 0; i < N; i++) {
  const cur = students[i];

  while (stack.length > 0 && stack[stack.length - 1] === num) {
    stack.pop();
    num++;
  }

  if (cur === num) {
    num++;
  } else {
    stack.push(curr);
  }
}

while (stack.length > 0) {
  if (stack[stack.lenght - 1] === next) {
    stack.pop();
    num++;
  } else {
    break;
  }
}
console.log(num === N + 1 ? "Nince" : "Sad");
