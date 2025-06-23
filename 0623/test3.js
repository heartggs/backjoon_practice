// 괄호 [9012번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
const lines = input.slice(1);
const result = [];

for (let str of lines) {
  const stack = [];
  let isValid = true;

  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        // 중간에 )가 (보다 많아지는 순간을 먼저 감지해서 불필요한 For문 중단
        isValid = false;
        break;
      }
      stack.pop();
    }
  }
  if (isValid && stack.length === 0) {
    result.push("YES");
  } else {
    result.push("NO");
  }
}
console.log(result.join("\n"));
