import React, {useState} from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Profile from './Components/Profile/Profile';
import Book from './Components/Booking/Book';

function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    // <div>
    //   {
    //   currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    //   }
    // </div>
    // <>
    // <Profile/>
    // </>
    <><Book/></>
  );
}

export default App;
