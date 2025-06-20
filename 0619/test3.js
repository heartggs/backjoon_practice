// 블랙잭 [2798번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const cardNum = input[1].split(" ").map(Number);
let max = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = cardNum[i] + cardNum[j] + cardNum[k];
      if (sum <= M) {
        max = Math.max(max, sum);
      }
    }
  }
}
console.log(max);
