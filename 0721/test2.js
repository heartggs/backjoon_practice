// 팩토리얼 0의 개수 [1676번]
const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

function factorial(n) {
  let result = 1n;
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i;
  }
  return result;
}

const fact = factorial(input).toString();
let count = 0;

for (let i = fact.length - 1; i >= 0; i--) {
  if (fact[i] !== "0") break;
  count++;
}

console.log(count);
