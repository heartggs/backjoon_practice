const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const Num = Number(input[0]);
let result = "";

for (let i = 0; i < Num; i++) {
  for (j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);
