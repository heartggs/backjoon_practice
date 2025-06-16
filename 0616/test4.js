const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const baskets = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 1; i < M + 1; i++) {
  const [start, end] = input[i].split(" ").map(Number);

  const reversed = baskets.slice(start - 1, end).reverse();
  for (let j = 0; j < reversed.length; j++) {
    baskets[start - 1 + j] = reversed[j];
  }
}

console.log(baskets.join(" "));

// 문제 이해하기
// 5 4          → 바구니 개수 N=5, 바꿀 횟수 M=4
// 1 2          → 바구니 1~2 뒤집기: [2 1 3 4 5]
// 3 4          → 바구니 3~4 뒤집기: [2 1 4 3 5]
// 1 4          → 바구니 1~4 뒤집기: [3 4 1 2 5]
// 2 2          → 바구니 2~2 뒤집기(변화 없음)
