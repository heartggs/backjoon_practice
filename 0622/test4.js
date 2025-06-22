// 다음 소수 [4134번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 1; i <= T; i++) {
  let n = Number(input[i]);
  while (!isPrime(n)) {
    n++;
  }
  console.log(n);
}
