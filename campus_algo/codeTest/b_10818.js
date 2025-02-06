let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let list = input[1].split(' ').map(Number);
let max = list.reduce((a,b) => Math.max(a,b));
let min = list.reduce((a,b) => Math.min(a,b));

console.log(min + " " + max);