import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../../assests/image/profile/yashwant.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import {Link} from "react-scroll";
import "./about.css";

const About = () => {
  return (
      <div className="about-background" id="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
          <Container className="about-section">
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2">
                  <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                </Row>
              </Col>
              <Col xs={12} md={6} className="justify-content info">
                  Hi there! I am <strong>&nbsp;Yashwant Shrivastava</strong>
                  <br />
                  A passionate software programmer, learner and a coder, born and brought up in India. I am a Full Stack Web Developer with React.js, Flask, PHP, Node.js, MySQL, and MongoDB as my tech stack.
                  <br />
                  In 2020, I successfully completed my Engineering with specialization in 'Computer Science and Engineering from NIT Bhopal'.
                  <br />
                  Currently I am working at Zomato as a Software Developer and My Goal is to write such a code which will affect the lives of millions of people.
                  <br />
                  Along with that, I always try to develop new skills and try to learn learn about new technologies in order to know what problems are they solving and How can I use them to build better and scalable products.
                  <br /> <br />
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                        <Button className="m-2" variant="outline-primary">
                          Let's talk
                        </Button>
                    </Link>
                    </div>
                    <div>
                      <a href="https://drive.google.com/file/d/1_YtV_zpkH8vVPMLiiW4pf9nX7f_jhiIp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-secondary">
                          My Resume
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/yashwant-shrivastava" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-dark">
                          GitHub
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/yashwant-shrivastava-3485a9178/" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-info">
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </Col>
              </Col>
            </Row>
        </Container>
        <hr/>
      </div>
  );
};

export default About;
