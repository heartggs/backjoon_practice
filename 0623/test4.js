// 균형잡힌 세상 [4949번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let line of input) {
  if (line === ".") break;

  const stack = [];
  let isBalanced = true;

  for (let char of line) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.pop() !== "(") {
        isBalanced = false;
        break;
      }
    } else if (char === "]") {
      if (stack.pop() !== "[") {
        isBalanced = false;
        break;
      }
    }
  }

  if (isBalanced && stack.length === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
