import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Profile from './Components/Profile/Profile';
import Home from './Components/Home/Home';
import Book from './Components/Booking/Book';
import VenueDetails from './Components/VenueDetails/VenueDetails';


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
    <>
    {/* <Profile/> */}
    {/* <Home/> */}
     {/* <VenueList/> */}
     <Router>
      <Routes>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/details" element={<VenueDetails/>}></Route>
      </Routes>
     </Router>
     
    </>
  );
}

export default App;
