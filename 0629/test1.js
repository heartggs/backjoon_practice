// 풍선 터뜨리기 [2346번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const moves = input[1].split(" ").map(Number);
const deq = [];
for (let i = 0; i < n; i++) {
  deq.push([i + 1, moves[i]]);
}
let head = 0;
const result = [];

while (deq.length) {
  const [num, move] = deq[head++];

  result.push(num);

  if (head === deq.length) break;

  if (move > 0) {
    for (let i = 0; i < move - 1; i++) {
      deq.push(deq[head++]);
    }
  } else {
    for (let i = 0; i < Math.abs(move); i++) {
      deq.splice(head - 1, 0, deq.pop());
    }
  }
}
console.log(result.join(" "));
