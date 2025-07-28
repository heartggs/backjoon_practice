// 스택 [10828]
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const stack = [];
const result = [];

for (let i = 1; i <= n; i++) {
  const [stack명령어, value] = input[i].split(" ");
  switch (stack명령어) {
    case "push":
      stack.push(Number(value));
      break;
    case "pop":
      result.push(stack.length ? stack.pop() : -1);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      result.push(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      result.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
}
console.log(result.join("\n"));
