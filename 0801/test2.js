// 집 주소 [1284번]
let fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (num of inputs) {
  if (num === "0") break;

  let result = 0;

  for (let x of num) {
    if (x === "1") result += 2;
    else if (x === "0") result += 4;
    else result += 3;
  }
  result += num.length - 1;
  result += 2;

  console.log(result);
}
