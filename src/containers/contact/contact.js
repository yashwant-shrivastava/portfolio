import React from 'react';
import Form from '../../components/contact-form/form';
import "./contact.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import L_PHONE from '../../assests/image/contact/phone.svg';
import L_EMAIL from '../../assests/image/contact/email.svg';
import Container from 'react-bootstrap/Container';

const Contact = () => {
    return (
        <div className="contact-background" id="contact">
            <h1 className="pt-3 text-center form-details-b pb-3"> CONTACT </h1>
            <Container>
                <Row className="contact-form">
                    <Col md={6}>
                        <Form/>
                    </Col>
                    <Col md={6}>
                        <ul className="contact-details">
                            <li>
                                <Image className="contact-image" src={L_PHONE} alt="phone"/>
                                <strong> +91 7389876501 </strong>
                                <hr/>
                            </li>
                            <li className="contact-container">
                                <Image className="contact-image" src={L_EMAIL} alt="email"/>
                                <strong> 
                                    <a className="email" href="mailto: yash14shrivastava@gmail.com">yash14shrivastava@gmail.com</a>
                                </strong>
                            </li>

                        </ul>
                    </Col>
                </Row>
            </Container>
            <hr/>
        </div>
    )
}

export default Contact;
