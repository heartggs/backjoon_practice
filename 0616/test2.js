const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const studentNum = new Array(31).fill(false); //0~30번의 학생

//인덱스 0번은 사용하지 x
for (let i = 0; i < input.length; i++) {
  studentNum[input[i]] = true;
}

for (let i = 1; i < 31; i++) {
  if (!studentNum[i]) {
    console.log(i);
  }
}

// "new Array" vs "Array.from"
// --------------------------------------------------
// ❗ new Array(length)
// - 길이만 지정된 '비어있는' 배열 생성 (실제 요소는 없음)
// - map(), forEach() 등 고차함수 사용 불가 (빈 슬롯이라 콜백 안 돌아감)
// - fill()을 사용해야 요소 채우기 가능
//
// 예시:
// const arr1 = new Array(5);         // [ <5 empty items> ]
// const arr1Filled = arr1.fill(0);   // [0, 0, 0, 0, 0]

// --------------------------------------------------
// ❗ Array.from({ length })
// - 객체의 length 속성을 참조해 배열 생성
// - 요소가 실제로 존재함 (undefined로 채워짐)
// - map(), forEach() 등 고차함수 사용 가능
//
// 예시:
// const arr2 = Array.from({ length: 5 }); // [undefined, undefined, undefined, undefined, undefined]

// --------------------------------------------------
// ❗ Array.from(obj, mapFn)
// - 두 번째 인자로 콜백 함수(mapFn)를 주면 각 요소에 대한 초기값 설정 가능
// - 인덱스를 기반으로 값 생성 가능
//
// 예시:
// const arr3 = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]
