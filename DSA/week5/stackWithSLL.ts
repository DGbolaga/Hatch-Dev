//Stacks with Singly Linked List
export class stackNode <T> {
    val: T;
    next: stackNode<T> | null;

    constructor(val: T) {
        this.val = val;
        this.next = null;
    }    

    showVal(): T {
        return this.val;
    }
}

export class stackLL <T> {
    //properties
    top: stackNode<T> | null;
    length: number;

    //constructor
    constructor() {
        this.top = null;
        this.length = 0;
    }

    //methods
    // push
    push(val: T): void{
        const node = new stackNode(val);
        if (this.top == null) {
            this.top = node;
            this.length++;
            return;
        }

        node.next = this.top;
        this.top = node;
    }

    // is empty
    isEmpty(): boolean{
        return this.top == null;
    }

    //display 
    display(): void {
        let temp = this.top;
        console.log("Opened       ")
        while (temp != null) {
            console.log("       |  " + temp.val + "  |")
            temp = temp.next;
        }
        console.log("Closed -------")
    }

    //pop
    pop(): stackNode <T> | void {
        if (this.top == null) {
            console.log("Is empty");
            return;
        }

        const topNode = this.top;
        this.top = this.top.next;
        this.length--;
        return topNode;
    }

    //peak
    peak(): void {
        if (this.top == null) {
            console.log("Stack is Empty");
            return;
        }

        console.log(this.top.val);
    }

}

// npm --init
// npx tsc --init
// npm install --save-dev typescript