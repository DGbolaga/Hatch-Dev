//Testing class of singlylinkedlist without size
public class LLT {
    Node head;

    //add at first
    public void addFirst(int val) {
        Node node = new Node (val);

        if (head == null) {
            head = node;
            return;
        }

        node.next = head;
        head = node;
    }

    //delete element at postion n
    public void delete(int n) {
        Node prev = head;
        int currentIndex = 1;
        if (prev.next == null) {
            head = null;
            return;
        }
        // e.g (2) 5 - 4 - 7 - End
        while(currentIndex != n-1) {
            prev = prev.next;
            currentIndex++;
        }

        Node deleteNode  = prev.next;
        prev.next = deleteNode.next;
    }

    //display node
    public void display() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.val + " -> ");
            temp = temp.next;
        }
        System.out.println("End");
    }

    public class Node{
        int val;
        Node next;

        private Node(int val) {
            this.val = val;
        }
        private Node(int val, Node next) {
            this.val = val;
            this.next = next;
        }
    }
}
