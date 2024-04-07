import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Profile from './Components/Profile/Profile';
import Home from './Components/Home/Home';
import Book from './Components/Booking/Book';
import VenueDetails from './Components/VenueDetails/VenueDetails';
// import Navbar from './Components/Navbar/Navbar';

function App() {
  // const [currentForm, setCurrentForm] = useState('Login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    
    <>
    {/* <div>
      {
      currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div> */}
    {/* <Profile/> */}
    {/* <Home/> */}
     {/* <VenueList/> */}
     <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/reg" element={<Register/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/details" element={<VenueDetails/>}></Route>
        <Route exact path="/book" element={<Book/>}></Route>
        <Route exact path="/profile" element={<Profile/>}></Route>
      </Routes>
     </Router>
     
    </>
  );
}

export default App;
