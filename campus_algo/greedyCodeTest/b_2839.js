let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let p = Number(input[0])
let cnt = 0 ;
let flag = false;

while(p>= 0) {
  if(p == 0 || p%5==0) {
    cnt += parseInt(p/5);
    console.log(cnt);
    flag = true;
    break;
  }
  p-=3;
  cnt+=1;
}
if(!flag) {
  console.log(-1);
}