import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Taskcalendar.css'; // Uncomment this line to include the default CSS
import { Link } from 'react-router-dom';


function CalendarView() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
       <nav className="dashboard">
      <h1>Your Dashboard</h1>
      <ul className="nav-links1">
      <li>
          <Link to="/taskprogress">View Task</Link>
          
        </li>
        <br></br>
        <br></br>
        <li>
          <Link to="/calendarview">Calendar</Link>
        </li>
      </ul>
    </nav>
      <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center1'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
    </div>
  );
}

export default CalendarView;
