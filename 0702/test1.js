// 붙임성 좋은 총총이 [26069번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = Number(input[0]);
const dancers = new Set();

for (let i = 1; i < num.length + 1; i++) {
  const [A, B] = input[i].split(" ");
  if (
    A === "ChongChong" ||
    B === "ChongChong" ||
    dancers.has(A) ||
    dancers.has(B)
  ) {
    dancers.add(A);
    dancers.add(B);
  }
}
console.log(dancers.size);
