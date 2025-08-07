//perform binary search on a sorted arr.

let arr: number[] = [2, 3, 5,7 ,8 ,9 ,90]
function binarySearch(x: number[], target: number) {
    let l = 0
    let h = x.length - 1

    while (l <= h) {
        let mid = Math.floor((l + h)/ 2)
        if (target == x[mid]) {
            return mid;
        }
        else if (target > x[mid]) {
            l = mid + 1
        }
        else {
            h = mid - 1
        }
    }
    
    return -1
}

console.log(binarySearch(arr, 90))