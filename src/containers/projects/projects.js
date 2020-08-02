import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./projects.css";
import Cards from "../../components/project-cards/cards";

const Projects = () => {

    const projects = [
            {
                title: 'Web Personalization Based On Ant Colony Optimization',
                stack: 'J2EE, MYSQL, HTML, CSS, JS',
                description: 'Developed an algorithm which can be used to personalize the web results specific to a user based on his interest and history. When compared with google search results our algorithm gives 8.3% better search results.'
            },
            {
                title: 'Image Caption Generator',
                stack: 'Python, CNN, LSTM',
                description: 'Implemented an algorithm using CNN and LSTM to accurately describe the image for blind people.'
            },
            {
                title: 'Cooperative Spectrum Sensing Using Machine Learning',
                stack: 'Python, ML-Models, FFT',
                description: 'Implemented an algorithm to use cooperative spectrum sensing using machine learning techniques to increase probability of detection of secondary user, with less interference.'
            }
    ];

  return (
    <div className="project-background" id="projects">
      <h1 className="pt-3 text-center font-details pb-3">PROJECTS</h1>
        <Container>
            <Jumbotron className="jumbo-style">
                <Cards projects={projects}/>
            </Jumbotron>
      </Container>
    </div>
  );
};

export default Projects;
