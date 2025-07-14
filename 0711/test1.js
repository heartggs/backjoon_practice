// 최대공약수와 최소공배수 [2609번]
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [a, b] = input;

function gcd(a, b) {
  while (b !== 0) {
    let c = a % b; // a: 나누어지는 수, b: 나누는 수
    a = b;
    b = c;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(gcd(a, b));
console.log(lcm(a, b));

/*
나눗셈을 이용한 최대공약수 구하는 법 (유클리드 호제법): 
- 큰 수를 작은 수로 나눕니다: 두 수 중 큰 수를 작은 수로 나눕니다. 
- 나머지가 0이 될 때까지 나눗셈을 반복합니다: 나머지가 0이 될 때까지 나눗셈을 계속합니다. 이때, 나눗셈을 할 때마다 나누는 수는 다음 나눗셈의 피제수(나누어지는 수)가 되고, 나머지는 나누는 수가 됩니다. 
- 마지막 나눗셈의 나누는 수가 최대공약수입니다: 나머지가 0이 되었을 때, 마지막 나눗셈의 나누는 수가 최대공약수가 됩니다. 

-----------------------
최대 공약수와 최소공배수 관계
두 수 a, b의 곱을 그들의 최대공약수(GCD)로 나누어 구할 수 있음
이유:
  두 수에 대해 항상
  a × b = GCD(a, b) × LCM(a, b) 성립
  이를 변형하면
  LCM(a, b) = (a × b) / GCD(a, b)
*/
