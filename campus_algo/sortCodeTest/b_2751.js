let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = [];

for(let i = 1 ; i <= n ; i++) {
  data.push(Number(input[i]));
}
data.sort((a,b) => a-b);

let answer = "";
for(let i =0; i < arr.length ; i++) {
  answer += arr[i] + '\n';
}

console.log(answer)