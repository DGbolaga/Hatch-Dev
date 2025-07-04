//Singly LinkedList

import java.sql.Array;
import java.util.ArrayList;

public class LL {
    //LL property
    private Node head;
    private Node tail;
    private int size;

    //LL constructor
    public LL() {
        int size = 0;
    }

    //Insert at first
    public void insertFirst(int value) {
        //create new node.
        //point (next) new node to head
        //set head to new node.

        Node node = new Node(value);
        node.next = head;
        head = node;

        //catch if list empty
        if (tail == null) {
            tail = head;
        }
        size++;
    }

    //Insert at end
    public void insertLast(int value) {
        Node node = new Node(value);
        if (tail == null) {
            insertFirst(value);
            return;
        }
        tail.next = node;
        tail = node;
        size++;
    }

    //Insert at index
    public void insert(int value, int index) {
        if (index > size) {
            System.err.println("Index out of range");
            return;
        }
        if (index == size) {
            insertLast(value);
            return;
        }
        if (index == 0) {
            insertFirst(value);
            return;
        }

        Node temp = head;
        for (int i = 1; i < index; i++) {
            temp = temp.next;
        }
        Node node = new Node(value, temp.next);
        temp.next = node;
        size++;
    }

    //delete first
    public int deleteFirst() {
        int firstValue = head.value;
        head = head.next;
        if (head == null) {
            tail = null;
        }
        size--;
        return firstValue;
    }

    //delete last
    public int deleteLast() {
        if (size <= 1) {
            return deleteFirst();
        }
        int lastValue = tail.value;
        Node secondLast = get(size - 2);
        secondLast.next = null;
        tail = secondLast;
        size--;
        return lastValue;
    }

    //delete at index
    public int delete(int index) {
        if (index == 0) {
            return deleteFirst();
        }
        if (index == size - 1) {
            return deleteLast();
        }

        Node prev = get(index - 1);
        int valueAtIndex = prev.next.value;
        prev.next = prev.next.next;

        size--;
        return valueAtIndex;

    }

    //delete by value
    public void deleteVal(int value) {
        Node valueToDelete = find(value);
        if (valueToDelete == null) {
            System.out.println("Value not in list");
            return;
        }

        Node temp = head;
        while (temp.next != valueToDelete) {
            temp = temp.next;
        }
        temp.next = valueToDelete.next;
        System.out.println("Value: " + value + " deleted");
        size--;
    }

    //delete all duplicates of a value
    public void deleteDuplicate(int value) {
        // get the index of all duplicates values.
        ArrayList arr = new ArrayList();
        int index = 0;
        Node temp = head;
        while (temp != null) {
            if (temp.value == value) {
                arr.add(index);
            }
            temp = temp.next;
            index++;
        }

        temp = head;
        Node curr = head;
        index = 0;
        while (temp != null) {
            if (arr.size() != 0 && index == (int) arr.removeFirst()) {
                curr.next = temp.next;
                size--;
            }
            index++;
            temp = temp.next;
        }


        System.out.println(arr);
    }

    //get Node by index
    public Node get(int index) {
        Node node = head;
        for (int i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }

    //find Node by value
    public Node find(int value) {
        Node node = head;
        while (node != null) {
            if (node.value == value) {
                return node;
            }
            node = node.next;
        }
        return null; // not found;
    }

    //display node
    public void display() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.value + " -> ");
            temp = temp.next;
        }
        System.out.println("End | Size = " + size);
    }

    //display using recursion.
    public void recDisplay() { // recursion helper
        recDisplay(this.head);
    }

    public void recDisplay(Node node) { // takes in node pointing to head.
        //base
        if (node == tail) {
            System.out.println(tail.value);
            return;
        }
        //recursive call
        System.out.print(node.value + " -> ");
        recDisplay(node.next);
    }

    //reverse linkedlist   using recursion
    public void reverseRec() {
        reverseRec(this.head);
    }

    public void reverseRec(Node node) {
        if (node == tail) {
            head = tail;
            return;
        }

        reverseRec(node.next); //recursively reach tail
        tail.next = node; // set end node's next to previous node
        tail = node; // set tail to prev
        tail.next = null; // remove forward pointer (set to null);
    }

    //reverse linkedlist using iteration
    public void reverse() {
        if (head == null || head.next == null) {
            return;
        }

        Node prev = null;
        Node present = head;
        Node next = present.next;
        while(present != null) {
            present.next = prev;
            prev = present;
            present = next;
            if (next != null) {
                next = next.next;
            }
        }
        head = prev;
    }


    //Node class
    public class Node {
        int value;
        Node next;

        //constructor with no next
        public Node(int value) {
            this.value = value;
        }

        //constuctor with next;
        public Node(int value, Node next) {
            this.value = value;
            this.next = next;
        }
    }

}
