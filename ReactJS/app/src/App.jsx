import { useState } from "react"

// states -> states is an object to handle the data in a component
// hooks -> functions to handle the states and life cycle of a component

// useState() -> hook to handle the states

// 2 type of components -> function based and class based

const App = () => {

    const [counter, setCounter] = useState(10);

    const increment = () => {
        setCounter(counter + 1)
    }

    return <div className="d-flex flex-column gap-2 align-items-center mt-5">
        <div>{counter}</div>
        <button className="btn btn-success" onClick={increment}>Increment</button>
    </div>
}

export default App