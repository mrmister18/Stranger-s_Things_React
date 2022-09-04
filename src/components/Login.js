import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const { setLoginToken, loginToken } = props
    const navigate = useNavigate()

    async function userLogin(username, password) {
        fetch('https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/users/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      }).then(response => response.json())
        .then(result => {
          setLoginToken(result.data.token);
        })
        .catch(console.error);
      }

    return <div className="login">
        <h1>Login</h1>
        <form onSubmit={(event) => {
            event.preventDefault()
            userLogin(userName, password)
            loginToken ? navigate("/") : alert("Login Failed! Please try again")}}>
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