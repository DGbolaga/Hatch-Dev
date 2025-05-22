// tsc --watch to run in complie mode in compilation
class Car {
    // name: string;
    // color: string;

    public name: string; // using access modifiers
    public color: string
    // readonly color: string; // readonly modifiers
    private engineOn: boolean = false;


    constructor (name: string, color: string) {
        this.name = name,
        this.color = color
    }

    protected startEngine () {
        this.engineOn = true;
        console.log(`${this.name} engine has started`)
    }
}

// inherit properties of Car into SpeedCar, inorder to expose the protected method.
// start
class SpeedCar extends Car {
    public boost() {
        return this.startEngine()
    }
}
const ferrari = new SpeedCar('Ferrari', 'Silver')
ferrari.boost()




const myCar = new Car("Toyota", 'black')
// const newCar = new Car('Audi', 90)
// const hisCar = new Car('Bugatti', 200)
console.log(myCar.color)
console.log(myCar)
// console.log(newCar)
// console.log(hisCar)


// class Person {
//     name: string;
//     height: number;
//     complexion: string;

//     constructor (name: string, height: number, complexion: string) {
//         this.name = name,
//         this.height = height,
//         this.complexion = complexion
//     }

//     sleep() {
//         console.log(`${this.name} is sleeping!`)
//     }
// }
// const firstPerson = new Person("Ade", 70, 'Dark')
// firstPerson.sleep()




// // This is an object in JS 
// const car = {
//     brand: "Benz",
//     color: "White",

//     move() {
//         console.log("Car is moving")
//     }
// }
// car.move()



// function sayHello(name:string): void {
//     console.log(`${name} says hello!`)
// }

// function Hello(name:string): string {
//     return `Good morning ${name}`
// }

// sayHello("James")
// console.log((Hello("Josh")))


class student {
    name: string;
    age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`
    }
}

// const firstStudent = new student('Grace', 20)
// const secondStudent = new student('Mercy', 21)
// const thirdStudent = new student("Jace", 19)

// firstStudent.greet()
// secondStudent.greet()
// thirdStudent.greet()

// or 

let students: [string, number][] = [['James', 29], ['John', 20], ['Janet', 29]]

for (const [index, [name, age]] of students.entries()) {
    const createStudent = new student(name, age)
    createStudent.greet()
}




class Animal {
    name: string;
    skintype: string;
    
    constructor(name: string, skintype: string) {
        this.name = name;
        this.skintype = skintype;
    }

    makeSound(): void {
        console.log(`${this.name} is making a sound`)
    }
}

const animal1 = new Animal('Dog', 'brown')
const animal2 = new Animal('Cat', 'White')
animal1.makeSound()
animal2.makeSound()



// Dog is inheriting form the Animal class.
// Dog contains the properties of Animal and its own.
// The 'super' and extend keyword are used to achieve this.
// Dog can now bark.
class Dog extends Animal {
    breed: string;

    constructor (name: string, skintype: string, breed: string) {
        super(name, skintype);
        this.breed = breed;
    }

    bark(): void {
        console.log(`${this.name} is barking. It's barking at its fellow ${this.breed}`)
    }

    makeSound(): void {
        console.log(`${this.name} is barking whoof!!!`)
    }
}


// Exercise: Create a bird class that inherit from the animal class with the ability to fly.
class Bird extends Animal {
    fly: boolean;
    constructor (name: string, skintype: string, fly: boolean) {
        super(name, skintype)
        this.fly = fly
    }

    canFly(): void {
        console.log(`${this.name} is flying. It is ${this.fly} that I can fly`)
    }
}


const bird1 = new Bird('Eagle', 'White', true)
const bird2 = new Bird('Turkey', 'black', false)
bird1.canFly()
bird2.canFly()



// const dog1 = new Dog('Dog Jack', 'brown', 'German Shepeard')
// dog1.makeSound()
// dog1.bark()




// Using a Static method. A static method is a method that is called only on the class
//  and not on the object
// start
class User {
    public name: string;
    public role: string;
    email: string;

    constructor (name: string, role: string, email: string) {
        this.role = role;
        this.name = name;
        this.email = email;
    }

    static createGuest(role: string): void {
        console.log(`${this.name} is a ${role} User `);
    }

    static validateEmail(email: string) {
        if (email.includes("@")) {
            console.log("This is a valid emal.")
        }
        else {
            console.log("Error invalid Email...")
        }
        
    }

    
}


const John = new User("John", "Guest", "johndoe@gmail.com")
const Jack = new User("Jack", "Guest", "jackdoey.gmail.com")
// using the static method

// User.validateEmail(John.email)
User.validateEmail(Jack.email)



