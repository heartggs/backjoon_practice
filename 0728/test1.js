// 큐 [10845]
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const que = [];
const result = [];

for (let i = 1; i <= n; i++) {
  const [que명령어, value] = input[i].split(" ");
  switch (que명령어) {
    case "push":
      que.push(Number(value));
      break;
    case "pop":
      result.push(que.length ? que.shift() : -1);
      break;
    case "size":
      result.push(que.length);
      break;
    case "empty":
      result.push(que.length === 0 ? 1 : 0);
      break;
    case "front":
      result.push(que.length ? que[0] : -1);
      break;
    case "back":
      result.push(que.length ? que[que.length - 1] : -1);
      break;
  }
}
console.log(result.join("\n"));
