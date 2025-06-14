const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let result = "";

for (let i = 0; i < input / 4; i++) {
  result += "long ";
}

result += "int";

console.log(result);

// 입력값 / 4 만큼 "long" 반복 후 마지막에 "int" 출력
