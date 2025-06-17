// 행렬 덧셈 [2738번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const A = input.slice(1, N + 1).map((row) => row.split(" ").map(Number));
const B = input.slice(N + 1).map((row) => row.split(" ").map(Number));

const result = [];

for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(A[i][j] + B[i][j]); // 같은 위치의 원소끼리 더함
  }
  result.push(row.join(" "));
}

console.log(result.join("\n"));
