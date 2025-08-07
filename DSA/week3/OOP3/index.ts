// class GLE {
//     engine: Engine;
//     doors: Door[];
//     seats: Seat[]

// }
// const gle = new GLE();
// gle.engine.model

// class Engine {
//     model: string
// }

// class Door {

// }

// class Seat {

// }

class Lib {
  books: string[];
  availableBooks: string[];

  constructor(books: string[]) {
    this.books = books;
    this.availableBooks = [...books];
  }

  borrow(name: string): string {
    if (this.availableBooks.includes(name)) {
      const idx = this.availableBooks.indexOf(name);
      this.availableBooks.splice(idx, 1);
      return name;
    }

    // console.log("SOrry not avaialable");
    return "";
  }
}

const bookz = ["A", "B", "C"];
const library = new Lib(bookz);

library.borrow("A");
library.borrow("A");

// console.log(library);
// console.log(bookz);

class User {
  borrow() {
    console.log("borrrows books and returns.");
  }
}

class Book {
  name: string;
  noInStock: number;

  constructor(name: string, noInStock: number) {
    this.name = name;
    this.noInStock = noInStock;
  }
}

class Member {
  name: string;
  borrowedBooks: Book[] = [];

  constructor(name: string) {
    this.name = name;
  }

  borrowBook(book: Book) {
    if (!this.borrowedBooks.includes(book)) {
      if (book.noInStock > 0) {
        this.borrowedBooks.push(book);
        book.noInStock--;
        console.log(`${this.name} borrowed ${book.name}. Quantiy: ${book.noInStock}`)
      }
      else{
        console.log(`This book "${book.name}" is out of stock`);
      }
    }
  }

  returnBook(book: Book) {
    const existingBook = this.borrowedBooks.find(x => x.name === book.name)
    if (!existingBook){
        console.log("This isn`t the book you borrowed")
    }
    else{
        book.noInStock++;
        console.log(`${this.name} has successfully return the book: ${existingBook.name}\nQuantity: ${book.noInStock}`)
    }
  }
}

class Libz {
  books: Book[] = [];

  addBook(book: Book) {
    this.books.push(book);
  }

  showAvailableBooks() {
    // this.books.forEach((book) => {
    //   if (book.isAvailable) {
    //     console.log(book);
    //   }
    // });
  }
}

const book1 = new Book("To Kill a Mockingbird", 5);
const book2 = new Book("1984", 9);
const book3 = new Book("The Great Gatsby", 6);
const book4 = new Book("Moby Dick", 10);

const lib2 = new Libz();
lib2.addBook(book1);
lib2.addBook(book2);
// lib2.showAvailableBooks()

const dayo = new Member("Dayo");
dayo.borrowBook(book1);

const jane = new Member("Jane");
jane.borrowBook(book1);
jane.returnBook(book1);
dayo.returnBook(book1);

// console.log(dayo.borrowedBooks);











// Implementation of aggreagation.
class Engine{
    start() {
        console.log("Engine Started.")
    }
}

class Carz{
    engine: Engine;

    constructor(engine: Engine)  {
        this.engine = engine;
    }

    startCar() {
        console.log("Car Started");
        this.engine.start();
    }
}

const engine = new Engine();
const car = new Carz(engine);

engine.start()
car.startCar()



// Implementation of composition approach.

class Heart {
    beat() {
        console.log("Heart is beating")
    }
}

class Human {
    heart: Heart;

    constructor(heart: Heart) {
        this.heart = new Heart();
    }

    live()  {
        console.log("I am live");
        this.heart.beat();
    }
}

// Implementation of Abstract classes.
// You can only interact with an abstract class by extending it's properties to a sub class. e.g Dog
abstract class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    // way to implement abstract method.
    // For a method to be abstract, you can't perform the full implementation of the method inside the abstract class. It must be completed inside

    
    abstract makeSound(): void;

    move() {
        console.log(`${this.name} is moving.`)
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Dog is making a sound: WHOOF!")
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Cat is making a sound: MEOW!")
    }
}

const bingo = new Dog("Bingo");
const chim = new Cat("Chim");
bingo.move()
bingo.makeSound()
chim.makeSound()

