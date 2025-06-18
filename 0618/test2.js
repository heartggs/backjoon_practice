// 달팽이는 올라가고 싶다 [2869번]
const fs = require("fs");
const [A, B, V] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// let height = 0;
// let days = 0;

// while (true) {
//   days++;
//   height += A;

//   if (height >= V) {
//     break;
//   }
//   height -= B;
// }
// console.log(days);

const days = Math.ceil((V - B) / (A - B));
console.log(days);

// 🐌🌴 문제 풀이 요약
// 1. 달팽이는 낮에 A미터 올라가고, 밤에 B미터 미끄러진다.
// 2. 단, **정상에 도달한 날은 미끄러지지 않는다**.
// 3. 따라서 전날까지 최소 목표치인 (V - B)미터까지만 올라가면,
//    다음 날 낮에 A미터 올라가면서 정상 도착 가능
// 4. 하루에 실제로 올라가는 양은 (A - B)
// 5. 필요한 일 수 = (V - B) / (A - B)
//    → 소수점이 생길 수 있으므로 올림 처리 (Math.ceil)
