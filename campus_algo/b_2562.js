let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input.map(x=> Number(x));

let res_idx = 0;
let res_n = 0;
for(let i = 0; i<arr.length ; i++) {
    if(arr[i] > res_n) {
        res_n = arr[i];
        res_idx = i;
    }
}
console.log(res_n);
console.log(res_idx + 1);
