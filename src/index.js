import { createRoot } from "react-dom/client"
import { Link, Route, Routes, BrowserRouter, useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home";
import Profile from "./components/Profile";

const Nav = (props) => {
    const { loginToken, setLoginToken } = props

    return <nav>
    <span className="title">Stranger's Things</span>
    <Link to="/"><span>Home</span></Link>
    {loginToken ? <Link to={"/account/profile"}><span>Profile</span></Link> : null}
    {loginToken ? <span onClick={() => setLoginToken("")}>Log out</span> : <Link to="/account/login"><span>Login</span></Link>}
</nav>
}

const App = () => {
    const [loginToken, setLoginToken] = useState("")

    return <BrowserRouter>
    <div>
        <Routes>
            <Route path="/" element={<><Nav loginToken={loginToken} setLoginToken={setLoginToken} /><Home loginToken={loginToken} /></>}></Route>
            <Route path="/account/login" element={<><Nav /><Login setLoginToken={setLoginToken} loginToken={loginToken} /></>}></Route>
            <Route path="/account/signup" element={<><Nav /><Signup setLoginToken={setLoginToken} loginToken={loginToken} /></>}></Route>
            <Route path="/account/profile" element={<><Nav loginToken={loginToken} setLoginToken={setLoginToken} /><Profile loginToken={loginToken} /></>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
}

const root = createRoot(document.getElementById("app"))
root.render(<App />)