// 생장점 [1703번]
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let line of input) {
  if (line === "0") break;

  const nums = line.split(" ").map(Number);
  const x = nums[0];
  const years = nums.slice(1);
  let result = 1;

  for (let i = 0; i < x; i++) {
    const grow = years[i * 2];
    const cut = years[i * 2 + 1];
    result = result * grow - cut;
  }
  console.log(result);
}
