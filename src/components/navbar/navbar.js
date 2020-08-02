import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assests/image/logo/logo.png";
import "./navbar.css";
import { Link } from "react-scroll";

const MyNavbar = () => {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark" expand="md" className="animate-navbar nav-theme justify-content-between">
        <div>
          <Navbar.Brand href="/">
            <img className="logo" src={Logo} alt="logo" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link >
              <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}> Home </Link>
                </Nav.Link>
              <Nav.Link >
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}> About </Link>
              </Nav.Link>
              <Nav.Link>
              <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}> Skills </Link>
              </Nav.Link>
              <Nav.Link >
              <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-70} duration={500}> Experience </Link>
              </Nav.Link>
              <Nav.Link>
              <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}> Projects </Link>
                </Nav.Link>
              <Nav.Link>
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}> Contact </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
