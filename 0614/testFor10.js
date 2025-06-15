const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const num = Number(input);
let result = "";

for (let i = 1; i < num + 1; i++) {
  const space = " ".repeat(num - i);
  const stars = "*".repeat(i);
  result += space + stars + "\n";
}


console.log(result);
