// 프린터 큐 [1966번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);
let idx = 1;

for (let i = 0; i < num; i++) {
  const [a, b] = input[idx++].split(" ").map(Number);
  const 우선순위 = input[idx++].split(" ").map(Number);

  let que = 우선순위.map((우선순위, index) => [index, 우선순위]);
  let count = 0;

  while (que.length > 0) {
    const cur = que.shift();
    if (que.some((doc) => doc[1] > cur[1])) {
      que.push(cur);
    } else {
      count++;
      if (cur[0] === b) {
        console.log(count);
        break;
      }
    }
  }
}
