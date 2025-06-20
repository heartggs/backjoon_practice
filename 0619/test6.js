// 수 정렬하기 2 [2751번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const numbers = input.slice(1).map(Number);

numbers.sort((a, b) => b - a);
console.log(numbers.join("\n"));

// 입력이 많을 경우 (1,000,000개) 최적화 필요
// 최적화 방법
// numbers.forEach((num) => console.log(num));
// -> console.log(numbers.join("\n")); 로 변경
// 매번 console.log를 실행하기보다 문자열로 한 번에 묶어서 출력
