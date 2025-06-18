// destructure, spread, rest, promise, async await

const arr = [1, 2, 3, 4];

// const v1 = arr[0]
// const v2 = arr[1]

const [v1, v2, v3, v4] = arr;

const obj = {
    name: "John",
    age: 25,
    place: "Kozhikode"
};

// const name = obj.name
// const age = obj.age

const { name, age, place } = obj

console.log(name, age, place)

// spread operator -> create a copy of array or object.

const array = [1, 2, 3, 4, 5];

const copyArray = [...array]

copyArray.push(6)

console.log(array)
console.log(copyArray)

const object = {
    name: "John Doe",
    age: 20,
    place: "Kannur"
}

const copyObj = {...object}

copyObj.qualification = "BCA"

console.log(object, copyObj)

// rest operator -> get remaining elements

const arr1 = [1, 2, 3, 4];

const [e1, ...remaining] = arr1

console.log(e1, remaining)

const obj1 = {
    username: "John Doe",
    age: 20,
    place: "Kannur"
}

const {username, ...remainingObj} = obj1

console.log(username, remainingObj)

// promise -> A way to handle async operations. (delay functions)
// promise states -> pending, rejected, fulfilled 
// settled promise -> rejected or resolved promise

const promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("response")
        }, 5000);
    })
}

// promise().then((res) => {
//     console.log("success", res)
// }).catch((err) => {
//     console.log("error", err)
// })

console.log("first")

// async await

// async function handlePromise() {
    
// }

const handleAsync = async () => {
    try {
        const res = await promise()
        console.log(res)
    } catch (error) {
        console.log("error", error)
    }
}

handleAsync()

// fetch

// api -> application programming interface
// client -> server, server -> client, server -> server

// const jsonString = '{"name": "John", "age":20}'

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const res = await response.json()
        console.log(res)
    } catch (error) {
        
    }
}

fetchData()