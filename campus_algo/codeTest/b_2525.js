let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].split(' ').map(Number);
let H = data[0];
let M = data[1];
let R = Number(input[1]);

let sum = H*60 + M + R;
sum %= 1440;
let hour = parseInt(sum /60);
let minute = sum%60;

console.log(hour + " " + minute);

