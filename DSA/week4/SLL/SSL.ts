class SllNode {
    val: number;
    next: SllNode | null;
    constructor (val: number) {
        this.val = val;
        this.next = null;
    }
}

class SSL {
    //property
    head: SllNode | null;

    //constructor
    constructor() {this.head = null;}

    //methods
    //apppend
    append(val: number): void {
        let node = new SllNode(val);
        if (this.head == null) {
            this.head = node;
            return;
        }

        let temp = this.head;
        while(temp.next != null) {
            temp = temp.next;
        }
        
        temp.next = node;
    }

    //display
    display(): void {
        let temp =
    }

    //prepend
    prepend(val: number) {
        let node = new SllNode(val);
        if (this.head == null) {
            this.head = node;
        }

        node.next = this.head;
        this.head = node;
    }
    
    //find

    //insert
    insert(val: number, idx: number) {
        let node = new SllNode(val);
        let counter = 0;
        if (idx == 0 ) {
            this.prepend(val);
            return;
        }

        let temp = this.head;
        //idx = 3
        // 2, 45, 7, 2, 89
        while(counter != idx - 1) {
            if (temp != null) {
                temp = temp.next;
                counter++;
            }
        }
        node.next = temp?.next;

        
    }

    //get
    //reverse
    //shuffle
    //RemoveDuplicate
    //mergelist
    //sort by

}
















// // Node class.
// class Nodee {
//     value: number;
//     next: Nodee | null = null;


//     constructor(value: number, next: Nodee | null) {
//         this.value = value;
//         this.next = next;
//     }
// }

// // SinglyLinkedlist Class
// export class SLL {
//     //properties
//     private head: Nodee | null;
//     private tail: Nodee | null;
//     private size: number;

//     // constructor
//     constructor () {
//         this.size = 0;
//         this.head = null;
//         this.tail = null;
//     } 
    
//     // methods
//     //  - traversal/display
//     display(): void {
//         let temp = this.head;
//         let res = '';
//         while (temp != null) {
//             // print on same line
//             res += temp.value + ' -> ';
//             temp = temp.next;
//         }
//         console.log(res + "End , size = " + this.size);
//     }

//     // append
//     append(value: number): void {
//         let node = new Nodee(value, null);
//         if (this.head == null) {
//             this.head = node;
//             this.tail = node;
//             this.size++;
//             return;
//         }

//         this.tail.next = node;
//         this.tail = this.tail.next;        
//     }

//     //  - Insert at first
//     insertFirst(value: number): void {
//         let node = new Nodee(value, null);

//         if (this.head == null) {
//             this.head = node;
//             this.tail = node;
//             this.size += 1;
//             return;
//         }
//         node.next = this.head;
//         this.head = node;
//         this.size += 1;
//     }

//     //  - Insert at end
//     insertLast (value: number): void {
//         let node = new Nodee(value, null);
//         if (this.tail == null) {
//             this.insertFirst(value);
//             return;
//         }

//         this.tail.next = node;
//         this.tail = node;
//         this.size++;
//     }

//     //  - Insert at index
//     insert (value: number, index: number): void {
//         if (index > this.size) {
//             console.log('Index out of range.');
//             return;
//         }
//         if (index == 0) {
//             this.insertFirst(value);
//             return;
//         }
//         if (index == this.size) {
//             this.insertLast(value);
//             return;
//         }

//         let temp = this.head;
//         for (let i = 1; i < index; i++) {
//             temp = temp.next;
//         }
//         let node = new Nodee(value, temp.next);
//         temp.next = node;
//         this.size++;
//     }

//     //  - delete at first
//     deleteFirst (): number | void {
//         if (this.head == null) {
//             this.tail = null;
//             console.log("List empty");
//             return;
//         }
//         let firstValue = this.head.value;
//         this.head = this.head.next;
//         this.size--;
//         return firstValue;
//     }

//     //  - delete at end
//     deleteLast(): number | void{
//         if (this.size <= 1) {
//             return this.deleteFirst();
//         }

//         let temp = this.head;
        
//         let lastValue = this.tail.value;
//         for (let i = 0; i < this.size - 2; i++) {
//             temp = temp.next;
//         }

//         this.tail = temp;
//         this.size--;
//         return lastValue;
//     }

//     //  - delete at index
//     delete(index: number): number | void {
//         if (index > this.size) {
//             console.log("Index out of range");
//             return;
//         }
//         if (index == 0) {
//             return this.deleteFirst();
//         }
//         if (index == this.size - 1) {
//             return this.deleteLast();
//         }

//         let prev = this.get(index - 1);
//         let valueAtIndex = prev.next.value // node to be removed.
//         prev.next = prev.next.next;

//         this.size--;
//         return valueAtIndex;

//     }

//     //  - get Node by index
//     get(index: number): Nodee | null {
//         let node = this.head;
//         for (let i = 0; i < index; i++) {
//             if (node == null) {
//                 return null;
//             }
//             node = node.next;
//         }
//         return node;    
//     }

//     //  - Find/Search by value
//     find(value: number): number {
//         let node = this.head;
//         let index = -1;
//         while (node != null) {
//             index++;
//             if (node.value == value) {
//                 console.log("Found: " + index);
//                 return index;
//             }
//             node = node.next;
//         }
//         console.log("Not Found: " + -1);
//         return -1;
//     }

//     //  - Update Node
//     update(value: number, index: number): void {
//         let node = this.get(index);
//         if (node == null) {
//             console.log("Index out of range");
//             return;
//         }
//         node.value = value;
//     }
    
//     //  - Reverse list

//     //  - get size/length
//     length(): number {
//         return this.size;
//     }   

// }