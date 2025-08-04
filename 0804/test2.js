// 꼬리를 무는 숫자 나열[1598번]
let fs = require("fs");
let [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function get직각거리(n) {
  const row = (n - 1) % 4;
  const column = Math.floor((n - 1) / 4);
  return [row, column];
}

const [x1, y1] = get직각거리(a);
const [x2, y2] = get직각거리(b);

const 직각거리 = Math.abs(x1 - x2) + Math.abs(y1 - y2);
console.log(직각거리);
