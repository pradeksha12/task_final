import React from 'react'
import './Mainlogin.css';

//import Register from '../components/Register';

export default function Mainlogin() {
  // const register = console.log("Hai");
  return (
    <div className="page">
      {/* <img src="pexels.jpg" alt="Admin" /> */}
      <div className="left-card">
        
        
        <p>Are you an <a href="/adminlogin"> Admin </a>?</p>
      </div>
      <div className="right-card">
      <p>Are you an <a href="/emplogin"> Employee</a> ?</p>
      
      </div>
    </div>
  );
}