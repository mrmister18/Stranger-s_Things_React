import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return <div className="login">
        <h1>Login</h1>
        <form onSubmit={(event) => {
            event.preventDefault()
            console.log(userName, password)
        }}>
            <label htmlFor='username'>Username</label>
            <input onChange={(event) => setUserName(event.target.value)} id='username' name='username'type="text"></input>
            <label htmlFor='password'>Password</label>
            <input onChange={(event) => setPassword(event.target.value)}id='password' name='password' type="password"></input>
            <button>Login</button>
        </form>
        <Link to="/account/signup"><p>Don't have an account? Sign up!</p></Link>
    </div>
}

export default Login;