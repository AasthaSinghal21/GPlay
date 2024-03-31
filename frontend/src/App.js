import React, {useState} from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';

function App() {
  const [currentForm, setCurrentForm] = useState('Login');
  return (
    <div>
      {
      currentForm === "Login" ? <Login /> : <Register />
      }
    </div>
  );
}

export default App;
