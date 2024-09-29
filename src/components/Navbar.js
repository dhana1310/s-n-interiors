import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import logo from './../assets/logo.jpg';
import whatsappLogo from './../assets/whatsapp.png';

const Nav = () => {
  return (
    <Navbar style={{ backgroundColor: "white" }}>
      <Container>
        <Navbar.Brand>
          <a href='http://localhost:3000' style={{textDecoration: 'none'}}>
          <img alt="" src={logo} width="80" height="70" className="d-inline-block align-top" />{" "}
          <span className="business-name">
             Interiors 
            {/* <br></br>& Modular Kitchen */}
           
          </span>
          </a>
        </Navbar.Brand>
        <Navbar.Text>
          <a className="connect-button" href="whatsapp://send?phone=919665188527&text=Hi,I want to connect for the interior designing" target="_blank">
            <img style={{ width: "33px", height: "33px" }} src={whatsappLogo} alt="" />
            <span style={{ marginLeft: "5px", color: "white" }}>Whatsapp us</span>
          </a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Nav;
