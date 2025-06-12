let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let hour = parseInt(input[0]);
let minute = parseInt(input[1]);

if (minute < 45) {
  hour -= 1;
  minute += 15;
  if (hour < 0) hour = 23;
} else minute -= 45;

console.log(hour + " " + minute);
