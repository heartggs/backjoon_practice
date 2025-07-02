// 통계학 [2108번]
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = Number(input[0]);
const slice = input.slice(1);
const numbers = slice.sort((a, b) => a - b);

// 산술 평균
const avg = `${Math.round(numbers.reduce((a, b) => a + b, 0) / n)}\n`;

// 중앙값
const medium = `${numbers[Math.floor(n / 2)]} \n`;

// 최빈값
function getFreq(numbers) {
  const freqObj = {};
  for (let num of numbers) {
    freqObj[num] = (freqObj[num] || 0) + 1;
  }
  const maxFreq = Math.max(...Object.values(freqObj));
  const freq = Object.keys(freqObj)
    .map(Number)
    .filter((key) => freqObj[key] === maxFreq)
    .sort((a, b) => a - b);
  return freq.length === 1 ? freq[0] : freq[1];
}
const freqNum = getFreq(numbers);

// 범위
const range = `${numbers[n - 1] - numbers[0]}`;

console.log(avg);
console.log(medium);
console.log(freqNum);
console.log(range);
