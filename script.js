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
    
    const text = "Hello World"; // position -> index
    
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

console.log(text.split(" "))

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

console.log(array.join(" "))

// array.reverse()
// console.log(array)

// hide email -> samplemail@gmail.com
// samp***@gmail.com

const email = "sample-email@gmail.com"

const arr = email.split("@")

const slicedName = arr[0].slice(0, 4)
const domain = arr[1]

const hiddenEmail = slicedName + "****" + "@" + domain

console.log(hiddenEmail);

// Object -> collection of key value pairs

const user = {
    name: "John Doe",
    age: 20,
    email: "email@gmail.com",
    address: {
        city: "Delhi",
        state: "Delhi",
        country: "India",
        pincode: 110001
    },
    education: {
        degree: "B.Tech",
        college: "XYZ",
        year: 2020
    },
    skills: ["HTML", "CSS", "JS"],
    isMarried: true
}

const key = "email"
user.address.city = "sldjflsd"
user[key] = 21
// user.sample_field = {
//     hey: "asdfsdf"
// }

console.log(user)

// sync vs async
// sync -> blocking code -> line by line execution
// async -> non-blocking code -> parallel execution

// callback, map, filter, reduce

// callback function -> function passed as an argument to another function.

// function sum(a, b) {
//     return a + b
// }

// console.log(sum(10, 20))

// arrow function -> shorthand of funcitons

// const arrowFunc = () => console.log("arrow function")

// arrowFunc()

const sum = (a, b) => a + b;

console.log(sum(20, 50));

// callback function

const displayResult = (value) => {
    console.log("Result is " + value)
}

const sumOfTwoNumbers = (first, second, callback) => {
    const res = first + second
    callback(res)
}

sumOfTwoNumbers(100, 200, displayResult)

// -----------------------------------------------------------------------------

// array methods

// map, filter,



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const loop = (callback) => {
    for (let i = 0; i < 10; i++){
        callback(i, i*2, i*10)
    }
}

loop((value, value2, value3) => {
    // console.log(value, value2, value3)
})

// map -> array manipulation -> returns a new array

const newNums = nums.map((element) => {
    if (element % 2 == 0) {
        return element * 10
    }
    return element
})

console.log(newNums)

// filter -> to filter array -> based on a condn

const filteredNums = nums.filter((element) => element % 2 == 0)

console.log(filteredNums)

// reduce -> returns a single value

const s = nums.reduce((previousValue, element) => {
    return previousValue * element
}, 1)

console.log(s)

// let ss = 0

// for (let j = 0; j < nums.length; j++){
//     ss += nums[j]
// }

// console.log(ss)
