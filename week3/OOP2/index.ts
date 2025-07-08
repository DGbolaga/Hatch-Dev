// Assignment.

// Create your own array class. e.g Class ArrayDaramola
// It must implement 20 Javascript array methods.
// It should behave the same as an in-built JavaScript function

// Basic Array Methods (20)
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

// 🔹 Iteration & Search
// forEach() – Executes a function for each element.

// map() – Creates a new array by applying a function to each element.

// filter() – Creates a new array with elements that pass a test.

// find() – Returns the first element that satisfies a test.

// findIndex() – Returns the index of the first element that satisfies a test.

// some() – Returns true if at least one element satisfies a condition.

// every() – Returns true if all elements satisfy a condition.

// reduce() – Reduces array to a single value using a function.

// includes() – Checks if an array includes a certain value.

// sort() – Sorts the array (can be customized with a compare function).


class ArrayDaramola <T> {
    items: T[] = [];
    private length: number = 0;
    constructor(...args: T[]) { 
        let index: number = 0;
        while (args[index] !== undefined) {
            this.items[index] = args[index]
            this.length++;
            index++;
        }
    }


    // Adds one or more elements to the end, returns new length.
    push(...items: T[]): number {
        let lastIndex: number = this.items.length - 1
        for (let i=0; i < items.length; i++) {
            this.items.length++
            this.items[lastIndex + 1] = items[0]
        }
        return this.items.length
    }

    // Removes the last element, returns it or undefined if empty.
    pop(): T | undefined {
        if (this.items.length > 0) {
            const lastElement: T = this.items[this.items.length - 1];
            this.items.length = this.items.length - 1;
            return lastElement;
        } 
        return undefined;
    }

    // Removes the first element, returns it or undefined if empty.
    shift(): T | undefined {
        if (this.items.length > 0 ) {
            const firstElement: T = this.items[0];
            this.items.length--;
            return firstElement;
        }
        return undefined;
    }

    // Adds one or more elements to the beginning, returns new length.
    unshift(...items: T[]): number {
        const newLength: number = items.length + this.items.length; // new length array
        const itemLength: number = this.items.length // length of the array
        for (let i = itemLength - 1; i >= 0; i--) {
            // shift each element to the right by the number of elements to be added
            this.items[i + items.length] = this.items[i]
        }

        for (let i = 0; i < items.length; i++) {
            // insert new elements at the beginning
            this.items[i] = items[i];
        }
        // return new length of array.
        return newLength        
    }

    // Merges arrays or elements, returns new array.
    concat(differentArray: ArrayDaramola<T>): ArrayDaramola<T> {
        const newArray = new ArrayDaramola(...this.items);
        for (const item of differentArray.items) {
            newArray.push(item)
        }
        return newArray;
    }

    // Joins all elements into a string, separator is optional.
    join(separator: string = ','): string {
        let newString: string = '';
        let first = true;

        for (const item of this.items) {
            if (!first) {
                newString += separator;
            }
            newString += item;
            first = false;
        }
        return newString
    };
    
    // Executes a function for each element, no return.
    forEach(callbackfn: (value: T, index: number, array: T[]) => void): void {
        for (let i = 0; i < this.items.length; i++) {
            callbackfn(this.items[i], i, this.items)
        }
    };

    // Creates new array by applying function to each element.
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U): ArrayDaramola<U> {
        const newArray = new ArrayDaramola<U>();
        for (let i = 0; i < this.items.length; i++) {
            newArray.push(callbackfn(this.items[i], i, this.items))
        }
        return newArray
    };

    // Creates new array with elements passing the test.
    filter(callbackfn: (value: T, index: number, array: T[]) => unknown): ArrayDaramola<T> {
        const newArray = new ArrayDaramola<T>();
        for (let i = 0; i < this.items.length; i++) {
            if (callbackfn(this.items[i], i, this.items)) {
                newArray.push(this.items[i])
            }
        }
        return newArray
    };

    // Returns first element that satisfies test or undefined.
    find(callbackfn: (value: T, index: number, array: T[]) => unknown): T | undefined {
        for(let i = 0; i < this.items.length; i++) {
            if (callbackfn(this.items[i], i, this.items)) {
                return this.items[i]
            }
        }
        return undefined
    };

    // Returns index of first element that satisfies test, or -1.
    findIndex(callbackfn: (value: T, index: number, array: T[]) => unknown): number {
        for(let i = 0; i < this.items.length; i++) {
            if (callbackfn(this.items[i], i, this.items)) {
                return i;
            }
        }
        return -1
    };
    
    // Returns the first index of specified element, or -1.
    indexOf(searchElement: T, fromIndex?: number): number {
        for(let i = 0; i< this.items.length; i++) {
            if (this.items[i] === searchElement) {
                return i
            }
        }
        return -1
    };

    // Returns the last index of specified element, or -1.
    lastIndexOf(searchElement: T, fromIndex?: number): number {
        let result: number = -1;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === searchElement) {
                result = i;
            }
        }
        return result;
    };

    // Returns true if all elements satisfy condition.
    every(callbackfn: (value: T, index: number, array: T[]) => unknown): boolean {
        for (let i = 0; i < this.items.length; i++) {
            if (!callbackfn(this.items[i], i, this.items)) {
                return false;
            }
        }
        return true;
    };
    
    // Checks if array includes a certain value.
    includes(searchElement: T, fromIndex?: number): boolean {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === searchElement) return true;
        }
        return false;
    };
    
    // Returns true if at least one element satisfies condition.
    some(callbackfn: (value: T, index: number, array: T[]) => unknown): boolean {
        for (let i = 0; i < this.items.length; i++) {
            if (callbackfn(this.items[i], i, this.items)) {
                return true;
            }
        }
        return false;
    };
    
    
}

let myArray = new ArrayDaramola<number>(1, 2, 3, 4, 5);
// let differentArray = new ArrayDaramola<number> (9, 7, 6, 8);
// let newArray = myArray.concat(differentArray);

console.log(myArray.push(9))
console.log(myArray.push(10))
console.log(myArray.items)

// console.log(newArray.join(' - '))