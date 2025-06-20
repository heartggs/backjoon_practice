// 알고리즘 수업 - 점근적 표기 1 [24313번]
//  f(n) = a1n + a0,
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// a₁ = a, a₀ = b
const [a, b] = input[0].split(" ").map(Number);
const c = Number(input[1]);
const n0 = Number(input[2]);

//최소 n 찾기((a - c) * n + b <= 0)
// 여기서 중요한 것은 기울기값 (a-c)
// 하강직선을 그리면서 최솟값을 찾을 수 있음
let min;

// Case 1: 기울기 0 → 수평선
if (a === c) {
  console.log(b <= 0 ? 1 : 0);
}
// Case 2: 상승하는 직선 → 조건 절대 만족 못 함
else if (a > c) {
  console.log(0);
}
// Case 3: 하강하는 직선 → 최소 n 계산
else {
  const minN = Math.ceil(b / (c - a)); // (c - a) > 0 이므로 안전
  console.log(minN <= n0 ? 1 : 0);
}

// 판단: 최소로 조건을 만족하는 n이 n0 이상이면 OK
console.log(min >= n0 ? 1 : 0);

//문제풀이
// O(g(n)) = f(n)이 되기 위한 조건:
// 양의 상수 c와 n₀가 존재하여
// n ≥ n₀일 때, f(n) ≤ c × g(n)

// 이번 문제에서는 g(n) = n

// 주어진 f(n) = a₁ × n + a₀ 이므로
// 조건식:
//     a₁ × n + a₀ ≤ c × n -> g(n)을 n으로 대체

// 정리:
//     (a₁ - c) × n + a₀ ≤ 0

// 예시: a₁ = 7, a₀ = 7, c = 8
// → (7 - 8) × n + 7 ≤ 0
// → -n + 7 ≤ 0
// → n ≥ 7

// 따라서 이 조건을 만족하는 최소 n(minN)은 7
// 입력에서 주어진 n₀이 7 이상이어야 O(n) 조건을 만족함
