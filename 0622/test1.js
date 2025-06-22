//숫자 카드 [10815번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const cards = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = Number(input[2]);
const checkNum = input[3].split(" ").map(Number);

function 이진탐색(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  // 1단계: 가운데 값이 정답이면 → 찾았으니 바로 1 반환
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // 2단계: 가운데 값보다 target이 크면 → 오른쪽 반쪽으로 범위 이동
    if (arr[mid] === target) return 1;
    else if (arr[mid] < target) {
      left = mid + 1; // 시작점을 mid 다음으로 이동
      // 3단계: 가운데 값보다 target이 작으면 → 왼쪽 반쪽으로 범위 이동
    } else {
      right = mid - 1;
    }
  }
  // 4단계: left > right가 되면 → 탐색 종료 → target 없음
  return 0;
}

const result = checkNum.map((num) => 이진탐색(cards, num));
console.log(result.join(" "));

//for문 사용시, 최대 50만 × 50만 = 2500억 번 -> 시간초과
// 정렬 + 이진탐색 사용

// 이진 탐색이란?
// 정렬된 배열에서 중간 값을 기준으로 탐색 범위를 절반씩 줄여가며 값을 찾는 알고리즘
// 시간 복잡도는 O(log N) → 매우 빠름

// 1. 처음엔 배열 전체 범위를 탐색
// 2. 중간값과 비교해 범위를 절반으로 줄여가며 탐색
// 3. 값이 같으면 찾은 것이고, 크거나 작으면 방향에 따라 left/right 조정
// 4. left > right가 되면 종료 → target 없음
