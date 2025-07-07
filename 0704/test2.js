// 별 찍기 - 10 [2447번]
const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

// let star = "";
// function firstStar() {
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (i === 1 && j === 1) {
//         star += " ";
//       }
//       star += "*";
//     }
//     star += "\n";
//   }
// }
// firstStar();
// console.log(star);

let result = "";

function drawStars(x, y, size) {
  if (size === 1) {
    result += "*";
    return;
  }

  const newSize = size / 3;
  const inMiddle = x % 3 === 1 && y % 3 === 1;

  if (inMiddle) {
    result += " ";
  } else {
    drawStars(Math.floor(x / 3), Math.floor(y / 3), newSize);
  }
}

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    drawStars(i, j, input);
  }
  result += "\n";
}

console.log(result.trim());
