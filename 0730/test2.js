// 부호 [1247번]
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let idx = 0;

for (let i = 0; i < 3; i++) {
  const n = input[idx++];
  let sum = BigInt(0);

  for (let j = 0; j < n; j++) {
    sum += BigInt(input[idx++]);
  }

  if (sum > 0n) {
    console.log("+");
  } else if (sum < 0n) {
    console.log("-");
  } else {
    console.log("0");
  }
}
