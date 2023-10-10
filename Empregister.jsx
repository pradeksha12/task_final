import React from 'react'
import './Empregister.css'
export default function Empregister() {
  return (
    <div className='regisemp'>
    <div className='register'>
      <h2>Employee Register </h2>
      <div class="form-group">
            <label for="fname">Name</label>
            <br></br>
            <input type="text" id="fname" name="fname" required></input>
            <br></br>
            {/* <label for="lname"></label>
            <br></br>
            <input type="text" id="lname" name="lname" required></input>
            <br></br> */}
            <label for="email">Email Address</label>
            <br></br>
            <input type="email" id="email" name="email" required></input>
            <br></br>
            <label for="userDropdown">Select your team:</label>
            
            <br></br>
               <select id="userDropdown" name="userDropdown">
                    <option value="neo jarvis">neo jarvis</option>
                    <option value="neo stark">neo stark</option>
                    <option value="neo x">neo x</option>
                    <option value="neo 300">neo 300</option>
                </select>
      </div>
      <div class="form">
            <label for="password">Password</label>
            <br></br>
            <input type="password" id="password" name="password" required></input>
            <br></br>
            <label for="repassword">Re-enter Password</label>
            <br></br>
            <input type="password" id="repassword" name="repassword" required></input>
            <p></p>
            <p>Already have an a account?<a href="/emplogin"> Login</a> here.</p>
        </div>
        <button type="submit" class="button-login" onClick={handleSubmit}>REGISTER</button>

    </div>
    </div>
  )
}
const toDashboard=()=>{
  window.location.href="/userdashboard";
}
const handleSubmit=(e)=>{
  e.preventDefault();
  toDashboard();
}
