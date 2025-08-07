//Doubly LinkedList
public class DLL {
    //properties
    private Node head;
    private int size;

    //constructor
    public DLL() {
        int size = 0;
    }

    //insert at first
    public void insertFirst(int value) {
        Node node = new Node(value);
        node.next = head;
        node.prev = null;
        //catch null pointer
        if (head != null) {
            head.prev = node;
        }
        head = node;

        size++;
    }
    //insert at last
    public void insertLast(int value) {
        Node node = new Node(value);
        Node temp = head;
        node.next = null;

        //if list empty
        if (head == null) {
            node.prev = null;
            head = node;
            size++;
            return;
        }

        while (temp.next != null) {
            temp = temp.next;
        }

        node.prev = temp;
        temp.next = node;
        size++;
    }

    //insert at index
    public void insert(int value, int index) {
        if (index > size) {
            System.err.println("Index out of range");
            return;
        }
        if (index == 0) {
            insertFirst(value);
            return;
        }
        if (index == size) {
            insertLast(value);
            return;
        }


        Node temp = head;
        for (int i = 1; i < index; i++) {
            temp = temp.next;
        }

        Node node = new Node(value, temp, temp.next);
        temp.next.prev = node;
        temp.next = node;
        size++;
    }

    //delete at first
    public int deleteFirst() {
        int firstValue = head.value;
        if (head.next == null) {
            head = null;
            size--;
            return firstValue;
        }

        head = head.next;
        head.prev = null;
        size--;
        return firstValue;
    }

    //delete at last
    public int deleteLast() {
        if (size <= 1) {
            return deleteFirst();
        }

        Node secondLast = get(size - 1);
        int lastValue = secondLast.next.value;
        secondLast.next.prev = null;
        secondLast.next = null;
        size--;
        return lastValue;
    }

    //delete at index
    public int delete(int index) {
        if (index > size) {
            System.out.println("Index out of range");
            return -1; // risky cause there could be -1 as value in list;
        }
        if (index == 0) {
            return deleteFirst();
        }
        if (index == size - 1) {
            return deleteLast();
        }

        Node prevNode = get(index-1);
        int valueAtIndex = prevNode.next.value;
        prevNode.next = prevNode.next.next;
        prevNode.next.prev = prevNode;
        size--;
        return valueAtIndex;
    }


    //get Node (by index)
    public Node get(int index) {
        Node node = head;
        for (int i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }

    //find Node by value (using recursion) return index
    //helper function:
    public int find(int value) {
        return find(value, this.head, 0);
    }

    public int find(int value, Node node, int index) {
        if (index >= size) {
            return -1;
        }
        if (node.value == value) {
            return index;
        }

        return find(value, node.next, index + 1);
    }

    //display Nodes
    public void display() {
        Node temp = head;
        Node last = null;
        while (temp != null) {
            System.out.print( temp.value + " <-> ");
            last = temp;
            temp = temp.next;
        }
        System.out.println("End, size = " + size );

//        System.out.println("print in reverse");

//        while (last != null) {
//            System.out.print( last.value + " <-> ");
//            last = last.prev;
//        }
//        System.out.println("Start, size = " + size );
    }


    //Node class
    private class Node {
        int value;
        Node prev;
        Node next;

        public Node (int value) {
            this.value = value;
        }
        public Node (int value, Node prev, Node next) {
            this.value = value;
            this.prev = prev;
            this.next = next;
        }
    }
}
