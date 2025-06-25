// Set, Map

// Set -> SetConstructor
// Map -> MapConstructor

const obj = {
    name: "John Doe",
    age: 20,
    place: "Kannur",
    qualification: "BCA"
}

// set -> Unique collection of elements.
// map -> Collection of key, value pairs.


const set = new Set()

set.add(1) // add values
set.add(2)
set.add(3)
// set.add(3)
set.add(4)
set.add(5)

const is_exist = set.has(2)

console.log(is_exist)

set.delete(4)

console.log(set);

const arr = [1, 2, 3, 2, 1, 4, 6, 2, 3, 1, 2, 3, 1, 2, 3];

const uniqueSet = new Set(arr)

console.log(uniqueSet)

const uniqueArr = Array.from(uniqueSet)

console.log(set.size)

set.clear()

console.log(set)

console.log(uniqueArr)

// ------------------------------------------------------

// Map -> Collection of key, value pairs.

const map = new Map();

map.set("name", "John Doe")
map.set("age", 20)
map.set("place", "Kannur")
map.set("qualification", "BCA")

const age = map.get("age")
console.log(age)

console.log(map.has("name"))

map.delete("name")

console.log(map.size)
map.clear()
console.log(map)

// [["key", "value"], ["key", "value"]]

// ------------------------------------------------------

// Memoization -> Caching the results of function calls. -> Optimization Technique.

const cache = new Map()

const sumOfNNumbers = (n) => {
    if (cache.has(n)) {
        console.log("Returning from cache...")
        return cache.get(n)
    }
    console.log("Calculating...")
    let sum = 0
    for (let i = 1; i <= n; i++){
        sum = sum + i
    }
    cache.set(n, sum)
    return sum
}

console.log(sumOfNNumbers(10))
console.log(sumOfNNumbers(10))
console.log(sumOfNNumbers(10))
console.log(sumOfNNumbers(10))
console.log(sumOfNNumbers(10000))
console.log(sumOfNNumbers(10000))
console.log(sumOfNNumbers(10000))
console.log(sumOfNNumbers(10000))

const store = new Map()

const fetchDataFromUrl = async (productsId) => {
    try {
        if (store.has(productsId)) {
            console.log("Return from cache...")
            return store.get(productsId)
        }
        console.log("Fetching data from url...")
        const response = await fetch(`https://dummyjson.com/products/${productsId}`)
        const res = await response.json()
        store.set(productsId, res)
        return res
    } catch (err) {
        return err
    }
}

const apiCall = async () => {
    let res = await fetchDataFromUrl(1)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    res = await fetchDataFromUrl(2)
    console.log(res)
    console.log("Completed")
}

apiCall()

