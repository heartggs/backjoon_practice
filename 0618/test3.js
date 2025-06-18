// 배수와 약수 [5086번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let [A, B] = input[i].split(" ").map(Number);

  // 종료 조건
  if (A === 0 && B === 0) break;

  if (B % A === 0) {
    console.log("factor");
  } else if (A % B === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}

// 배수와 약수 개념 정리
// 배수 : A % B === 0 → A는 B의 배수 (multiple)
//  예 : 16 % 4 === 0 → 16은 4의 배수 → "multiple"

// 약수 : B % A === 0 → A는 B의 약수 (factor)
//   예: 4 % 16 === 0 (X), 16 % 4 === 0 → 4는 16의 약수 → "factor"

// 같은 숫자 조합이라도 위치(순서)에 따라 의미가 달라짐
//     예: 4 16 → factor / 16 4 → multiple

// 결론:
// - "multiple"과 "factor"는 순서에 따라 결정됨
// - A가 앞에 있을 때:
//      A % B === 0 → multiple
//      B % A === 0 → factor
