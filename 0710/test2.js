// 분해합 [2231번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const n = Number(input);
for (let i = 1; i < n; i++) {
  let sum = i;
  let temp = i;

  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }

  if (sum === n) {
    console.log(i);
    return;
  }
}

console.log(0);


/*


*/