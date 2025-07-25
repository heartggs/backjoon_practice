// 체스판 다시 칠하기 [1018]
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [row, col] = input[0].split(" ").map(Number);
const lines = input.slice(1);
const answer = [];

const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function startWhite(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (lines[i + x][j + y] !== white[i][j]) count++;
    }
  }
  return count;
}

function startBlack(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (lines[i + x][j + y] !== black[i][j]) count++;
    }
  }
  return count;
}

for (let i = 0; i < row - 7; i++) {
  for (let j = 0; j < col - 7; j++) {
    answer.push(startBlack(i, j));
    answer.push(startWhite(i, j));
  }
}

console.log(Math.min(...answer));
