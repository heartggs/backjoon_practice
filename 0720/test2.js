// FizzBuzz [28702번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 시간초과
// function FizzBuzz(i) {
//   if (i % 15 === 0) return "FizzBuzz";
//   if (i % 3 === 0) return "Fizz";
//   if (i % 5 === 0) return "Buzz";
//   return i.toString();
// }

// let j = 1;
// while (true) {
//   const a = FizzBuzz(j);
//   const b = FizzBuzz(j + 1);
//   const c = FizzBuzz(j + 2);

//   if (a === input[0] && b === input[1] && c === input[2]) {
//     console.log(FizzBuzz(j + 3));
//     break;
//   }
//   j++;
// }

for (let i = 0; i < 3; i++) {
  if (!isNaN(Number(input[i]))) {
    const num = Number(input[i]) + 3 - i;

    if (num % 3 === 0 && num % 5 === 0) console.log("FizzBuzz");
    else if (num % 3 === 0) console.log("Fizz");
    else if (num % 5 === 0) console.log("Buzz");
    else console.log(num);
    break;
  }
}
