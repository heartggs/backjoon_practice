// 영화감독 숌 [1436번]
const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let count = 0;
let doomNum = 666;

while (true) {
  if (String(doomNum).includes("666")) {
    count++;
    if (count === input) {
      console.log(doomNum);
      break;
    }
  }
  doomNum++;
}
