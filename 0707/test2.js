// 연산자 끼워넣기 [14888번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
const operators = input[2].split(" ").map(Number);

let max = -Infinity;
let min = Infinity;

function 백트래킹(depth, current) {
  if (depth === N) {
    max = Math.max(max, current);
    min = Math.min(min, current);
    return;
  }
  for (let i = 0; i < 4; i++) {
    if (operators[i] > 0) {
      operators[i]--;
      let next;
      if (i === 0) next = current + numbers[depth];
      else if (i === 1) next = current - numbers[depth];
      else if (i === 2) next = current * numbers[depth];
      else if (i === 3) next = ~~(current / numbers[depth]);
      백트래킹(depth + 1, next);
      operators[i]++;
    }
  }
}

백트래킹(1, numbers[0]);
console.log(max);
console.log(min);

/*
──────────────────────────────
흐름 요약

- 입력 : N, numbers[], operators[]
- 초기 상태 : 
    depth=1, current=numbers[0]

- 재귀 탐색
    → 연산자를 하나 선택해 계산
    → operators[i] 줄이고
    → 다음 깊이로 진행 (backtrack)
    → 끝나면 operators[i] 다시 복원

- 종료 조건
    → depth === N이면, 모든 숫자를 사용한 상태
    → 최대/최소 갱신

- 이렇게 모든 가능한 연산자 순서를 완전탐색(백트래킹)
*/
