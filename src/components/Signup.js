import React, { useEffect, useState } from 'react';

const Signup = () => {
    

    return <div className="signup">
        <h1>Sign up</h1>
        <form>
            <label htmlFor='username'>Username</label>
            <input id='username' name='username'type="text"></input>
            <label htmlFor='password'>Password</label>
            <input id='password' name='password' type="password"></input>
            <button>Login</button>
        </form>
    </div>
}

export default Signup;