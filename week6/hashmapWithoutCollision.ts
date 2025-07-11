class hashmapWithoutCollision<V> {
    capacity: number;
    bucket: ([string, V] | null)[];

    constructor(capacity: number = 10) {
        this.capacity = capacity;
        this.bucket = Array.from({ length: this.capacity }, () => null);
    }

    private hash(key: string): number {
        key = String(key);
        let index = 0;
        for (let i = 0; i < key.length; i++) {
            const charCode = key.charCodeAt(i);
            index += (i + 1) * (charCode ** 3);
        }
        return index % this.capacity;
    }

    display(): void {
        for (let i = 0; i < this.capacity; i++) {
            if (this.bucket[i] === null) console.log(`${i}:`);
            else console.log(`${i}: -> [${this.bucket[i]![0]}, ${this.bucket[i]![1]}]`);
        }
    }

    insert(key: string, value: V): void {
        let index = this.hash(key);
        let start = index;
        do {
            if (this.bucket[index] === null) {
                this.bucket[index] = [key, value];
                return;
            } else if (this.bucket[index][0] === key) {
                this.bucket[index][1] = value;
                return;
            }
            index = (index + 1) % this.capacity;
        } while (index !== start);

        console.log('Hashmap is full');
    }

    delete(key: string): void {
        let index = this.hash(key);
        let start = index;
        do {
            if (this.bucket[index] !== null && this.bucket[index]![0] === key) {
                this.bucket[index] = null;
                return;
            }
            index = (index + 1) % this.capacity;
        } while (index !== start);
    }

    containsKey(key: string): boolean {
        let index = this.hash(key);
        let start = index;
        do {
            if (this.bucket[index] !== null && this.bucket[index]![0] === key) {
                return true;
            }
            index = (index + 1) % this.capacity;
        } while (index !== start);
        return false;
    }
}




let map = new hashmapWithoutCollision<number>();
map.insert('a', 1);
map.insert('b', 2);
map.insert('c', 3);
map.insert('d', 4);
map.insert('e', 5);
map.insert('f', 6);
map.insert('g', 7);
map.insert('h', 20);
map.insert('i', 32);
map.insert('k', 28);
map.insert('m', 228);
map.display()