class queueNode <T> {
    val: T;
    next: queueNode<T> | null;

    constructor(val: T) {
        this.val = val;
        this.next = null;
    }
}

export class queueLL <T> {
    //properties
    front: queueNode<T> | null;
    rear: queueNode<T> | null;
    length: number;

    //constructor
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    //methods
    //enque - append
    enque(val: T): void {
        const node = new queueNode(val);
        if (this.rear == null) {
            this.front = this.rear = node;
            this.length++;
            return;
        }

        this.rear.next = node;
        this.rear = node;
        this.length++;
    }

    //deque - pop the first element
    deque(): queueNode<T> | null{
        let firstNode = this.front;
        if (this.front == null || this.front.next == null) {
            this.front = null;
            this.rear = null;
            this.length--;
            return firstNode;
        }       
        
        this.front = this.front.next;
        this.length--;
        return firstNode;
    }

    //display
    display(): void {
        let temp = this.front;
        if (this.front == null) {
            console.log("Queue is Empty")
            return;
        }

        console.log("         " + "-------".repeat(this.length))
        process.stdout.write("First In |");
        while (temp != null) {
            process.stdout.write(temp.val + " --> ");
            temp = temp.next;
        }
        process.stdout.write(" | Rear \n")
        console.log("         " + "-------".repeat(this.length))
    }
    
}