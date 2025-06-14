const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 시간초과 에러 코드
// const T = Number(input[0]);

// for (let i = 1; i < T + 1; i++) {
//   const [A, B] = input[i].split(" ").map(Number);
//   console.log(A + B);
// }

// 통과한 코드
const T = Number(input[0]);
const result = [];

for (let i = 1; i < T + 1; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  result.push(A + B);
}

console.log(result.join("\n"));

// ❗️주의: 반복문 안에서 console.log()를 여러 번 쓰면 백준에서 시간 초과 발생!
// ⭕️ 빠른 속도를 얻고 싶다면 한번에 받아(출력값을 배열에 누적) 한번에 출력하면 통과!
