// 다리놓기 [1010번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = parseInt(input[0]);
const combination = input.slice(1).map((x) => x.split(" ").map(Number));

for (let i = 0; i < num; i++) {
  const [N, M] = combination[i];
  console.log(getCom(M, N));
}

function getCom(n, m) {
  if (m === 0 || n === m) return 1;
  let result = 1;
  for (let i = 0; i < m; i++) {
    result *= n - i; // 분자
    result /= i + 1; // 분모
  }
  return Math.round(result);
}

// 순열 vs 조합
// - 다리는 반드시 "교차하지 않게" 연결해야 함(문제 핵심이자 헷갈리게 한 포인트)

// - 서쪽은 왼쪽부터 1,2,3,...N 순서로 고정됨
// - 따라서 동쪽에서 선택한 사이트도 자동으로 오름차순으로 연결
//   → 교차를 피하기 위해선 작은 번호 → 큰 번호 순으로 연결

// - 동쪽에서 N개의 사이트를 "어떤 순서로 뽑느냐"는 중요하지 않음
// - 단지 "어떤 N개의 사이트를 선택했느냐"만 중요
// - 즉 순열(순서 고려)이 아니라, 조합(순서 무시)
// - 참고로 순열이면 (1,2)와 (2,1)은 같은 경우가 된다
