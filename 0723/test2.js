// 좌표정렬하기2 [11651번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input[0];
const lines = input.slice(1).map((line) => {
  const [x, y] = line.split(" ").map(Number);
  return { x, y };
});

lines.sort((a, b) => {
  if (a.y !== b.y) return a.y - b.y;
  return a.x - b.x;
});

let result = "";
for (const point of lines) {
  result += `${point.x} ${point.y}\n`;
}
console.log(result.trim());
