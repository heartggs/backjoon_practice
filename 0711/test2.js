// 부녀회장이 될테야 [2775번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

let line = 1;
for (let i = 0; i < T; i++) {
  const floor = Number(input[line++]);
  const roomNum = Number(input[line++]);

  // const apt = [];
  // for (let f = 0; f <= floor; f++) {
  //   const row = [];
  //   for (let r = 0; r <= roomNum; r++) {
  //     if (f === 0) {
  //       // 0층은 i호에 i명이 산다
  //       row[r] = r;
  //     } else if (r === 0) {
  //       // 0호는 항상 0명
  //       row[r] = 0;
  //     } else {
  //       // 0으로 초기화, 아래에서 계산
  //       row[r] = 0;
  //     }
  //   }
  //   apt.push(row);
  // }

  const apt = Array.from({ length: floor + 1 }, () =>
    Array(roomNum + 1).fill(0)
  );

   // 0층은 i호에 i명이 산다
  for (let r = 1; r <= roomNum; r++) {
    apt[0][r] = r;
  }
  // 사람 수 계산 (1층부터 floor층까지)
  for (let f = 1; f <= floor; f++) {
    for (let r = 1; r <= roomNum; r++) {
      for (let x = 1; x <= r; x++) {
        apt[f][r] += apt[f - 1][x];
      }
    }
  }

  console.log(apt[floor][roomNum]);
}

/*
2차원 배열 쉽게 만들기
const apt = [];
for (let f = 0; f <= floor; f++) {
  const row = [];
  for (let r = 0; r <= roomNum; r++) {
    row[r] = 0;
  }
  apt.push(row);
}

const apt = Array.from({ length: 층수 }, () => Array(호수).fill(0));
*/
