// 그룹 단어 체커 [1316번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
let result = 0;

for (let i = 1; i < n + 1; i++) {
  const word = input[i];
  let seen = [];
  let isGroup = true;

  
  for (let j = 0; j < word.length + 1; j++) {
    if (!seen.includes(word[j])) {
      seen.push(word[j]);
    } else {
      if (word[j] !== word[j - 1]) {
        isGroup = false;
        break;
      }
    }
  }
  if (isGroup) result++;
}

console.log(result);

/*
───────────────────────────────
- a a a b b a
  seen=['a','b']
  마지막 a가 다시 나오지만
  바로 이전 문자가 b이므로 그룹 단어가 아님.

-> word[j] !== word[j-1]
  : 바로 직전에 나온 문자와 다르면,
    → 끊겼다가 다시 나온 것
    → 그룹 단어 조건 위반
───────────────────────────────
*/
