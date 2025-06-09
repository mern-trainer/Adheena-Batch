// variable -> container for storing data
// keywords -> reserved words
// identifiers -> names of variables, functions, etc.
// functions -> a block of code that can be called, set of instructions.
// loop -> repeating a block of code
// operators ->

// --, ++

let a = 10;
let d = 10;

const b = a++ // post increment
const c = ++d // pre increment

// console.log(b, c)

// let, const, var ->

// scope -> where the variable is accessible

// global scope -> accessible anywhere in the code
// function scope -> accessible only inside the function
// block scope -> accessible only inside the block
// Static typing -> Type of the variable is fixed. // int a -> compiler will check the type of the variable.
// Dynamic typing -> Type of the variable is not fixed. -> let a = 10 -> Run time -> compiler will not check the type of the variable.

// string -> Collection of characters

// "", '', ``


// string methods

// function func(a) {
    //     return "Hello World";
    // }
    
    // const ab = func(10) 
    
    // console.log(ab)
    
    const text = "Hello World World"; // position -> index
    
    // length -> returns the length of the string

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text[2]);
console.log(text.charAt(0))
console.log(text.indexOf("World")) // returns the index of the first occurrence of the string
console.log(text.lastIndexOf("World")) // returns the index of the last occurrence of the string
console.log(text.replace("Hello", "Hey"))
console.log(text.includes("World"))

console.log(text.slice(0, -2)) // hide mobile number

const mobile = 1234567890

// 12******90

const numberString = mobile.toString()
const first = numberString.slice(0, 2);
const last = numberString.slice(-2);
const hide = first + "******" + last;
console.log(hide)

// Array -> Collection of values / elements

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

// array methods

console.log(array.length)
console.log(array[2])
console.log(array.at(2))
console.log(array.indexOf(3, 5))
console.log(array.lastIndexOf(1))

// array[4] = 10

console.log(array.includes(6))

// push, pop, unshift, shift, splice

// array.push(11, 12, 23, 45)
// array.pop()
// array.unshift(-2, -1, 0)
// array.shift()

array.splice(1, 0, -2, -3, -4)

console.log(array)

// 

