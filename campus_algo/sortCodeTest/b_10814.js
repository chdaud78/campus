let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = [];

for(let i = 1 ; i <= n ; i++) {
  let age = Number(input[i].split(' ')[0]);
  let name = input[i].split(' ')[1];
  data.push([age,name]);
}
/*
data.sort(function(a,b) {
  if(a[0] < b[0]) return a[0] - b[0];
  else if([a[0] == b[0]]) return a[1] - b[1];
  else return 0;
})
*/
data.sort((a,b) => a[0] - b[0]);
let answer = "";
for(let x of data) answer += x[0] + " " + x[1] + "\n";
console.log(answer)