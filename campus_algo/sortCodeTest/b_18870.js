let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = input[1].split(' ').map(Number);

let uniqueArray = [...new Set(data)];
uniqueArray.sort((a,b) => a-b);

let myMap = new Map();
for(let i=0 ; i<uniqueArray.length;i++) {
  myMap.set(uniqueArray[i], i);
}
answer = "";
for(x of data) answer += myMap.get(x) + " ";
console.log(answer);