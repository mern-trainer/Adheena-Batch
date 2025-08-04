import { BrowserRouter, Routes, Route } from "react-router"
import LandingPage from "./pages/LandingPage"
import State from "./pages/State"
import Mapping from "./pages/Mapping"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/state" Component={State} />
            <Route path="/map" Component={Mapping} />
        </Routes>
    </BrowserRouter>
}

export default App