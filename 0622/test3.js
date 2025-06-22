// 최소공배수 [1934번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

for (let i = 1; i < T + 1; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  console.log(lcm(A, B));
}

// 최소 공배수(LCM) : 두 수의 공통 배수 중 가장 작은 수
// 최대 공약수(GCD) : 두 수가 공통으로 나눌 수 있는 수 중 가장 큰 것
// 최소 공배수 구하는 공식 : LCM = A × B ÷ GCD
//                    : A와 B의 곱을 공통 약수(GCD)만큼 나누면 겹치는 부분을 제거해서 최소공배수가 된다는 원리

// 최대 공약수 GCD는 "유클리드 호제법"으로 빠르게 구할 수 있음
// 유클리드 호제법
// function gcd(a, b) {
//   while (b !== 0) {
//     [a, b] = [b, a % b];
//   }
//   return a;
// }
