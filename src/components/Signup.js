import React, { useEffect, useState } from 'react';
import { registerNewUser } from '../api/api_calls';

const Signup = () => {
    const [newUserName, setNewUserName] = useState("")
    const [newPassword, setNewPassword] = useState("")

    return <div className="signup">
        <h1>Sign up</h1>
        <form>
            <label htmlFor='username'>Username</label>
            <input onChange={(event) => setNewUserName(event.target.value)} id='username' name='username'type="text"></input>
            <label htmlFor='password'>Password</label>
            <input onChange={(event) => setNewPassword(event.target.value)} id='password' name='password' type="password"></input>
            <button>Register</button>
        </form>
    </div>
}

export default Signup;