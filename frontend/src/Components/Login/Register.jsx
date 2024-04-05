import React, {useState} from 'react';
import './Register.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill, RiMessageFill, RiBasketballFill  } from "react-icons/ri";
import { MdDriveFileRenameOutline } from "react-icons/md";

const Register = (props) => {

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

  return (
    <div className='body_register'>
    <div className='wrapper_reg'>
      <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box_reg">
                <input type="text" placeholder='Name' required />
                <MdDriveFileRenameOutline className='icon'/>
            </div>
            <div className="input-box_reg">
                <input type="number" min={1} max={90} placeholder='Age' required />
                <RiMessageFill className='icon' />
            </div>
            <div className="input-box_reg">
                <input list="interest" name="interest" placeholder='Interest'/>
                    <datalist id="interest">
                        <option value="Football" />
                        <option value="Cricket"/>
                        <option value="Chrome"/>
                    </datalist>
                <RiBasketballFill className='icon'/>
            </div>

            <div className="input-box_reg">
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box_reg">
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='Password' required />
                <RiLockPasswordFill className='icon'/>
            </div>
            <div className="forgot_reg">
                <label><input type="checkbox" />Remember Me</label>
                <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">Register</button>

            <div className="login">
                <p>Already have an account? <a href="#" onClick={() => props.onFormSwitch('Login')}>Login</a></p>
            </div>
        </form>
    </div>
  </div>
  )
}

export default Register;
