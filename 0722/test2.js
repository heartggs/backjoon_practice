// 덩치 [7568번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const people = input.slice(1).map((line) => line.split(" ").map(Number));
const ranks = [];

for (let i = 0; i < n; i++) {
  let rank = 1;
  for (let j = 0; j < n; j++) {
    if (i === j) continue;
    if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
      rank++;
    }
  }
  ranks.push(rank);
}
console.log(ranks.join(" "));
