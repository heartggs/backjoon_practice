// 나는야 포켓몬 마스터 이다솜 [1620번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const pocketMon = input.slice(1, N + 1);
const findPocketMon = input.slice(N + 1);

const returnIndex = new Map();
const returnName = new Map();

pocketMon.forEach((name, index) => {
  const numStr = String(index + 1);
  returnIndex.set(name, numStr);
  returnName.set(numStr, name);
});

const result = [];

for (let i of findPocketMon) {
  if (returnIndex.has(i)) {
    result.push(returnIndex.get(i));
  } else {
    result.push(returnName.get(i));
  }
}
console.log(result.join("\n"));

// Map이란?
// Map은 "키-값 쌍(key-value pair)"을 저장하는 특수한 내장 객체
// ES6(ECMAScript 2015)부터 도입되었고, 기존 Object보다 더 유연하고 강력한 키 사용이 가능

// | 항목        | `Map`                                 | `Object`                         |
// | ---------- | ------------------------------------- | -------------------------------- |
// | **키 타입**  | 모든 자료형 가능 (숫자, 객체 등)            | 문자열과 심볼만 가능                      |
// | **키 순서**  | 입력 순서 유지                           | 보장되지 않음 (ES6 이후 일부 유지됨)          |
// | **반복 순회** | `for...of`, `.forEach()` 바로 사용 가능 | `for...in`, `Object.keys()` 등 필요 |
// | **크기 확인** | `map.size`                           | `Object.keys(obj).length` 필요     |
// | **성능**     | 대량 데이터에 최적화됨                     | 소량 데이터엔 무난                       |
// | **유즈케이스** | 다양한 키, 빠른 검색 필요 시                | 단순 구조, JSON 변환 등                 |


