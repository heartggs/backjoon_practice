// 삼각형과 세 변 [5073번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let line of input) {
  const sides = line.trim().split(" ").map(Number);
  const [a, b, c] = sides.sort((a, b) => a - b);

  if (a === 0 && b === 0 && c === 0) break;

  if (a + b <= c) {
    console.log("Invalid");
  } else if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a === b || b === c || c === a) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}
