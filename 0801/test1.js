// 핸드폰 요금 [1267번]
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const callTimes = input[1].split(" ").map(Number);

let 영식요금 = 0;
let 민식요금 = 0;

for (let i = 0; i <= n - 1; i++) {
  영식요금 += Math.floor(callTimes[i] / 30) * 10 + 10;
  민식요금 += Math.floor(callTimes[i] / 60) * 15 + 15;
}

if (민식요금 > 영식요금) {
  console.log(`Y ${영식요금}`);
} else if (민식요금 === 영식요금) {
  console.log(`Y M ${영식요금}`);
} else {
  console.log(`M ${민식요금}`);
}
