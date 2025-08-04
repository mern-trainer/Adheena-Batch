import { useState } from "react"
import { Link } from "react-router"

// states -> states is an object to handle the data in a component
// hooks -> functions to handle the states and life cycle of a component

// useState() -> hook to handle the states

// 2 type of components -> function based and class based

const State = () => {
    // const [counter, setCounter] = useState(10);
    const [counters, setCounters] = useState({ one: 0, two: 0 })
    const [list, setList] = useState([])

    const incrementOne = () => {
        setCounters({ ...counters, one: counters.one + 1 });
    }

    const incrementTwo = () => {
        setCounters({ ...counters, two: counters.two + 1 });
    }

    const addValues = () => {
        const random = Math.random()
        setList([...list, random])
    }

    return <div className="d-flex flex-column gap-2 align-items-center mt-5">
        <Link to="/map">Mapping</Link>
        <div className="d-flex flex-column align-items-center gap-2">
            <div>{counters.one}</div>
            <button className="btn btn-success" onClick={incrementOne}>Increment</button>
        </div>
        <div className="d-flex flex-column align-items-center gap-2">
            <div>{counters.two}</div>
            <button className="btn btn-success" onClick={incrementTwo}>Increment</button>
        </div>

        <div className="mt-5 d-flex flex-column align-items-center">
            <button onClick={addValues} className="btn btn-primary">Generate Random Number</button>
            {list.join(" , ")}
        </div>
    </div>
}

export default State