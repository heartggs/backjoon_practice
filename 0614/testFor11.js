const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = [];

for (let i = 0; i < input.length; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  if (A === 0 && B === 0) break;
  result.push(A + B);
}
console.log(result.join("\n"));
