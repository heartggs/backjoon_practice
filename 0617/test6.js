// 최댓값 [2566번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/);
// const numbers = input.map(Number);
// let max = -1;
// let index = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//     index = i;
//   }
// }

// const row = Math.floor(index / 9) + 1;
// const col = (index % 9) + 1;

// console.log(max);
// console.log(`${row} ${col}`);

//--------지금까지는 1차원배열. 자 이제 2차원 배열로 해보자----------
const matrix = input.map((line) => line.split(" ").map(Number));

let max = -1;
let row = 0;
let col = 0;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (matrix[i][j] > max) {
      max = matrix[i][j];
      row = i + 1;
      col = j + 1;
    }
  }
}

console.log(max);
console.log(`${row} ${col}`);
