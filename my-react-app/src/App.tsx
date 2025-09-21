
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Navbar from "./Navbar";

import "./App.css"

function App() {
    return (
        <>
            {/* <Navbar /> */}
            < Routes >
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes >
        </>
    )
}
export default App;
