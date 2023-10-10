// About.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/logo.jpg';
import ab from '../components/about.jpg';
import './About.css';

function About() {
  return (
    <div className="about">
      <nav className="head">
        <img src={logo} alt="Your Logo" className="logo" />
        <h2 className="homeh2">TaskMaster</h2>
        <ul className="nav-links">
          <li>
            <Link to="/adminlogin">Admin</Link>
          </li>
          <li>
            <Link to="/emplogin">Employee</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
   <div className='aboutback'>
      <section className="about-section">
        {/* <img src={ab} className="about-background" alt="About Background" /> */}
        <div className="container">
          <h1>About Our Time and Task Management Software</h1>
          <br></br>
          <p>
            Welcome to the future of productivity and organization. Our time and task management software is designed to help you streamline your work, stay focused, and achieve your goals with ease.
            <br></br>
            <br>
            </br>
          </p>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <h3>Effortless Task Management</h3>
              <p>Create, organize, and prioritize tasks with a few clicks.</p>
            </div>
            <div className="feature-card">
              <h3>Time Tracking</h3>
              <p>Monitor how you spend your time to identify areas for improvement.</p>
            </div>
            <div className="feature-card">
              <h3>Goal Setting</h3>
              <p>Set and track your goals, and celebrate your achievements.</p>
            </div>
            <div className="feature-card">
              <h3>Collaboration</h3>
              <p>Collaborate with team members and share tasks seamlessly.</p>
            </div>
            <div className="feature-card">
              <h3>Intuitive Interface</h3>
              <p>User-friendly design for a hassle-free experience.</p>
            </div>
          </div>
        </div>
      </section>

      
      <footer className="footer">
  <div className="container">
    <div className="footer-contact">
      <h3>Contact Us</h3>
      <p>Email: iamneo@taskmaster.com</p>
      <p>Phone: +91 9360400345</p>
      <p>Address: 1234 Task Street, Productivity , Lakshmi Mills, Coimbatore -641 035</p>
    </div>
    <div className="footer-social">
      <h3>Connect with Us</h3>
      <ul>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>

      </div>
    </div>
  );
}

export default About;
