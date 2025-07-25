// 수찾기 [1920번]
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const x = new Set(input[1].split(" ").map(Number));
const targets = input[3].split(" ").map(Number);

const result = targets.map((num) => (x.has(num) ? 1 : 0));
console.log(result.join("\n"));
