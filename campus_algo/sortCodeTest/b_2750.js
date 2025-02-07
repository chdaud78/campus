let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = [];

for(let i = 1 ; i <= n ; i++) {
  data.push(input[i]);
}
data.sort((a,b) => a-b);
let setData = new Set(data);

for(let x of setData) {
  console.log(x);
}
