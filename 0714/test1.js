// 이항 계수 1 [11050번]
const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function factorial(n) {
  if (n === 0 || n === 1) return 1; // 예외처리 : 0!과 1!은 1
  let result = n;

  for (let i = n - 1; i > 0; i--) {
    result *= i;
  }
  return result;
}

console.log(factorial(a) / (factorial(b) * factorial(a - b)));

/*
이항계수 (조합) 공식 요약
- nCk (이항계수) = n! / (k! * (n-k)!)
- n 개 중에서 k 개를 순서 없이 뽑는 경우의 수를 구함
- 예: 5C2 = 5! / (2! * 3!) = 10
 */
