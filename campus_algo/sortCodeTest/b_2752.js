let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].split(' ').map(Number);
let result = data.sort((a,b) => b-a);
console.log(`${result[0]} ${result[1]} ${result[2]}`);