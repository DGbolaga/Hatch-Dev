class LNode {
    value: number;
    next: LNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: LNode | null;

    constructor () {
        this.head = null
    }

    addNode(value: number): void {
        const newNode = new LNode(value);
        if (this.head == null) {
            this.head = newNode;
        } 
        else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }
}


const newlist = new LinkedList();
newlist.addNode(20);

// console.log(list); // Output: 10
