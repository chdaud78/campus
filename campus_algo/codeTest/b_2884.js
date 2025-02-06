let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].split(" ");
let H = Number(data[0]);
let M = Number(data[1]);


if(M<45) {
  H=H-1;
  M=M+15;
  if(H < 0) H = 23;
}
else {
  M=M-45;
}
return console.log(`${H} ${M}`);
