class LNode<k, v>  {
    key: k;
    value: v;
    next: LNode<k, v> | null;

    constructor(key: k, value: v, next: LNode<k, v>  | null = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}


class HashMap<k, v> {  
    size: number;
    private bucket: (LNode<k, v>  | null)[];

    constructor(size: number = 20) {
        this.size = size;
        this.bucket = new Array(size).fill(null);
    }

    //methods
    //hashfunction
    private hash(key: k | string): number {
        //returns index
        key = String(key)
        let index = 0;
        for (let i = 0; i < key.length; i++) {
            const charCode = key.charCodeAt(i);
            index+= (i + 1) * (charCode ** 3)
        }
        return index % this.size
    }
    
    //insert or update key-value pair
    insert(key: k, value: v): void {
        let index = this.hash(key)
        const newNode = new LNode<k, v> (key, value)

        //if empty, insert.
        if (this.bucket[index] === null) {
            this.bucket[index] = newNode;
            return;
        }

        let temp: LNode<k, v>  | null = this.bucket[index]
        while (temp !== null ) {
            //if found, update
            if (temp.key === key) {
                temp.value = value
                return;
            }

            //if not found, insert at end.
            if (temp.next === null) {
                temp.next = newNode;
                return;
            }

            temp = temp.next;
        }

    }

    //delete key-value pair by key
    deletePair(key: k): boolean {
        //return true if deleted and false otherwise.
        let index = this.hash(key)
        let current = this.bucket[index]
        let prev: LNode<k, v>  | null = null

        while (current != null) {
            if (current.key === key) {
                if (prev === null) {
                    this.bucket[index] = current.next;
                }
                else {
                    prev.next = current.next;
                }
                return true
            }
            prev = current
            current = current.next
        }
        return false
    }

    //retrieve/get value by key
    get(key: k): v | null {
        //return value if found and null otherwise
        let index = this.hash(key);
        let temp = this.bucket[index]
        while (temp != null) {
            if (temp.key === key) {
                console.log(`${temp.key}: ${temp.value}`) 
                return temp.value
            }
            temp = temp.next
        }
        return null
    }

    //set value by key
    set(key: k, val: v): void {
        let index = this.hash(key);
        let temp = this.bucket[index]
        while(temp != null) {
            if (temp === key) {
                temp.value = val
                return;
            }

            if (temp.next == null) {
                let newNode = new LNode(key, val)
                temp.next = newNode
                return;
            }
            temp = temp.next
        }
    }


    //display all contents in hash map 
    display(): void {
        //print all contents
        for (let i = 0; i < this.size; i++) {
            let current = this.bucket[i]
            let buckets =  `Bucket[${i}]:`

            while (current != null) {
                buckets += ` -> [${current.key}: ${current.value}]`
                current = current.next
            }   
            console.log(buckets)
        }
    }

    //contains key.
    containsKey(key: string): boolean {
        //return true/false
        let index = this.hash(key)
        let temp = this.bucket[index]
        while (temp != null) {
            if (temp.key === key) return true;
            temp = temp.next;
        }
        return false
    }

}

let myHashMap = new HashMap(10)
// Insert key-value pairs
myHashMap.insert("apple", "fruit");
myHashMap.insert("carrot", "vegetable");
myHashMap.insert("banana", "fruit");
myHashMap.insert("carrot", "root vegetable"); // Should update "carrot"
myHashMap.insert("cabbage", "vegetable");
myHashMap.insert("guava", 'fruit');
myHashMap.insert("pear", 'fruit');
myHashMap.insert("potato", 'root');
myHashMap.insert("watermelon", 'fruit')

// Display all contents
// myHashMap.display();


// Delete a key
console.log("Deleting 'banana':", myHashMap.deletePair("banana")); // true
console.log("Deleting 'pear':", myHashMap.deletePair("pear"));     // false (not found)

// Display after deletion
myHashMap.display();
console.log(`Get guava: ${myHashMap.get('guava')}`)














