function quicksort(nums: number[], low: number, high: number) {
    //base case.
    if (low >= high) {
        return;
    }

    let s = low;
    let e = high;
    let m = s + Math.floor((e-s)/2) //middle
    let pivot = nums[m];

    while (s <= e) {
        //if it's sorted, it will not swap
        while (nums[s] < pivot) {
            s++;
        }
        while (nums[e] > pivot) {
            e--;
        }

        if (s<=e) {
            //swap
            let temp = nums[s]
            nums[s] = nums[e]
            nums[e] = temp
            s++;
            e--;
        }
    }

    //pivot is now at current index, sort the 2 halves
    quicksort(nums, low, e);
    quicksort(nums, s, high);

}

let numbers: number[] = [2, 3, 8, 1, 89, 54, 5, 0]
quicksort(numbers, 0, numbers.length-1)
console.log(numbers)