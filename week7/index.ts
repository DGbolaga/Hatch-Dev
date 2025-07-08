//recursion

/**
 @params n is the number to be passed in to sumN
 */

// sum of N integers
function sumN(x: number): number {
   return (x < 1) ? 1 : x + sumN(x-1)
}

// Nth Fibonnaci number
function fib(x: number): number {
    return (x <= 2) ? 1 : fib(x-1) + fib(x-2)
}

console.log(sumN(10))
console.log(fib(10))
