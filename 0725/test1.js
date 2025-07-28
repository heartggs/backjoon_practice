// 숫자 카드2 [10816번]
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const cards = input[1].split(" ").map(Number);
const targets = input[3].split(" ").map(Number);

const countMap = new Map();

for (let i of cards) {
  countMap.set(i, (countMap.get(i) || 0) + 1);
}

const result = targets.map((num) => countMap.get(num) || 0);

console.log(result.join(" "))