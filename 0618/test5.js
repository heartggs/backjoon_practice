// 직사각형 [27323번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input.map(Number);
console.log(A * B);
