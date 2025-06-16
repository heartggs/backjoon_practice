const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

// const basket = [];
// for (let i = 1; i < N + 1; i++) {
//   basket.push(i);
// }

// for (let i = 1; i < M + 1; i++) {
//   const [a, b] = input[i].split(" ").map(Number);

//   const temp = basket[a - 1];
//   basket[a - 1] = basket[b - 1];
//   basket[b - 1] = temp;
// }

// console.log(basket.join(" "));

// 리팩토링
// 목표 : 줄의 갯수를 줄여보자
// Array.from(arrayLike, mapFn) -> 1부터 N까지의 배열을 간결하게 만드는 코드
// arrayLike -> 배열로 변환할 순회 가능 또는 유사 배열 객체입니다.
//           -> 반복가능한 메소드가 구현되어있는 "문자열, set, map"등 순회가능한 것
//           -> length 속성만 있으면 되는 셀 수 있는 유사배열 객체가 있다.
//           -> 여기서는 {length:N}이라는 길이가 3인 유사배열을 만들었다
//
// mapFn(currentValue, index) -> 배열을 생성하면서 각 요소에 적용할 "가공 함수"
//                            -> currentValue: 원래 값 (문자열, Set 등에서 추출된 값, 또는 undefined)
//                            -> index: 현재 요소의 인덱스 (0부터 시작)
//
// Array.from(arrayLike, mapFn)은
// Array.from()은 배열을 복사하거나 생성할때 사용
// + mapFn을 함께 사용하면 배열을 만들면서 동시에 가공까지 가능

const baskets = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  // 구조분해 할당 swap
  // 우측 배열을 먼저 평가해서 값을 임시로 저장
  // 왼쪽 변수에 순서대로 할당하여 두 변수의 값을 간단히 바꾸는 구조
  // 두 변수의 값을 간단히 바꿀때에 사용하기 편함
  [baskets[a - 1], baskets[b - 1]] = [baskets[b - 1], baskets[a - 1]];
}

console.log(baskets.join(" "));
