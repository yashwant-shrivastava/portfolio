import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../cards/cards.css";

const Cards = (props) => {

    const title = props.details.title;
    const details = props.details.value;

    const cardText = details.map((ele, index) =>
        <span className="p-2" key={index}>
                <Row>
                    <Col md={6}>
                        <Image src={ele.image} alt={ele.description} rounded className="image-style m-1"></Image>
                    </Col>
                    <Col md={3} className="img-desc">
                        {ele.description}
                    </Col>
                </Row>
        </span>
    );

    return (
        <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title"> {title} </Card.Title>
                <hr />
                <div className="card-text d-flex justify-content-start flex-column">
                    {cardText}
                </div>
              </Card.Body>
            </Card>
    );
}

export default Cards;