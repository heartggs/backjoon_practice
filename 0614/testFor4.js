const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const totalPrice = Number(input[0]);
const totalCount = Number(input[1]);

// 기준점이 [2]번째줄부터 시작이니까 +2해줘야함
// input[] 배열 인덱스 기준임
// 만약에 totalCount가 4라면
// 입력문의 input[2] ~ input[5]

//let realPrice = 0;
// for (let i = 2; i < totalCount + 2; i++) {
//   const [price, count] = input[i].split(" ").map(Number);
//   realPrice += price * count;
// }

//reduce()사용 -> 각 배열의 최종합을 구할 수 있는 함수
// 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환한다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// 입력 배열 중 실제 구매 정보만 잘라냄 (2번째 줄부터 총 totalCount 줄)
const realPrice = input
  .slice(2, 2 + totalCount)

  // 각 줄을 '숫자 배열 [price, count]'로 변환
  .map((line) => line.split(" ").map(Number))

  // reduce()로 누적합 계산: acc + (price * count)
  // 초기값 0부터 시작해서 각 항목의 금액 합계를 계산함
  .reduce((acc, [price, count]) => acc + price * count, 0);

console.log(totalPrice === realPrice ? "Yes" : "No");
