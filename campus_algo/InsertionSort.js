function insertionSort(arr) {
  for(let i = 1; i < arr.length ; i++) {
    for(let j= i ; j > 0 ; j--) {
      if(arr[j] < arr[j-1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
}

/* 1) 선택 정렬의 수행 시간 측정 */
let arr = Array.from({ length: 30000 }, () => Math.floor((Math.random() * 1000)));

// getTime()
let startTime = new Date().getTime();
insertionSort(arr);
let endTime = new Date().getTime();

// 출력
console.log('삽입 정렬 소요 시간:' , endTime-startTime, "ms.");

/* 2) 이미 정렬된 배열에 대한 선택 정렬의 수행 시간 측정 */
arr = Array.from({length: 30000}, () => 7);

startTime = new Date().getTime();
insertionSort(arr);
endTime = new Date().getTime();

console.log('정렬된 배열에 대한 삽입 정렬 소요 시간:', endTime-startTime, "ms.");
