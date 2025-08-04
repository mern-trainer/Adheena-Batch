import { BrowserRouter, Routes, Route } from "react-router"
import LandingPage from "./pages/LandingPage"
import State from "./pages/State"
import Mapping from "./pages/Mapping"
import Users from "./pages/Users"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/state" Component={State} />
            <Route path="/map" Component={Mapping} />
            <Route path="/users" Component={Users} />
        </Routes>
    </BrowserRouter>
}

export default App