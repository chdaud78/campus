function  selectionSort(arr) {
  for(let i = 0 ; i < arr.length ; i++) {
    let minIndex = i;
    for(let j = i+1; j < arr.length ; j++) {
      if(arr[minIndex] > arr[j]) minIndex= j;
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

/* 1) 선택 정렬의 수행 시간 측정 */
let arr = Array.from({ length: 30000 }, () => Math.floor((Math.random() * 1000)));

// getTime()
let startTime = new Date().getTime();
selectionSort(arr);
let endTime = new Date().getTime();

// 출력
console.log('선택 정렬 소요 시간:' , endTime-startTime, "ms.");

/* 2) 이미 정렬된 배열에 대한 선택 정렬의 수행 시간 측정 */
arr = Array.from({length: 30000}, () => 7);

startTime = new Date().getTime();
selectionSort(arr);
endTime = new Date().getTime();

console.log('정렬된 배열에 대한 선택 정렬 소요 시간:', endTime-startTime, "ms.");

