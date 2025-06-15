const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, x] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// let result = [];
// for (let i = 0; i < n + 1; i++) {
//   if (arr[i] < x) {
//     result.push(arr[i]);
//   }
// }
// console.log(result.join(" "));

//필터함수
const result = arr.filter((n) => n < x).join(" ");
console.log(result);
