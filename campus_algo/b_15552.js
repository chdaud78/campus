let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let answer = '';
for(let t=1;t<=N;t++) {
  let data = input[t].split(' ');
  let a = Number(data[0]);
  let b = Number(data[1]);
  answer += a + b + '\n';
}
console.log(answer);