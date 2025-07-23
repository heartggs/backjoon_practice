// 나이순 정렬[10814번]
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const members = input.slice(1).map((line) => {
  const [age, name] = line.split(" ");
  return { age: Number(age), name };
});

members.sort((a, b) => a.age - b.age);

for (const member of members) {
  console.log(`${member.age} ${member.name}`);
}
