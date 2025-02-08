let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
/*
let n = Number(input[0]);
let cnt = 0;
let i = 1;
while(n > 0) {
  n-=i;
  i++;
  cnt++;
}
if(n<0) cnt--;
console.log(cnt);*/
s = Number(input[0]);
let sum = 0;
let current = 0;
while (sum <=s) {
  current++;
  sum+= current;
}
console.log(current-1);