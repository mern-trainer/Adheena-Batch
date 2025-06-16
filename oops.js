// oops -> Object Oriented Programming System

// class -> Template or blueprint of an object.
// object -> Instance of a class.

// Camel Case -> firstNameOfUser
// Pascal Case -> FirstNameOfUser
// Snake case -> first_name_of_user

// properties -> Variables
// methods -> Functions
// constructor function -> Special function that runs automatically when an object is created.
// this keyword -> refers to the current object. -> global object.

// class Student {
//     // constructor function
//     constructor(name, age, gender) {
//         this.name = name
//         this.age = age
//         this.gender = gender
//     }

//     displayName() {
//         return this.name + " " + this.age + " " + this.gender
//     }
// }

// const st1 = new Student("Elsa", 20, "Female") // memory allocation
// const st2 = new Student("Hrithik", 22, "Male")
// const st3 = new Student("Adheena", 23, "Female")

// console.log(st1.displayName())
// console.log(st2.displayName())
// console.log(st3.displayName())

// 4 pillers of OOPs.

// Abstraction. -> hiding the implementation details.
// Encapsulation. -> wrapping up of data and functions into a single unit.
// Inheritance. -> The ability of a class to inherit properties and methods from another class.
// Polymorphism. -> The ability of an object to take on many forms.
    // overloading -> same function name but different number of parameters.
    // overriding -> same function name and same number of parameters.
    
class Person{
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    displayName() {
        return this.name
    }

    add(a, b) {
        return a + b
    }

    calc(a, b) {
        return a + b
    }
}

class Student extends Person{
    displayName() {
        return "display Name Called"
    }

    add(a, b) {
        const res = super.add(a, b)
        console.log(res)
        return a * b
    }

    calc(a, b, c) {
        console.log(super.calc(a, b))
        return a + b + c
    }
}

const inst = new Student("Amal", 20)

console.log(inst.displayName())

console.log(inst.add(10, 20))

console.log(inst.calc(10,30))
