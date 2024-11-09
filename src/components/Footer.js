import React from "react";
import "./Footer.css";
// import { Col, Row } from "react-bootstrap";
import locationPin from "./../assets/location-pin.png";
import phoneCall from "./../assets/phone-call.png";
import email from "./../assets/email.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <div className="u-grey-80" style={{ padding: "20px" }}>
      <center>
      <IconButton aria-label="Example">
        <FacebookIcon sx={{ color: "white" }} onClick={() => window.open('https://www.facebook.com/profile.php?id=61568327196468&mibextid=ZbWKwL', '_blank')}/>
      </IconButton>
      <IconButton aria-label="Example">
        <InstagramIcon sx={{ color: "white" }} onClick={() => window.open('https://www.instagram.com/sninterior12/profilecard/?igsh=MWNnemNkdXF4OGxnYg==', '_blank')}/>
      </IconButton>
      <div >
        Design your home🏠 with ❤️
      </div>
      </center>
    </div>
  );
}

export default Footer;
