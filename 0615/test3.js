const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// for문
// let min = arr[0];
// let max = arr[0];
// for (let i = 0; i < num + 1; i++) {
//   if (arr[i] < min) min = arr[i];
//   if (arr[i] > max) max = arr[i];
// }

// Math.min/max + 스프레드 연산자
// Math.min(숫자)만 가능, 배열은 안됨
// 하지만 스프레드 연산자는 각 개별의 숫자들로 인자를 주기 때문에 가능
// Math.min(...arr) = Math.min(1,2,3...)
// const min = Math.min(...arr);
// const max = Math.max(...arr);

console.log(`${min} ${max}`);
