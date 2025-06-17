// 단어의 개수 [1152번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

// const result = input.split(" "); -> 틀림
const result = input === "" ? [] : input.split(" ");
console.log(result.length);

//split()의 특징
// 1. split(" ")는 문자열을 "공백" 기준으로 잘라서 배열로 만든다.
//    예: "a b c".split(" ") → ["a", "b", "c"]

// 2. 문자열이 공백만 있으면, "빈 문자열"들이 배열에 포함된다.
//    예: "  ".split(" ") → ["", "", ""]
//    → 2번의 문자열 공백은 단어는 없지만 배열 길이는 3이 됨

//3. 완전히 빈 문자열 ("")을 split(" ") 하면 [""]이 반환됨
//   예: "".split(" ") → [""]  ← 이건 단어가 0개인데 1개처럼 나옴
//   → 그래서 input === ""일 때는 직접 빈 배열 []을 넣어서 오류를 막아야 함
