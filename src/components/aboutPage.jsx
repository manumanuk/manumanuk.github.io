import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from 'react-bootstrap/Image';
import moonpic from '../assets/moon.jpg';
import Footer from './footer'

class AboutPage extends Component {
    
    state = { };

    render() {
        return(
            <body>
                <Container>
                    <Row>
                        <Col className="my-5 d-flex justify-content-center">
                            <h1 className="display-2">About Me</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Image fluid className="mb-3" src={moonpic}/>
                            <p className="w-100 text-center">Image taken by me!</p>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="d-flex align-items-center">
                            <p>Hey! Thanks for visiting my website. I'm Aryan Kalia - a Mechatronics Engineering student at the University of Waterloo with an interest in embedded systems, robotics, Machine Learning, and more. Some of my hobbies include astrophotography, creative writing, and running among several other things. I'm greatly interested in the potential that Blockchain and Machine Learning have to revolutionize the way we view ownership, and our lifestyles in general. I would love any opportunities to continue exploring my interests further and applying my knowledge and experience with hardware and software to projects I find exciting.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="w-100 my-5"></div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </body>
        );
    }
}

export default AboutPage;