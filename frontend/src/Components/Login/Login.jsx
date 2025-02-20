import React, { useState } from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import {Link} from "react-router-dom"

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

  return (
    <div className='body_login'>
    <div className='wrapper'>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='Password' required />
                <RiLockPasswordFill className='icon'/>
            </div>
            <div className="forgot">
                <label><input type="checkbox" />Remember Me</label>
                <a href="#">Forgot Password?</a>
            </div>

            {/* <button type="submit" onClick={() => navigate('/home')}>Login</button> */}
            <Link className="login-button" to="/home">Login</Link>

            <div className="register">
                {/* <p>Don't have an account? <a href="/reg" onClick={() => props.onFormSwitch('Register')}>Register</a></p> */}
                <p>Don't have an account? <Link to="/reg">Register</Link></p> 
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login;