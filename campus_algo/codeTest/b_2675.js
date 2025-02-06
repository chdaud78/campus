let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);
for(let i = 1 ; i <= T; i++) {
  let [r, s] = input[i].split(" ");
  let res = "";
  for(j=0;j<s.length;j++){
    res += s.charAt(j).repeat(r);
  }
  console.log(res);
}