import React from "react";
import "./Contact.css";
import { Col, Row } from "react-bootstrap";

function Contact({ imgSrc, closeModal }) {
  return (
    <div className="container" style={{ padding: "20px", marginBottom: "100px" }}>
      <h1 style={{marginTop: '100px', fontFamily:'cursive', fontWeight:'bold', fontSize: '40px'}}>Reach out to us</h1>
      <Row className="contact-box" style={{ marginTop: "50px", backgroundColor: "rgb(255 115 1)", padding: "50px 100px 100px 50px", fontFamily: "cursive" }}>
        <Col sm={4} className="link">
          <center title="Open in Google maps">
            <img style={{ width: "33px", height: "33px", marginBottom: "10px" }} src="location-pin.png" alt="" />

            <a className="location-map" href="https://maps.app.goo.gl/sGP8dnXKR5sG9ZfeA" target="_blank">
              <h3> Our Office Location</h3>
              <span >
                <h5 className="address">S. N. Interiors & Modular Kitchen</h5>
                <p className="address" style={{ fontSize: "14px" }}> Shop no 6, Krushna Heights, Uttamnagar, Bavdhan BK., Pune - 411021</p>
              </span>
            </a>
          </center>
        </Col>

        <Col sm={4}>
          <center>
            <img style={{ width: "33px", height: "33px", marginBottom: "10px" }} src="phone-call.png" alt="" />
            <h3> Phone (Mob)</h3>
            <p>
              +91 95718 06196
              <br />
              +91 79767 30415
            </p>
          </center>
        </Col>

        <Col sm={4}>
          <center>
            <img style={{ width: "33px", height: "33px", marginBottom: "10px" }} src="email.png" alt="" />
            <h3> Email</h3>
            <p>sninterior1072@gmail.com</p>
          </center>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
