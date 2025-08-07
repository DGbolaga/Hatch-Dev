function merge(arr1: number[], arr2: number[]) {
    let x: number = 0;
    let y: number = 0;

    let newarr = new Array(arr1.length + arr2.length).fill(0);
    let count = 0;
    
    while(count < newarr.length) {
        if (x < arr1.length && y < arr2.length) {
            if (arr1[x] <= arr2[y]) {
                newarr[count] = arr1[x];
                x++;
            } else {
                newarr[count] = arr2[y];
                y++;
            }
        }
        else if (x >= arr1.length && y < arr2.length) {
            newarr[count] = arr2[y];
            y++;
        }
        else if (y >= arr2.length && x < arr1.length) {  // fixed here
            newarr[count] = arr1[x];
            x++;
        }
        count++;
    }
    return newarr; 
}

function split(arr: number[]): number[] {
    if (arr.length === 1) {
        return arr;
    }

    let left: number[] = split(arr.slice(0, Math.floor(arr.length / 2)));
    let right: number[] = split(arr.slice(Math.floor(arr.length / 2), arr.length));
    return merge(left, right);  
}

function sortArray(arr: number[]): number[] {
    return split(arr);
}

console.log(sortArray([1, 5, 4, 9, 3, 1, 200, 20, 2, 1000]));
