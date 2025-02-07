let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

let data = [];
for(let i = 1 ; i <= n ; i++) {
  data.push(input[i]);
}
data = [...new Set(data)];

data.sort((a,b) => {
  if(a.length != b.length) return a.length - b.length;
  else {
    if(a<b) return -1;
    else if(a>b) return 1;
    else return 0;
  }
})

for(let x of data) {
  console.log(x);
}