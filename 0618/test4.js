// 소수 [2581번]
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [M, N] = input;
const primes = [];

// 소수인지 판별하는 함수
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 소수 배열에 저장
for (let i = M; i <= N; i++) {
  if (isPrime(i)) primes.push(i);
}

if (primes.length === 0) {
  console.log(-1);
} else {
  const sum = primes.reduce((a, b) => a + b, 0);
  const min = primes[0];
  console.log(sum);
  console.log(min);
}

// 소수란?
// 1보다 큰 자연수 중에서 1과 자기 자신만 약수로 가지는 수입니다.
// 특징 : 1은 소수가 아니다 (많이 틀리는 포인트!)
//     : 2는 가장 작은 소수이자 유일한 짝수 소수
//     : 어떤 수가 2부터 자기보다 작은 수까지 나누어떨어지지 않아야 소수

// 지금 푼 풀이방법은 정석 소수 찾기방법
// 다른 방법으로는 제곱근 판별법 / 에라토스테네스의 체 방법이 있다.
