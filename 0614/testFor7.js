const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i < T + 1; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  console.log(`Case #${i}: ${A + B}`);
}
