// 펠린드롬인지 확인하기 [10988번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

if (
  input === input.split("").reverse().join("") ? console.log(1) : console.log(0)
);

/*
──────────────────────────────
reverse()

1. 문자열을 그대로 뒤집을 수는 없다.
  → JS에서 `reverse()` 는 배열에서만 사용 가능
  → 문자열에는 `reverse()` 가 없음

2. 따라서,
  - 문자열을 문자 하나하나로 쪼개 배열로 만든다. -> `split('')`
  - 이 배열을 `reverse()` 로 뒤집기
  - 다시 `join('')` 으로 문자열로 결합

3. 마지막으로 원래 문자열과 뒤집은 문자열을 비교
──────────────────────────────
*/
