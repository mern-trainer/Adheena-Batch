// closure, recursion, hoisting

// closure -> a function that is returned from another function
//            and is able to access the variables of the outer function.

const outerFunc = () => {
    let data = 0;
    const innerFunc = () => {
        data++
        return data
    }
    return innerFunc
}

const func = outerFunc()

// console.log(func())
// console.log(func())
// console.log(func())
// console.log(func())
// console.log(func())
// console.log(func())
// console.log(func())
// console.log(func())
// console.log(func())
// console.log(func())
// console.log(func())
// console.log(func())
// console.log(func())

// recursion -> a function that calls itself, with in the function body
//              and it must have a condition to stop calling itself
//              otherwise it will call itself indefinitely
//              and it will result in a stack overflow error

let i = 0;

const counter = () => {
    if (i == 3) {
        return "Hello";
    }
    console.log(i)
    i++
    return counter()
}

const res = counter()

console.log(res)

// counter() -> return "Hello" -> i = 0
// counter() -> return "Hello" -> i = 1
// counter() -> return "Hello" -> i = 2
// counter() -> return "Hello" -> i = 3
// counter() -> return "Hello"

// sum of numbers

const sum = (n) => {
    if (n == 0) {
        return 0;
    }
    return n + sum(n - 1);
}

console.log(sum(100))

// sum(4) -> return 4 + sum(3)
// sum(3) -> return 3 + sum(2)
// sum(2) -> return 2 + sum(1)
// sum(1) -> return 1 + sum(0)
// sum(0) -> return 0

// hoisting -> JS moves all the function declarations to the top of the file
//             and all the variable declarations are also moved to the top of the file
//             but not the variable initializations. only for var

// working -> 2 phases -> Memory allocation, Code execution
//             1. Memory allocation -> JS allocates memory for the variables
//             2. Code execution -> JS executes the code line by line

console.log(a)

var a;