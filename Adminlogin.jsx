import React from 'react'
import './Adminlogin.css';

//import Register from '../components/Register';

export default function Adminlogin() {
  // const register = console.log("Hai");
  return (
    <div className='appadmin'>
    <div className='login'>
        
       <h2 className='adminh'>log into your account</h2>
       <form className='login-container'>
          <div class="form-group">
            <label for="username">User email</label>
            <br></br>
            <input type="text" id="username" name="username" required></input>
        </div>
        <div class="form">
            <label for="password">Password</label>
            <br></br>
            <input type="password" id="password" name="password" required></input>
            <p></p>
            <p>Don't have an a account?<a href="/adminregister"> Register</a> here.</p>
        </div>
        <button type="submit" class="button-login" onClick={handleSubmit}>SIGN IN</button>
    </form>
    </div>
    </div>
  );
}
const toDashboard=()=>{
  window.location.href="/admindashboard";
}
const handleSubmit=(e)=>{
  e.preventDefault();
  toDashboard();
}
