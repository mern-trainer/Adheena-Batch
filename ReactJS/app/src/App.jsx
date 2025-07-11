import { Fragment } from "react"

const App = () => {

    const user = "Adheena"

    // const handleClick = () => {
    //     console.log("button clicked")
    // }

    const funcWithArg = (value) => {
        console.log(value)
    }

    return <Fragment>
        <h1>Hello World</h1>
        <h2>Name: {user}</h2>
        <p onClick={() => {
            funcWithArg("Adheena")
        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque dolorem sequi facere accusamus. Excepturi similique inventore voluptatem ab nemo, cum optio nulla. Quo, nisi pariatur repellendus atque blanditiis dignissimos.</p>
    </Fragment>
}

export default App