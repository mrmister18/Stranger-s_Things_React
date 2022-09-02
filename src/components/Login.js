import React, { useEffect, useState } from 'react';

const Login = () => {
    return <div className="login">
        <h1>Login</h1>
        <form>
            <label htmlFor='username'>Username</label>
            <input id='username' name='username'type="text"></input>
            <label htmlFor='password'>Password</label>
            <input id='password' name='password' type="password"></input>
            <button>Login</button>
        </form>
        <p>Don't have an account? Sign up!</p>
    </div>
}

export default Login;