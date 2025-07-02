// 베라의 패션 [15439번]
const fs = require("fs");
const num = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log((num - 1) * num);

// num은 서로 같은 색깔의 상/하의들이다