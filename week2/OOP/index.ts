let firstName:string = "Micheal John"
let SecondName:string | number = "Micheal Josh" // This is a Union type i.e allowing a value to 
// accept more than one type


SecondName = 90
// firstName = 90; // produces error



let ingredients: string[] = ["Pepper", "Maggi", "Egg"]
let differntarray: (string | number)[] = ["James", "John", 0, 398, "Something"]

ingredients.push("Adenuga")
differntarray.push(9)


// Way define data types in TypeScript.
// Following best practices, 
// the conventional way of defining the data type is using I + the object e.g I + Car
interface ICar {
    color: string,
    brandName: string
}

const car: ICar = {
    color: "blue",
    // brandName: "Toyota" (This produces error if brandName is not included)
    brandName: "Toyota"
}



// To make a property optional, you use the "?:" instead of the ":"
interface IFruits {
    name: string;
    color: string;
    edible?: string;
}

const fruit: IFruits = {
    name: "Apple",
    color: "Green",
    edible: 'Yes'
}

// Creating a Class
class Car {
    color: string;
    brandName: string;
    name: string;
        

    // constructor funcion is similar to def __init__ in python.
    constructor (name : string, color : string, brandName : string) {
        this.color = color,
        this.brandName = brandName,
        this.name = name
    }
}

const bmw = new Car ("BMW", "Red", "2047E")
const Toyota = new Car ("Toyota", "White", "Camry")

console.log(bmw)
console.log(Toyota)
