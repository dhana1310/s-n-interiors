import React, { useState, useRef } from "react";
import "./Description.css";
import landingPhoto from './../assets/1525.jpg';

const Description = (props) => {
  return (
    <div className="container">
      <img className="image" src={landingPhoto}  alt={""} />
      <div className="text-block">
        <center>
        <span style={{fontSize: '3.5vw', fontWeight: 'bold', fontFamily: 'monospace'}}>
          Design Your Home,<br></br> Your Way!
        </span>
        </center>

        <center>
        <span style={{fontSize: '2.5vw', fontWeight: 'bold', fontFamily: 'monospace'}}>Making Memories Amidst
        <br></br> These Beautiful Walls</span>
        </center>
      </div>
    </div>
  );
};

export default Description;
