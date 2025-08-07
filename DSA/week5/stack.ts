//Stacks with array implementation
export class Stack <T> {
    // last in first out
    //push = append
    //pop = pop
    //peek show the last value
    private arr: T[]

    constructor() {
        this.arr = [];
    }

    push(val: T): void {
        this.arr.push(val);
    }

    pop(): T| void {
        if (this.arr.length == 0) {
            console.log("Stack is Empty")
            return;
        }
        return this.arr.pop();
    }

    peek(): void{
        if (this.arr.length == 0) {console.log("Stack is empty"); return}
        console.log(this.arr[this.arr.length - 1]);
    }

    display(): void {
        console.log("Opened ------")
        for (let i = this.arr.length - 1; i >= 0; i--) {
            console.log("------ " + this.arr[i])
        }
        console.log("Closed -------")
    }
}
