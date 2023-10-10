import React from 'react'
import './Adminregister.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';
export default function Adminregister() {
  const [FormData, setFormData] = useState({
    username: '',
    email: '',
    orgname:'',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };
  const handleRegistration = async (e) => {
    e.preventDefault();
    if (FormData.password !== FormData.confirmPassword) {
      alert('Passwords do not match');
    } else {
      const user = {
        username: FormData.username,
        email: FormData.email,
        orgname:FormData.orgname,
        password: FormData.password,
      };
      const requestbody = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      };

      const response = await fetch('http://localhost:8000/Signup', requestbody);
      const responseData = await response.text();

      if (responseData === 'Already iruku') {
        alert('User exists');
      } else {
        setFormData({
          username: '',
          email: '',
          orgname:'',
          password: '',
          confirmPassword: '',
        });
        
        navigate('/admindashboard');
      }
    }
  };

  return (
    <div className='regisadmin'>
    <div className='register'>
      <h2>Admin Register </h2>
      <div class="form-group">
      <input
            type='text'
            placeholder='Username'
            name='username'
            value={FormData.username}
            onChange={handleChange}
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={FormData.email}
            onChange={handleChange}
          />
           <input
            type='orgname'
            placeholder='orgname'
            name='orgname'
            value={FormData.orgname}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={FormData.password}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Confirm Password'
            name='confirmPassword'
            value={FormData.confirmPassword}
            onChange={handleChange}
          />
            <p></p>
            <p>Already have an a account?<a href="/adminlogin"> Login</a> here.</p>
        </div>
         <button type="submit" class="button-login" onClick={handleRegistration}>REGISTER</button>

    </div>
    </div>
  )
}
