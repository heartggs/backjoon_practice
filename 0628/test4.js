// 요세푸스 문제 0 [11866번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [num, target] = input.map(Number);

const que = [];
for (let i = 1; i < num + 1; i++) que.push(i);
let head = 0;
const result = [];
let count = 0;

while (result.length < num) {
  count++;

  if (count === target) {
    result.push(que[head]);
    count = 0;
  } else {
    que.push(que[head]);
  }
  head++;
}

console.log(`<${result.join(", ")}>`);
