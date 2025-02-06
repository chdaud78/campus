let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let data = Number(input[0]);
let sum = 0;

for(let a = 1 ; a <= data ; a++) {
  sum+=a;
}
console.log(sum);