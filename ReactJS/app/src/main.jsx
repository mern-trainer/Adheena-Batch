import ReactDOM from "react-dom/client"
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

const rootElement = document.getElementById("root")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)