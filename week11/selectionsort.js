"use strict";
//selection sort (does it in descending order)
function selectionsort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i; j < n; j++) {
            if (arr[j] > arr[minIdx]) {
                minIdx = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}
console.log(selectionsort([3, 4, 2, 17, 81]));
//Assignment:
//Read on Tail Call Optimization (TCO) - for recursion
