"use strict";
function bubblesort(arr) {
    console.log(arr);
    let n = arr.length;
    let swp = false;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swp = true;
            }
        }
        if (!swp)
            break;
    }
    console.log(arr);
}
bubblesort([2, 3, 7, 2, 5, 12, 7, 8]);
