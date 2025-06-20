// 설탕 배달 [2839번]
const fs = require("fs");
const kg = Number(fs.readFileSync("/dev/stdin").toString().trim());

let min = Infinity;

for (let i = 0; i <= Math.floor(kg / 5); i++) {
  for (let j = 0; j <= Math.floor(kg / 3); j++) {
    if (i * 5 + j * 3 === kg) {
      min = Math.min(min, i + j);
    }
  }
}
console.log(min === Infinity ? -1 : min);
