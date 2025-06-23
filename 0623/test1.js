// 스택 2 [28278번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const stack = [];
const result = [];

for (let i = 1; i < N + 1; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  switch (x) {
    case 1:
      stack.push(y);
      break;
    case 2:
      result.push(stack.length ? stack.pop() : -1);
      break;
    case 3:
      result.push(stack.length);
      break;
    case 4:
      result.push(stack.length === 0 ? 1 : 0);
      break;
    case 5:
      result.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
}
console.log(result.join("\n"));
