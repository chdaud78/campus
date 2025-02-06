let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);
let data = input[1].split(' ').map(Number);

let max = data.reduce((a,b) => Math.max(a,b));
let new_data= [];

for(let i = 0 ; i < testCase ; i++) {
  new_data.push(data[i]/max*100);
}
let sum = new_data.reduce((a,b) => a+b,0);
console.log(sum / testCase)
