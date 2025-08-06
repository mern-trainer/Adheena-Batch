import { BrowserRouter, Routes, Route } from "react-router"
import LandingPage from "./pages/LandingPage"
import State from "./pages/State"
import Mapping from "./pages/Mapping"
import Users from "./pages/Users"
import TodoListPage from "./pages/TodoList"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/state" Component={State} />
            <Route path="/map" Component={Mapping} />
            <Route path="/users" Component={Users} />
            <Route path="/todo" Component={TodoListPage} />
        </Routes>
    </BrowserRouter>
}

export default App