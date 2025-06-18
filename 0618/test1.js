// 진법 변환 [2745번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [N, B] = input;
const result = parseInt(N, Number(B));
console.log(result);

// parseInt(string, radix)
// → 다른 진법 문자열을 10진수 정수로 변환하는 함수

// - string : 변환할 문자열 (예: "1A")
// - radix  : 해당 문자열이 어떤 진법인지 명시 (2 ~ 36 사이 정수)

//   특징:
// - 숫자 + 알파벳 조합 가능 (예: "1A"는 16진수 → 26)
// - 알파벳은 대소문자 구분 없음 ("a" === "A")
// - 공백은 무시되며, 유효하지 않은 문자가 나오면 그 전까지만 해석
// - base 범위: 2진수 ~ 36진수까지 지원

// 예시:
// parseInt("1010", 2);    // → 10 (2진수 → 10진수)
// parseInt("1A", 16);     // → 26 (16진수 → 10진수)
// parseInt("Z", 36);      // → 35

//-----------------------------------------------------

// number.toString(base)
// → 10진수를 원하는 진법의 문자열로 변환하는 함수

// - base : 변환하고자 하는 진법 (2 ~ 36 사이 정수)

//  특징:
// - 결과는 항상 문자열
// - 알파벳은 소문자로 출력됨 (A~Z는 10~35)
// - 대문자로 출력하고 싶으면 .toUpperCase() 사용
// - base 범위: 2진수 ~ 36진수까지 지원

// 예시:
// (10).toString(2);           // → "1010"   (2진수 문자열)
// (255).toString(16);         // → "ff"     (16진수 문자열)
// (60466175).toString(36);    // → "zzzzz"
// (60466175).toString(36).toUpperCase(); // → "ZZZZZ"
