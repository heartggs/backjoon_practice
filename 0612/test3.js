const fs = require("fs");
const year = Number(fs.readFileSync("/dev/stdin").toString().trim());

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 === 0) {
//   console.log("1");
// } else {
//   console.log("0");
// }

// 삼항연산자
console.log((year % 4 == 0 && year % 100 != 0) || year % 400 === 0 ? "1" : "0");
