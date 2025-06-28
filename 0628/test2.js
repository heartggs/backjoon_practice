// 큐 2 [18258번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 시간초과 에러
// const N = Number(input[0]);
// const commands = input.slice(1);
// const que = [];
// const result = [];

// for (let cmd of commands) {
//   if (cmd.startsWith("push")) {
//     const [, num] = cmd.split(" ");
//     que.push(Number(num));
//   } else if (cmd === "pop") {
//     result.push(que.length === 0 ? -1 : que.shift());
//   } else if (cmd === "size") {
//     result.push(que.length);
//   } else if (cmd === "empty") {
//     result.push(que.length === 0 ? 1 : 0);
//   } else if (cmd === "front") {
//     result.push(que.length === 0 ? -1 : que[0]);
//   } else if (cmd === "back") {
//     result.push(que.length === 0 ? -1 : que[que.length - 1]);
//   }
// }

// console.log(result.join("\n"));

const N = Number(input[0]);
const commands = input.slice(1);
const que = [];
let head = 0;
const result = [];

for (let cmd of commands) {
  if (cmd.startsWith("push")) {
    const [, num] = cmd.split(" ");
    que.push(Number(num));
  } else if (cmd === "pop") {
    result.push(head === que.length ? -1 : que[head++]);
  } else if (cmd === "size") {
    result.push(que.length - head);
  } else if (cmd === "empty") {
    result.push(que.length - head === 0 ? 1 : 0);
  } else if (cmd === "front") {
    result.push(que.length - head === 0 ? -1 : que[head]);
  } else if (cmd === "back") {
    result.push(que.length - head === 0 ? -1 : que[que.length - 1]);
  }
}

console.log(result.join("\n"));


// 큐(Queue)란?
// - 선입선출(FIFO: First-In, First-Out) 구조
// - 먼저 들어온 데이터가 먼저 나감
// - 대표 연산
//   - push: 뒤에 넣기
//   - pop: 앞에서 꺼내기
//   - front: 맨 앞 값 보기
//   - back: 맨 뒤 값 보기
//   - size: 현재 큐 크기
//   - empty: 비었는지 확인

// queue에서 shift() 대신 head를 사용하는 이유
// 자바스크립트에서 shift()는 배열 맨 앞 요소를 꺼낸 후,
// 나머지 모든 요소를 한 칸씩 앞으로 이동시키므로 O(N) 시간 소모
// -> 입력이 많을수록 성능이 급격히 저하됨

// 해결 방법
// head 포인터를 사용하여 앞에서 꺼낸 것처럼 처리
// 배열은 그대로 두고, head 인덱스만 증가시켜 O(1)로 처리 가능
// -> 실질적으로 값 삭제 없이 큐처럼 동작하며 성능 대폭 향상
