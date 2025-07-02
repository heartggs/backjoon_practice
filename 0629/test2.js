// queuestack [24511번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(BigInt);
const M = Number(input[3]);
const C = input[4].split(" ").map(BigInt);

let data = [];
for (let i = 0; i < N; i++) {
  data.push([B[i]]); // B값을 배열로 만들고 값 초기화
}

let answer = [];

for (let value of C) {
  let x = value;

  for (let i = 0; i < N; i++) {
    if (A[i] === 0) {
      data[i].push(x);
      x = data[i].shift();
    } else {
      data[i].push(x);
      x = data[i].pop();
    }
  }
  answer.push(x);
}

console.log(answer.map(String).joing(" "));
