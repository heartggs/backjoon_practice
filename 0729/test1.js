// 소수구하기 [1929]
let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b] = input;
const isPrime = Array(b + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i <= b; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= b; j += i) {
      isPrime[j] = false;
    }
  }
}

let result = "";
for (let i = a; i <= b; i++) {
  if (isPrime[i]) {
    result += i + "\n";
  }
}
console.log(result);
