const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const 바스켓 = new Array(N).fill(0);

for (let i = 1; i <= M; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);

  for (let j = a - 1; j <= b - 1; j++) {
    바스켓[i] = c;
  }
}
console.log(바스켓.join(" "));
