import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {Login} from "./components/Login";

function App() {

    return (
        <div className="mainContainer">
            <h1>Login via OTP</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} length = {6}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
