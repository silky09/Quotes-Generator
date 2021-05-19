import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const myDate = new Date();
  const day = myDate.getDate();
  const monthNames = myDate.toLocaleString('default', { month: 'long' });
  const year = myDate.getFullYear();
  let now = new Date().toLocaleTimeString('en-GB');

  const [time, setTime] = useState(now);

  const updateTime = () => {
  now = new Date().toLocaleTimeString('en-GB');
  setTime(now);
  }
  setInterval(updateTime, 1000);

  
  const currentHours = myDate.getHours();

  let message = "";

  const colorChange = {
    color: ""
  };

  if (currentHours < 12) {
    message = "Good morning";
    colorChange.color = "yellow";
  } else if (currentHours < 18) {
    message = "Good afternoon";
    colorChange.color = "orange";
  } else {
    message = "Good evening";
    colorChange.color = "purple";
  }
  return (
    <div>
      <div className="text-wrapper">
             <p id="time">{time}</p>
             <p id="message"> <span style={colorChange} >{message}</span></p>
            <h4> {day} {monthNames} {year} </h4>
          </div>
    </div>
  )
}

export default Home
