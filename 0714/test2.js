// ISBN [14626번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const isbn = input.split("").map((c) => (c === "*" ? "*" : Number(c)));

for (let i = 0; i < 10; i++) {
  let result = 0;

  for (let j = 0; j < 13; j++) {
    let x = isbn[j] === "*" ? i : isbn[j];
    if ((j + 1) % 2 === 0) {
      result += 3 * x;
    } else {
      result += x;
    }
  }
  if (result % 10 === 0) {
    console.log(i);
    break;
  }
}
