import { DLL } from './ddl';
import { Stack } from './stack';
import { stackNode, stackLL } from './stackWithSLL';
import { queueLL } from './queueWithSLL';

// DOUBLYLINKEDLIST
// const DoublyLinkedList = new DLL();
// //APPEND
// DoublyLinkedList.append(3);
// DoublyLinkedList.append(4);
// DoublyLinkedList.append(5);
// DoublyLinkedList.append(6);
// DoublyLinkedList.append(7);
// //PREPEND
// DoublyLinkedList.prepend(90);
// DoublyLinkedList.prepend(80);
// DoublyLinkedList.prepend(70);
// DoublyLinkedList.prepend(60);
// DoublyLinkedList.prepend(50);
// DoublyLinkedList.display();

// STACK WITH ARRAY
// const stack = new Stack();
// //PUSH
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// stack.push(6)
// stack.push(7)
// stack.display();
// stack.peek();


// STACK WITH LINKED-LIST
// const stack = new stackLL<number>();
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// stack.push(6)
// stack.push(7)

// let x = stack.pop(); // expecting 7
// if (x != null) {
//     console.log("popped value: " + x.showVal())
// }

// stack.display();


//QUEUE WITH LINKED-LIST
const queue = new queueLL<number>();
queue.enque(1)
queue.enque(2)
queue.enque(3)
queue.enque(4)
queue.enque(5)
queue.enque(6)
queue.enque(7)
queue.enque(8)
queue.enque(9)
console.log(queue.deque())
//DISPLAY 
queue.display()

// console.log(queue)

