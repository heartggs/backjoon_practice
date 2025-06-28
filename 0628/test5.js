// 덱 2 [28279번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const commands = input.slice(1);

// 시간초과
// const deque = [];
// let head = 0;
// const reuslt = [];

// for (cmd of commands) {
//   if (cmd.includes("1")) {
//     const [, x] = cmd.split(" ");
//     deque.splice(head, 0, Number(x));
//   } else if (cmd.includes("2")) {
//     const [, x] = cmd.split(" ");
//     deque.push(Number(x));
//   } else if (cmd === "3") {
//     if (deque.length - head === 0) reuslt.push(-1);
//     else reuslt.push(deque[head++]);
//   } else if (cmd === "4") {
//     if (deque.length - head === 0) reuslt.push(-1);
//     else reuslt.push(deque.pop());
//   } else if (cmd === "5") {
//     reuslt.push(deque.length - head);
//   } else if (cmd === "6") {
//     reuslt.push(deque.length - head === 0 ? 1 : 0);
//   } else if (cmd === "7") {
//     reuslt.push(deque.length - head === 0 ? -1 : deque[head]);
//   } else if (cmd === "8") {
//     reuslt.push(deque.length - head === 0 ? -1 : deque[deque.length - 1]);
//   }
// }

// console.log(reuslt.join("\n"));

const deque = Array(4000000);
let head = 2000000;
let tail = 2000000;
const result = [];

for (let cmd of commands) {
  if (cmd.startsWith("1")) {
    const [, x] = cmd.split(" ");
    deque[--head] = Number(x);
  } else if (cmd.startsWith("2")) {
    const [, x] = cmd.split(" ");
    deque[tail++] = Number(x);
  } else if (cmd === "3") {
    if (head === tail) result.push(-1);
    else result.push(deque[head++]);
  } else if (cmd === "4") {
    if (head === tail) result.push(-1);
    else result.push(deque[--tail]);
  } else if (cmd === "5") {
    result.push(tail - head);
  } else if (cmd === "6") {
    result.push(tail - head === 0 ? 1 : 0);
  } else if (cmd === "7") {
    result.push(tail - head === 0 ? -1 : deque[head]);
  } else if (cmd === "8") {
    result.push(tail - head === 0 ? -1 : deque[tail - 1]);
  }
}

console.log(result.join("\n"));

// 덱(Deque)이란?
// 양쪽(앞/뒤)에서 push와 pop이 모두 가능한 자료구조.
// 즉, 큐(Queue) + 스택(Stack) 성질을 모두 가짐.
// - push_front, push_back
// - pop_front, pop_back
// - front, back 등 모두 가능

// 시간 초과에러  이유
// 자바스크립트에서
// - push_front를 splice(0,0,x) 또는 unshift()로 구현하면 O(N)
// - pop_front를 shift()로 구현하면 O(N)
// ➔ 입력이 많아지면 (최대 100만) 시간 초과 발생.

// 해결방법
// 배열을 충분히 크게 만들어서 중간부터 시작 (head, tail 포인터 사용).
// - head: 덱의 앞쪽 인덱스
// - tail: 덱의 뒤쪽 인덱스 (다음 삽입될 위치)
// 덱의 구간을 [head ... tail-1] 로 유지하며
// splice, shift 없이 O(1)로 덱 구현 가능.

// 결론
// 배열은 그대로 두고 head, tail만 이동시켜 덱을 시뮬레이션 → O(1)
