// 웰컴키드 [30802번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const people = Number(input[0]);
const shirtSize = input[1].split(" ").map(Number);
const [minshirt, minPen] = input[2].split(" ").map(Number);
let shirtResult = 0;

for (let i = 0; i < shirtSize.length; i++) {
  shirtResult += Math.ceil(shirtSize[i] / minshirt);
}

let penBundle = Math.floor(people / minPen);
let penSingle = people % minPen;

console.log(shirtResult);
console.log(penBundle, penSingle);