// 카드2 [2164번]
const fs = require("fs");
const num = Number(fs.readFileSync("/dev/stdin").toString());

const que = [];
for (let i = 1; i < num + 1; i++) que.push(i);
let head = 0;

while (que.length - head > 1) {
  head++; // 카드버림
  que.push(que[head++]); //카드 맨 아래로 옮김
}
console.log(que[head]);
