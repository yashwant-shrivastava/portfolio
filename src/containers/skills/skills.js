import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import L_BOOTSTRAP from '../../assests/image/skills/bootstrap-4.svg';
import L_CSS from '../../assests/image/skills/css3.svg';
import L_CPP from '../../assests/image/skills/c++.svg';
import L_FLASK from '../../assests/image/skills/flask.svg';
import L_GIT from '../../assests/image/skills/git-icon.svg';
import L_HTML from '../../assests/image/skills/html-5.svg';
import L_JAVA from '../../assests/image/skills/java.svg';
import L_JAVASCRIPT from '../../assests/image/skills/javascript.svg';
import L_JQUERY from '../../assests/image/skills/jquery.svg';
import L_MONGO from '../../assests/image/skills/mongo.svg';
import L_MYSQL from "../../assests/image/skills/mysql.svg";
import L_PHP from "../../assests/image/skills/php.svg";
import L_PYTHON from '../../assests/image/skills/python.svg';
import L_REACT from "../../assests/image/skills/react.svg";
import L_REDIS from "../../assests/image/skills/redis.svg";
import L_DOCKER from '../../assests/image/skills/docker.svg';
import L_TERRAFORM from '../../assests/image/skills/terraform.svg';
import Cards from "../../components/cards/cards";
import "../skills/skills.css";


const Skills = () => {

    const frontEnd = {
        title: 'Frontend',
        value: [
            {
                image: L_HTML,
                description: 'HTML'
            },
            {
                image: L_CSS,
                description: 'CSS'
            },
            {
                image: L_JAVASCRIPT,
                description: 'JAVASCRIPT'
            },
            {
                image: L_JQUERY,
                description: 'JQUERY'
            },
            {
                image: L_BOOTSTRAP,
                description: 'BOOTSTRAP'
            },
            {
                image: L_REACT,
                description: 'REACT'
            }
        ]
    };

    const backEnd = {
        title: 'Backend',
        value: [
            {
                image: L_PHP,
                description: 'PHP'
            },
            {
                image: L_PYTHON,
                description: 'PYTHON'
            },
            {
                image: L_FLASK,
                description: 'FLASK'
            }
        ]
    };

    const languages = {
        title: 'PROGRAMMING LANGUAGES',
        value: [
            {
                image: L_PHP,
                description: 'PHP'
            },
            {
                image: L_PYTHON,
                description: 'PYTHON'
            },
            {
                image: L_JAVA,
                description: 'JAVA'
            },
            {
                image: L_CPP,
                description: 'C++'
            }
        ]
    };

    const databases = {
        title: 'DATABASES',
        value: [
            {
                image: L_MYSQL,
                description: 'MYSQL'
            },
            {
                image: L_MONGO,
                description: 'MONGO DB'
            },
            {
                image: L_REDIS,
                description: 'REDIS'
            }
        ]
    }

    const versionControl = {
        title: 'VERSION CONTROL',
        value: [
            {
                image: L_GIT,
                description: 'GIT'
            }
        ]
    }

    const devOps = {
        title: 'DEVOPS',
        value: [
            {
                image: L_DOCKER,
                description: 'DOCKER'
            },
            {
                image: L_TERRAFORM,
                description: 'TERRAFORM'
            }
        ]
    }

    return (
        <div className="skills-background" id="skills">
            <h1 className="pt-3 text-center font-details pb-3">TECH SKILLS</h1>
            <Container>
                <CardDeck>
                <Row className="d-flex display-cards skills">
                    <Col md={4}>
                        <Row>
                        <Cards details={frontEnd}/>
                        </Row>
                        <Row>
                        <Cards details={versionControl}/>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row>
                            <Cards details={backEnd}/>
                        </Row>
                        <Row>
                            <Cards details={databases}/>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row>
                            <Cards details={languages}/>
                        </Row>
                        <Row>
                            <Cards details={devOps}/>
                        </Row>
                    </Col>
                </Row>
                </CardDeck>
            </Container>
        </div>
    );
}

export default Skills;
