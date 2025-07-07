const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

function 피보나치(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return 피보나치(n - 1) + 피보나치(n - 2);
}
console.log(피보나치(input));
