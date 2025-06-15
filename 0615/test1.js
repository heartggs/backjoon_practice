const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const targetNum = Number(input[2]);

//let result = 0;
// for (let i = 0; i < num + 1; i++) {
//   if (arr[i] === targetNum) {
//     result++;
//   }
// }

//filter함수
const result = arr.filter((n) => n === targetNum).length;
console.log(result);
