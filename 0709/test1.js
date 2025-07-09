// 직각삼각형 [4153번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let sort = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (sort[0] === 0 && sort[1] === 0 && sort[2] === 0) break;
  const doubleA = sort[0] ** 2;
  const doubleB = sort[1] ** 2;
  const doubleC = sort[2] ** 2;

  console.log(doubleA + doubleB === doubleC ? "right" : "wrong");
}
