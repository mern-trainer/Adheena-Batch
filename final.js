// closure, curring, recursion

// curring -> multiple parameters into single parameter.

// const volume = (l, b, h) => {
//     return l * b * h
// }

// volume(10, 20, 30);

const volume = (l) => {
    console.log(l);
    return (b) => {
        const area = l * b
        console.log(area);
        return (h) => {
            return l * b * h
        }
    }
}

// const res = volume(10)
// const res2 = res(20)
// const finalRes = res2(30)
// console.log(finalRes);

const res = volume(10)(20)(30)

console.log(res);

// Recursion -> function calling itself.

let i = 0;

const rec = () => {
    if (i == 5) {
        return;
    }
    i++
    console.log(i);
    
    rec()
}

rec()

// Stack -> LIFO / FILO

// sum

const sum = (n) => {
    if (n == 0) return 0;
    return sum(n - 1) + n;
}

console.log(sum(100));


// sum(4) -> return sum(3) + 4 -> 1
// sum(3) -> return sum(2) + 3 -> 2
// sum(2) -> return sum(1) + 2 -> 3
// sum(1) -> return sum(0) + 1 -> 4
// sum(0) -> return 0  -> 5

// hoisting -> javascript moves all the function, variable declarations to the top of the file.

// 2 phase -> memory allocation, code execution.

console.log(a);

var a;

// closure -> closure is a function having access to the parent scope, even after the parent function has closed.

const counter = () => { // parent
    let value = 0;
    const increment = () => { // child
        value++
        return value
    }
    const decrement = () => {
        value--
        return value
    }
    return { increment, decrement };
}

const func = counter()

console.log(func.increment());
console.log(func.increment());
console.log(func.increment());
console.log(func.decrement());
console.log(func.decrement());
console.log(func.decrement());