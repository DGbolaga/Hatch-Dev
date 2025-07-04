//Circular Linkedlist
public class CLL {
    private Node head;
    private Node tail;
    private int size;

    public CLL() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    //insert value (at end);
    public void insert(int value) {
        Node node = new Node(value);

        if (head == null) {
            head = node;
            tail = node;
            return;
        }

        node.next = head;
        tail.next = node;
        tail = node;
        size++;
    }

    //delete value;
    public void delete(int value) {
      Node node = head;

      //empty list
      if (node == null) {
          return;
      }

      //current node is value
      if (node.value == value) {
          head = head.next;
          tail.next = head;
          return;
      }

      do {
          Node n = node.next;
          if (n.value == value) {
              node.next = n.next;
              break;
          }
          node = node.next;
      } while (node != head);

    }

    //display value;
    public void display() {
        Node temp = head;
        if (head != null) {
            //display at least the head if only head.
            do {
                System.out.print(temp.value + " -> ");
                temp = temp.next;
            } while(temp != head);
            System.out.println("HEAD (" + temp.value + ")"  );
        }
    }

    //node class.
    private class Node {
        int value;
        Node next;

        public Node(int value) {
            this.value = value;
        }
    }

}
