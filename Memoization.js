// Map, Set, Memoization

// Set -> Collection of unique elements
// Map -> Collection of key-value pairs

// Set -> SetConstructor

const set = new Set();

// add

set.add(10)
set.add(20)
set.add(30)

// delete

set.delete(20)

// check if exists

const exists = set.has(10) // true or false

console.log(exists)

// size

const size = set.size

console.log(size)

// convert set to array

const arr = Array.from(set)

console.log(arr)

// clear

set.clear()

console.log(set)


// Map -> MapConstructor

const map = new Map();

// set value

map.set("name", "John Doe")
map.set("age", 20)

// get value

const user = map.get("name");

console.log(user)

// size

const sizeOfMap = map.size

console.log(sizeOfMap)

// has

const is_present = map.has("name") // true or false

console.log(is_present)

// delete

map.delete("name")

// clear

// map.clear()

// convert to array

const ar = Array.from(map) // [["name", "John Doe"], ["age", 20]]

console.log(ar)

// Memoization -> Optimization technique -> caching -> store the result of a function for future use.

// async -> 2 - 5 seconds

// 3 times -> 15 seconds

// 1 st -> 5 second -> 2,3 -> 0 seconds

// -> 1,2 => 3
// -> 1,2 => 3

const store = new Map();

const sumOfNNumbers = (n) => {
    if (store.has(n)) {
        console.log("Getting sum of", n, "numbers from cache");
        return store.get(n)
    }
    console.log("Calculating sum of", n, "numbers");
    let sum = 0
    for (let i = 1; i <= n; i++){
        sum += i
    }
    store.set(n, sum)
    return sum
}

console.log(sumOfNNumbers(100000));
console.log(sumOfNNumbers(100000));

// application

// api calling

const cache = new Map();

const getTodo = async (todo_id) => {
    try {
        if (cache.has(todo_id)) {
            console.log("Fetching todo from cache...");
            return cache.get(todo_id)
        }
        console.log("Fetching todo...");
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo_id}`)
        const res = await response.json()
        cache.set(todo_id, res)
        return res
    } catch (error) {
        console.log(error);
    }
}

const handleTodoCall = async () => {
    try {
        let todo = await getTodo(10)
        console.log(todo)
        todo = await getTodo(10)
        console.log(todo)
        todo = await getTodo(10)
        console.log(todo)
        todo = await getTodo(10)
        console.log(todo)
        todo = await getTodo(10)
        console.log(todo)
        console.log("Fetching todo completed")
        console.log(cache);
    } catch (err) {
        console.log(err)
    }
}

handleTodoCall()



