let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
/*
let n = Number(input[0]);
let arr = n.toString().split("").map(Number);

arr.sort((a,b) => b-a);
let answer = arr.join('').toString();
console.log(answer);
*/

let n = input[0];
let cnt = Array(10).fill(0);

for(let x of n) {
  cnt[Number(x)]++;
}

let answer = "";
for(let i = 9 ; i >=0 ;i--) {
  for(let j=0;j<cnt[i]; j++) answer+= i + "";
}
console.log(answer);