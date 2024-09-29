import React, { useState, useRef } from "react";
import "./Description.css";
import landingPhoto from './../assets/1526.jpg';

const Description = (props) => {
  return (
    <div >
      <img src={landingPhoto} style={{ width: "100%" }} alt={""} />
    </div>
  );
};

export default Description;
