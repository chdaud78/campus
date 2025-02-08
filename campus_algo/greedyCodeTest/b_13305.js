let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let distance = input[1].split(' ').map(Number);
let cost = input[2].split(' ').map(Number);

let minValue = cost[0];
for(let i = minValue ; i<n; i++) {
  minValue = Math.min(minValue,cost[i]);
  cost[i] = minValue;
}

let sum = BigInt(0);
for(let i =0 ; i< n -1 ;i++) {
  sum+= BigInt(cost[i])*BigInt(distance[i]);
}
console.log(String(sum));