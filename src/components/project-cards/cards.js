import React from 'react';
import Tilt from 'react-tilt';
import Card from 'react-bootstrap/Card';
import Aux from "../../containers/Hoc/hoc";

const Cards = (props) => {
    const projects = props.projects;

    const projectDetails = projects.map((ele, index) =>
        <Tilt options={{ max: 25 }} className="tilt-style" key={index}>
            <Card>
                <Card.Body className="d-flex justify-content-center flex-column">
                    <Card.Title className="text-center">{ele.title}</Card.Title>
                    <Card.Text className="text-center text-stack-style">
                        Stack: {ele.stack}
                    </Card.Text>
                    <Card.Text className="text-center text-desc-style">
                    {ele.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Tilt>
    );

    return (
        <Aux>
            {projectDetails}
            <hr/>
        </Aux>
    );
}

export default Cards;