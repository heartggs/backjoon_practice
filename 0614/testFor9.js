const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const Num = Number(input[0]);
let result = "";

for (let i = 0; i < Num; i++) {
  for (j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split('\n');

// let total= parseInt(input[0])
// let species = parseInt(input[1])
// let sum = 0;
// for(let i=0; i<species; i++){
//     newArray=input[i+2].split(" ");
//         sum+=newArray[0]*newArray[1];
// }
// if (sum == total){
//     console.log('Yes')
    
// }
// else{
//     console.log('No')
// }