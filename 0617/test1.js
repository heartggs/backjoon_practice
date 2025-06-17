// 문자와 문자열 [27866번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const word = input[0];
const num = Number(input[1]);

console.log(word[num - 1]);
