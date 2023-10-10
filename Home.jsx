// 
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import { Container, Row, Col } from 'react-bootstrap';
//import {logo}  from '../components/logo.jpg';
import myImg from '../components/logo.jpg';
import logo from '../components/logo.jpg'
function Home() {
  return (

    <div>

      <nav className="head">
      <img src={logo} alt="Your Logo" class="logo"></img>

        <h2 className='homeh2'>TaskMaster</h2>

        <ul className="nav-links">
          <li>
            <Link to="/adminlogin">Admin</Link>
          </li>
          <li>
            <Link to="/emplogin">Employee</Link>
          </li>
          
          <li>
            <Link to="/about">About</Link>
          </li>
         
        </ul>
        </nav>
      <section className='headerimg'>
        <div>
          <h1 className='homeh1'>TaskMaster is a Task and Time Management Software</h1>

        </div>
      </section>
      <section className='h'>
      <div className='additional-content'>
          <Container>
            <Row>
              <Col lg={12} className='d-flex justify-content-center '>
                <h3>Efficient Time and Task Management</h3>
                <br></br>
                <br></br>
                <br>
                </br>
                <br></br>
              </Col>
              <Col lg={6} className='d-flex justify-content-center '>
                <p>
                  TaskMaster helps you streamline your work by providing efficient time tracking and task management tools. Stay organized, meet deadlines, and improve productivity.
                </p>
              </Col>
              <Col lg={6} className='d-flex justify-content-center '>
                <p>
                  Our software is designed to support teams in various work environments, making it easier than ever to manage tasks, track time, and collaborate effectively.
                </p>
              </Col>
            </Row>
          </Container>
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

  );
}

export default Home;