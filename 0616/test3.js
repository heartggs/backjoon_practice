const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const remainArr = new Array(42).fill(false);

// for (let i = 0; i < input.length; i++) {
//   const remain42 = input[i] % 42;
//   if (!remainArr[remain42]) {
//     remainArr[remain42] = true;
//   }
// }

// let result = 0;
// for (let i = 0; i < 42; i++) {
//   if (remainArr[i]) {
//     result++;
//   }
// }

console.log(result);

// 리팩토링
// 목표 : 줄을 줄여보자

// forEach를 사용하여 각 숫자의 42로 나눈 나머지를 true로 표시
input.forEach((num) => {
  remainArr[num % 42] = true;
});

// filter()를 사용하여 나머지 갯수 구함
const count = remainArr.filter(Boolean).length;

console.log(count);

// "forEach" vs "map"
// --------------------------------------------------
// - 목적:
//   forEach → 단순 반복 (부수 효과를 주기 위해 사용)
//   map     → 원본 배열을 가공하여 "새로운 배열"을 만들기 위해 사용
//
// - 반환값:
//   forEach → undefined
//   map     → 가공된 새로운 배열을 반환
//
// - 사용 예시:
//   forEach → 로그 찍기, 외부 변수 변경 등 (side-effect 목적)
//   map     → 데이터를 가공해서 새로운 배열 생성할 때
