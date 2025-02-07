function bubbleSort(arr) {
  for (let i = arr.length-1 ; i> 0 ; i++) {
    for (let j=0; j< i ; j++) {
      if (arr[j] < arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}

/* 1) 버블 정렬의 수행 시간 측정 */
let arr = Array.from({ length: 30000 }, () => Math.floor((Math.random() * 1000)));

// getTime()
let startTime = new Date().getTime();
bubbleSort(arr);
let endTime = new Date().getTime();

// 출력
console.log('버블 정렬 소요 시간:' , endTime-startTime, "ms.");

/* 2) 이미 정렬된 배열에 대한 선택 정렬의 수행 시간 측정 */
arr = Array.from({length: 30000}, () => 7);

startTime = new Date().getTime();
bubbleSort(arr);
endTime = new Date().getTime();

console.log('정렬된 배열에 대한 버블 정렬 소요 시간:', endTime-startTime, "ms.");

