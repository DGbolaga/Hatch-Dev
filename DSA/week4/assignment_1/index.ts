// Assignment: Create an Array Class that implements 25 array methods without using any 
//             in-built array method.


// Basic Array methods (26)

// length – Returns or sets the number of elements in the array.
// push() – Adds one or more elements to the end.
// pop() – Removes the last element.
// shift() – Removes the first element.
// unshift() – Adds one or more elements to the beginning.
// concat() – Merges two or more arrays.
// join() – Joins all elements into a string.
// slice() – Returns a shallow copy of a portion of an array.
// splice() – Adds/removes elements from any position.
// indexOf() – Returns the first index of a specified element.
// lastIndexOf() – Returns the last index of a specified element.
// reverse() – Reverses the array in place.
// flat() – Flattens nested arrays.
// flatMap() – Maps each element and flattens the result.
// fill() – Fills elements with a static value.
// toString() – Converts the array to a comma-separated string.

// Iteration & Search

// forEach() – Executes a function for each element.
// map() – Creates a new array by applying a function to each element.
// filter() – Creates a new array with elements that pass a test.
// find() – Returns the first element that satisfies a test.
// findIndex() – Returns the index of the first element that satisfies a test.
// some() – Returns true if at least one element satisfies a condition.
// every() – Returns true if all elements satisfy a condition.
// reduce() – Reduces array to a single value using a function.
// includes() – Checks if an array includes a certain value.
// sort() – the array (can be customized with a compare function).

class ArrayDaramola<T> {
    private items: T[] = [];
    length: number = 0;

    constructor(...args: T[]) {
        // add the arguments into the array and keep count of them
        let index: number = 0
        while (args[index] !== undefined) {
            this.items[index] = args[index]
            index++;
            this.length++ 
        }
    }

    // length – Returns or sets the number of elements in the array.
    len(newLength?: number): number {
        // set new length
        if (newLength) {
            if (newLength > this.length) {
                for (let i = this.length; i < newLength; i++) {
                    this.items[i] = undefined as T;
                }
            }
            else {
                for (let i = newLength; i < this.length; i++) {
                    delete this.items[i] // doesn't delete, sets it to empty (undefind as T)
                }

                // delete the empty values and shrink the array.
                // let temp: T[] = [];
                // for (let i = 0; i < newLength; i++) {
                //     temp[i] = this.items[i];
                // }
                // this.items = temp;
            }
            this.length = newLength;
        }
        return this.length
    }

    // Adds one or more elements to the end.
    push(...args: T[]) {
        for (const arg of args) {
            // insert at the last index
            this.items[this.length] = arg;
            this.length++
        }
    }

    // Removes and returns the last element
    pop(): T {
        //get last element
        const lastElement: T = this.items[this.length - 1];
        //remove last element
        this.len(this.length - 1);
        return lastElement;
    }

    // Removes the first element
    shift() {
        const firstElement = this.items[0];
        for (let i = 1; i < this.length; i++) {
            this.items[i-1] = this.items[i]
        }
        //reduce the array
        arr.len(this.length - 1)
    }

    // Adds one or more elements at the beginning
    unshift(...args: T[]) {
        // not so efficient. using in-built length method is preferred.
        let arg_count: number = 0;
        for (const arg of args) {
            arg_count++;
        }

        this.length += arg_count;
        for (let i=this.length; i > 0; i--) {
            this.items[i] = this.items[i - arg_count]
        }

        for (let i = 0; i < arg_count; i++) {
            this.items[i] = args[i]
        }
    }

    // Merges two or more arrays (ArrayDaramola).
    concat(arr2: ArrayDaramola<T>): ArrayDaramola<T> {
        const result = new ArrayDaramola<T>(...this.items)
        for (const arg of arr2.items) {
            result.push(arg)
        }

        return result
    }

    // Joins all elements into a string.
    join(seperator: string = ','): string{
        let result: string = '';
        result += `${this.items[0]}`
        for (let i = 1; i < this.length; i++) {
            result += seperator + this.items[i]
        }
        return result
    }

    // Returns a shallow copy of a portioin of an array.
    // slice(start?:number, end?: number): ArrayDaramola<T> {
        
    //     const result = new ArrayDaramola<T>();
    //     // account for positive index
        

    // }

    // Adds/removes elements from any positon.
    // splice(start:number, deleteCount?:number, ...items?: T[]): T[] {
    //     // get all the items from start index to start index + deleteCount 
    //     // into an array as long as start index + deleteCount < len(index)
        

    //     let result: T[] = []
    //     if (deleteCount) {
    //         for (let i = start; i < start + deleteCount; i++) {
    //             result.push(this.items[i])
                
    //         }
    //     } else {
    //         result.push(this.items[start])
    //     }
    //     return result
        
    // }

    // indexOf() – Returns the first index of a specified element.
    indexOf(searchElement: T, fromIndex?: number): number {
        for (let i = 0; i < this.length; i++){
            if (searchElement === this.items[i]) {
                return i
            }
        }
        return -1
    }

    // lastIndexOf() – Returns the last index of a specified element.
    lastIndexOf(searchElement: T, fromIndex?: number): number {
        let temp = []
        for (let i = 0; i < this.length; i++) {
            if (searchElement === this.items[i]) {
                temp.push(i)
            }
        }
        
        
        let result = temp.pop() ?? -1 // result = -1 if no returned item.
        return result 
    }

    // reverse() – Reverses the array in place.
    reverse(): void {
        let left = 0
        let right = this.length - 1

        while (left < right) {
            let temp = this.items[left]
            this.items[left] = this.items[right]
            this.items[right] = temp

            left++
            right--
        }
    }

    // flat() – Flattens nested arrays.
    flat(depth: number = 1): ArrayDaramola<unknown> {
        const result = new ArrayDaramola<unknown>(); // return arr

        // function to recursively flatten list in the this.items array class.
        const flatten = (arr: any[], currentdepth: number) => {
            for (const item of arr) {
                if (Array.isArray(item) && currentdepth > 0) {
                    flatten(item, currentdepth-1)
                } 
                else {
                    // add items into result array class and update it's length
                    result.items[result.length] = item;
                    result.length++
                }
            }
        }

        flatten(this.items, depth);
        return result
    }

    // flatMap() – Maps each element and flattens the result. 
    // It's basically arr.map() then flattent the result (flat())



    // fill() – Fills elements with a static value.
    // toString() – Converts the array to a comma-separated string.

    // Iteration & Search

    // forEach() – Executes a function for each element.
    // map() – Creates a new array by applying a function to each element.
    // filter() – Creates a new array with elements that pass a test.
    // find() – Returns the first element that satisfies a test.
    // findIndex() – Returns the index of the first element that satisfies a test.
    // some() – Returns true if at least one element satisfies a condition.
    // every() – Returns true if all elements satisfy a condition.
    // reduce() – Reduces array to a single value using a function.
    // includes() – Checks if an array includes a certain value.
    // sort() – the array (can be customized with a compare function).

}


const arr = new ArrayDaramola<number>(2,3,6,4,5,6)

const testing = new ArrayDaramola<(any)>(10, 20, 30, [9, 8, 6, [100, 400]])
console.log(testing, testing.flat(3))