let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let time = [];
for(let i = 1; i<= n ; i++) {
  let [x,y] = input[i].split(' ').map(Number);
  time.push([x,y]);
}

time.sort((a,b) => {
  if(a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
})
let cnt= 1, cur = 0;

for(let i = 1 ; i<n ; i++) {
  if(time[cur][1] <= time[i][0]) {
    cur = i;
    cnt += 1;
  }
}

console.log(cnt);