import { createRoot } from "react-dom/client"
import { Link, Route, Routes, BrowserRouter, useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import Login from "./components/Login"
import Signup from "./components/Signup"

const Nav = () => {
    return <nav>
    <span className="title">Stranger's Things</span>
    <span>Home</span>
    <span>Posts</span>
    <span>Login</span>
</nav>
}

const App = () => {
    return <BrowserRouter>
    <div>
        <Routes>
            <Route path="/account/login" element={<><Nav /><Login /></>}></Route>
            <Route path="/account/signup" element={<><Nav /><Signup /></>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
}

const root = createRoot(document.getElementById("app"))
root.render(<App />)