// 단어 공부 [1157번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const string = input.toUpperCase();
const counts = {};

for (let i = 0; i < string.length; i++) {
  const char = string[i];

  if (counts[char]) {
    counts[char]++;
  } else {
    counts[char] = 1;
  }
}

let maxCount = 0;
let result = "";
let isDuplicated = false;

for (let char in counts) {
  if (counts[char] > maxCount) {
    maxCount = counts[char];
    result = char;
    isDuplicated = false; //최대값이 갱신되었을때 다시 중복여부 초기화
  } else if (counts[char] === maxCount) {
    isDuplicated = true;
  }
}
console.log(isDuplicated ? "?" : result);
