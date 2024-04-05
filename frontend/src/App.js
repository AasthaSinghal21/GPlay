import React, {useState} from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Profile from './Components/Profile/Profile';
import packageInfo from "./data.json"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VenueList from './Components/Venue/VenueList';



function App() {
  // const [currentForm, setCurrentForm] = useState('Login');
  return (
    // <div>
    //   {
    //   currentForm === "Login" ? <Login /> : <Register />
    //   }
    // </div>
    <>
    {/* <Profile/> */}
    <VenueList />
    <Router>
    <Routes>
      <Route exact path="/cricket" element = {<VenueList cricket = {packageInfo.cricket}/>}></Route>
      <Route exact path="/footbal" element = {<VenueList cricket = {packageInfo.football}/>}></Route>
      <Route exact path="/badminton" element = {<VenueList cricket = {packageInfo.badminton}/>}></Route>
    </Routes>
    </Router>
    
    </>

  );
}

export default App;
