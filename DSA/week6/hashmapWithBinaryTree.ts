
//using numbers as the values for binary search tree in collisions.
//hashmap doesn't allow for duplicate
class BTNode<k, v> {
    key: k;
    value: v;
    left: BTNode<k, v> | null;
    right: BTNode<k, v> | null;

    constructor(key: k, value: v, left: BTNode<k, v>  | null = null, right: BTNode<k, v>  | null = null) {
        this.key = key;
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class HashMapWithBT<k, v> {  
    size: number;
    private bucket: (BTNode<k, v>  | null)[];

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
    
    // insertNode(node: BTNode<k, v>, newNode: BTNode<k, v>): BTNode | null {
    //     if (node === null) return newNode;
    //     if (node.value === newNode.value) return node
    //     if (node.value < newNode.value) {
    //         node.right = this.insertNode(node.right, newNode)
    //     }
    // }


    //insert
    // insert(key: k, value: v): void {
    //     let index = this.hash(key)
    //     const newNode = new BTNode<k, v> (key, value)

    //     //if empty, insert.
    //     if (this.bucket[index] === null) {
    //         this.bucket[index] = newNode;
    //         return;
    //     }

    //     let temp: BTNode<k, v>  | null = this.bucket[index]
        
    //     if (value < temp.value) {
    //         while(temp)
    //     }
    // }
}