import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import "./form.css";
import axios from 'axios';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            email: "",
            name: ""
        };
    };

    mySubmitHandler = (e) => {
        e.preventDefault();
        const { message, email, name } = this.state;

        const data = new FormData();
        data.set('message', message);
        data.set('email', email);
        data.set('name', name);

        const headers = {
            'Content-Type': 'multipart/form-data'
        };

        axios.post(
            'https://script.google.com/macros/s/AKfycbw8Vk7fIp6YTcps2j6wA5Z4FSTYsWCPmNv4UMM2KB8tlMV9MZM/exec', 
            data,
            headers
            ).then((result) => {
                console.log(result);
          }).catch(function (error) {
            console.log(error);
            alert('Please check your network connection');
        });

        alert(name + ", Thanks for you message. I will contact you soon!!!");

        e.target.reset();
        this.setState({
            message: "",
            email: "",
            name: ""
        });
    }

    myChangeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <Form className="form" onSubmit={this.mySubmitHandler}>
                <Form.Group controlId="name" onChange={this.myChangeHandler}>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="What can I call you"/>
                </Form.Group>

                <Form.Group controlId="email" onChange={this.myChangeHandler}>
                    <Form.Label>Your Email Address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="message" onChange={this.myChangeHandler}>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows="3" name="message" placeholder="Glad to know you"/>
                </Form.Group>

                <Button onClick={this.changeText} variant="outline-light" type="submit"> Send </Button>
            </Form>
        );
    };
}

export default ContactForm;