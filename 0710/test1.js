// 소수찾기 [1978번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

let count = 0;

for (let i = 0; i < n; i++) {
  let num = numbers[i];
  if (num === 1) continue;

  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) count++;
}

console.log(count);

/*
trial division (약수 검사법)
- 소수를 판별할 때 사용하는 가장 기초적인 방법
- 2 ~ sqrt(n) 까지 모든 수를 나눠보면서 약수가 있는지 검사
- 약수가 하나라도 존재하면 소수가 아님
- 시간복잡도: O(√N)
 */
