import React, {useState} from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Profile from './Components/Profile/Profile';
import Home from './Components/Home/Home';

function App() {
  const [currentForm, setCurrentForm] = useState('Login');
  return (
    // <div>
    //   {
    //   currentForm === "Login" ? <Login /> : <Register />
    //   }
    // </div>
    <>
    {/* <Profile/> */}
    <Home/>

    </>
  );
}

export default App;
