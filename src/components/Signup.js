import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [newUserName, setNewUserName] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const { setLoginToken, loginToken } = props
    const navigate = useNavigate()

    async function registerNewUser(username, password) {
        fetch("https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/users/register", {
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

    return <div className="signup">
        <h1>Sign up</h1>
        <form onSubmit={(event) => {
            event.preventDefault()
        registerNewUser(newUserName, newPassword)
        loginToken ? navigate("/") : alert("Signup Failed", "Please try again")}}>
            <label htmlFor='username'>Username</label>
            <input onChange={(event) => setNewUserName(event.target.value)} id='username' name='username'type="text"></input>
            <label htmlFor='password'>Password</label>
            <input onChange={(event) => setNewPassword(event.target.value)} id='password' name='password' type="password"></input>
            <button>Register</button>
        </form>
    </div>
}

export default Signup;