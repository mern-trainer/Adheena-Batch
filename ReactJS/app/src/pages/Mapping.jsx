// mapping -> Process of creating a new array by applying a function to each element of an array

import { Link } from "react-router"

// 
const Mapping = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const element = arr.map((num, index) => {
        // key -> unique identifier
        return <button key={index} className="rounded-circle bg-success border-0 text-light d-flex justify-content-center align-items-center" style={{ height: "28px", width: "28px" }}>{num}</button>
    })
    return <div className="m-5 d-flex gap-4 justify-content-center">
        {element}
        <Link to="/">HOME</Link>
    </div>
}

export default Mapping