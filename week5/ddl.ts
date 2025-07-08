//Node class
class ddlNode {
    val: number;
    prev: ddlNode | null;
    next: ddlNode | null;

    constructor(val: number, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}
// Doubly LinkedList Class
export class DLL {
    //property
    head: ddlNode | null;
    tail: ddlNode | null;

    //constructor
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //methods
    //display
    display(): void {
        let temp = this.head;
        while (temp != null) {
            process.stdout.write(temp.val + " -> ")
            temp = temp.next;
        }
        console.log("End")
    }

    //append at tail
    append(val: number): void {
        const node = new ddlNode(val);
        if (this.tail == null) {
            this.head  = node;
            this.tail  = node;
            return;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail  = node;
    }

    //prepend at head
    prepend(val: number): void {
        const node = new ddlNode(val);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }

    //insert by index
    //remove by index
    //reverse
    //find by value
}