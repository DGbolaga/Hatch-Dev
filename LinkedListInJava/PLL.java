//Music Playlist (Hatch-Dev Assignment)

import java.util.ArrayList;
import java.util.Random;

public class PLL {
    //properties
    Node head;
    Node tail;
    Node curr;
    int size;
    //constructor
    public PLL() {
        this.head = null;
        this.tail = null;
        this.curr = null;
        this.size = 0;
    }

    //Node class
    public class Node {
        String value;
        Node prev;
        Node next;

        public Node(String value) {
            this.value = value;
        }
        public Node(String value, Node prev, Node next) {
            this.value = value;
            this.prev = prev;
            this.next = next;
        }
    }

    //Insert
    public void insertSong(String value) {
        Node node = new Node(value);
        if (head == null) {
            head = node;
            tail = node;
            size++;
            return;
        }

        node.prev = tail;
        tail.next = node;
        tail = node;
        size++;
    }

    //deleteFirst
    public void deleteFirst() {
        String firstSong = head.value;
        if (head.next == null) {
            head = null;
            tail = null;
            size--;
            System.out.println("Removed: " + firstSong);
            return;
        }
        head = head.next;
        head.prev = null;
        size--;
        System.out.println("Removed: " + firstSong);
        return;
    }

    //deleteLast
    public void deleteLast() {
        String lastSong = tail.value;
        if (tail.prev == null) {
            tail = null;
            head = null;
            size--;
            System.out.println("Removed: " + lastSong);
            return;
        }

        tail = tail.prev;
        tail.next = null;
        size--;
        System.out.println("Removed: " + lastSong);
        return ;
    }

    //delete by value
    public void deleteSong(String value) {
        Node song = get(value);
        if (song == head) {
            deleteFirst();
            return;
        }
        if (song == tail) {
            deleteLast();
            return;
        }
        if (song == null) {
            System.out.println("Not in playlist");
            return;
        }

        Node prev = song.prev;
        prev.next = song.next;
        prev.next.prev = song.prev;
        size--;
        System.out.println("Removed: " + song.value);
    }

    //play all songs (display) ⬇️⬆️↕️
    public void playAll() {
        Node temp = head;
        System.out.println("Playing " + size + " songs: ");
        while (temp != null) {
            System.out.println(temp.value);
            System.out.println("     ⬇\uFE0F");
            temp = temp.next;
        }
        System.out.print("End");
    }

    //show all songs (display as list)
    public void show() {
        Node temp = head;
        System.out.println("Playlist shows (" + size + ") songs: ");
        while (temp != null) {
            System.out.println("    " + temp.value);
            temp = temp.next;
        }
        System.out.println("End");
    }



    //Get song (by value)
    public Node get(String value) {
        Node node = head;
        while (node != null) {
            if (node.value == value) {
                return node;
            }
            node = node.next;
        }
        return  null;
    }

    //find song (by value)
    public void find(String value) {
        Node song = get(value);
        if (song != null) {
            System.out.println(song.value + " Found");
            return;
        }
        System.out.println("Not Found");
    }

    //reverse (play in reverse) ⬇️⬆️↕️
    public void playRevAll() {
        Node temp = tail;
        System.out.println("Playing " + size + " songs: ");
        while (temp != null) {
            System.out.println(temp.value);
            System.out.println("     ⬇\uFE0F");
            temp = temp.prev;
        }
        System.out.print("End");
    }

    //play (one by one)
    public void play() {
        curr = head;
        System.out.println("Playing");
        System.out.println(" - " + curr.value);
    }

    //play next
    public void playNext() {
        if (curr == tail) {
            //play first
            curr = head;
            System.out.println("Playing (R)");
            System.out.println(" - " + curr.value);
            return;
        }
        curr = curr.next;
        System.out.println("Playing");
        System.out.println(" - " + curr.value);
    }

    //play prev
    public void playPrev() {
        if (curr == head) {
            //play last
            curr = tail;
            System.out.println("Playing (end):");
            System.out.println(" - " + curr.value);
            return;
        }
        curr = curr.prev;
        System.out.println("Playing :");
        System.out.println(" - " + curr.value);
    }

    //shuffle (display in random order)
    public void shuffle() {
        // convert linkedlist to an array of nodes (containing value and pointers)
        ArrayList<Node> arr = new ArrayList<>();
        while (head!=null) {
            arr.add(head);
            head = head.next;
        }

        //shuffle
        Random rand = new Random();
        for(int i = arr.size(); i > 0; i--) {
            int j = rand.nextInt(i + 1);

            //swap elements at i and j
            Node temp = arr.get(i);
            arr.set(i, arr.get(j));
            arr.set(j, temp);
        }

        //convert back to linkedlist
        head = arr.get(0); // first element is the head;
        Node current = head; // pointer to rebuild the linkedlist
        for (Node x: arr) {
            current.next = x;
            current = current.next;
        }
        current.next = null;

    }
}
