/* 오름차순 예시1 */
let arr = [1,8,5,9,21,3,7,2,15];

function compare(a,b) {
  if(a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}

arr.sort(compare);
console.log(arr);

/* 오름차순 예시 2 */
arr = [1,8,5,9,21,3,7,2,15];

function compare2(a,b) {
  return a-b;
}

arr.sort(compare);
console.log(arr);

/* 오름차순 정렬 예시3 */
arr = [1,8,5,9,21,3,7,2,15];

arr.sort(function(a,b) {
  return a-b;
});

console.log(arr);

/* 내림 차순 정렬 예시 */
arr = [1,8,5,9,21,3,7,2,15];

arr.sort(function(a,b) {
  return b-a;
});

console.log(arr);

// 문자열 오름차순 예시
let arr2= ["fineapple", "banana", "durian", "apple", "carrot"];

arr2.sort();
console.log(arr2)

/* 문자열 내림차순 예시*/
arr2= ["fineapple", "banana", "durian", "apple", "carrot"];

function compare3(a,b) {
  if(a > b) return -1;
  else if (a>b) return 1;
  else return 0;
}
arr2.sort(compare3);
console.log(arr2)

/* 문자열 오름차순 예시 대소문자 구분 x */
arr2= ["fineapple", "Banana", "durian", "Apple", "carrot"];

function compare4(a,b) {
  let upperCaseA = a.toUpperCase();
  let upperCaseB = b.toUpperCase();
  if(upperCaseA > upperCaseB) return -1;
  else if (upperCaseA > upperCaseB) return 1;
  else return 0;
}
arr2.sort(compare4);
console.log(arr2);

/* 객체에 대한 오름차순 */
let arr3 = [
  {name: "홍길동", score: 90},
  {name: "김철수", score: 85},
  {name: "박영희", score: 97},
]

function compare5(a,b) {
  return b.score - a.score;
}

arr3.sort(compare5);
console.log(arr3);