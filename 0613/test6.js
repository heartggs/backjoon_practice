let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [curHour, curMin] = input[0].split(" ").map(Number);
const takeTime = parseInt(input[1]);

let totalMinutes = curHour * 60 + curMin + takeTime;

let hour = Math.floor(totalMinutes / 60);
let minute = totalMinutes % 60;

if (hour >= 24) {
  hour %= 24;
}
console.log(`${hour} ${minute}`);
