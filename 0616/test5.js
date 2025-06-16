const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const subjectNum = Number(input[0]);
// const scoreArr = input[1].split(" ").map(Number);
// const maxScore = Math.max(...scoreArr);

// const changeScore = [];

// for (let i = 0; i < subjectNum; i++) {
//   changeScore.push((scoreArr[i] / maxScore) * 100);
// }

// const sum = changeScore.reduce((acc, cur) => acc + cur, 0);
// const average = sum / subjectNum;

// console.log(average);

// 리팩토링
// 목표 : for문을 지우고 간결하게
const scoreArr = input[1].split(" ").map(Number);
const maxScore = Math.max(...scoreArr);

const changedAverage =
  scoreArr
    .map((score) => (score / maxScore) * 100)
    .reduce((sum, cur) => sum + cur, 0) / scoreArr.length;

console.log(changedAverage);
