// 팰린드롬 수 [1259번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let num of input) {
  if (num === "0") break;
  let reversed = num.split("").reverse().join("");

  console.log(num === reversed ? "yes" : "no");
}
