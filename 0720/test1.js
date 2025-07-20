// 단어정렬 [1181번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const words = [...new Set(input.slice(1))];

words.sort((a, b) => {
  if (a.length != b.length) return a.length - b.length;
  return a.localeCompare(b);
});

console.log(words.join("\n"));
