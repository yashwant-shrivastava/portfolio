import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ZOMATO from "../../assests/image/experience/zomato.svg";
import Tilt from "react-tilt";
import "./experience.css";

const Experience = () => {
  return (
    <div className="experience-background" id="experience">
      <h1 className="pt-3 text-center font-details pb-3">EXPERIENCE</h1>
        <Container>
        <Jumbotron className="jumbo-style">
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ZOMATO} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Software Development Engineer (SDE-1)</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Domain:</strong> Full Stack Developer
                    <br />
                    <strong>Role:</strong> Content Tech Developer
                    <br />
                    <strong>Description:</strong> Solving real-time problems occuring in production related to UI, Backend, and Databases.
                    <br />
                    <strong>Technology:</strong> PHP, Flask, Celery, JS
                    <br />
                    <strong>Duration:</strong> Jan 2020 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
          </Jumbotron>
        </Container>
        <hr/>
    </div>
  );
};

export default Experience;
