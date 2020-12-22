import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from 'react-bootstrap/Image';
import moonpic from '../assets/moon.jpg';
import Footer from './footer'
import homebkg from '../assets/homebkg.jpg'

class AboutPage extends Component {
    
    state = { };

    render() {
        return(
            <body>
                <div className="d-flex align-items-center justify-content-center home-bg text-center m-0" style={{backgroundImage: `url(${homebkg})`, height: '25vh', backgroundPositionY: '35%'}}>
                    <Container>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <br/>
                                <h1 className="display-2" style={{color: 'white'}}>About Me</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="py-5" style={{backgroundColor: 'rgb(248, 248, 248)'}}>
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <Image fluid className="mb-3" src={moonpic}/>
                                <p className="w-100 text-center post-text">Image taken by me!</p>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className="d-flex">
                                <div className="my-auto">
                                    <h1 className="display-4 mb-5">Hi. I'm Aryan Kalia.</h1>
                                    <p className="post-text">Hey! Thanks for visiting my website. I'm Aryan Kalia - a Mechatronics Engineering student at the University of Waterloo with an interest in embedded systems, robotics, Machine Learning, and more. Some of my hobbies include astrophotography, creative writing, and running among several other things. I'm greatly interested in the potential that Blockchain and Machine Learning have to revolutionize the way we view ownership, and our lifestyles in general. I would love any opportunities to continue exploring my interests further and applying my knowledge and experience with hardware and software to projects I find exciting.</p>
                                    <br/>
                                    <p className="post-text" style={{fontSize: '0.75rem'}}><strong>Disclaimer:</strong> Some of the images used in this website (namely the NI MyDAQ image, the Tello Drone, and the Fitbit Simulator: all on the Hardware page) are not mine. No copyright infringement is intended, and no revenue is collected from the presentation of these images on this site. If there are any concerns, please email me at <a href="mailto:aryan.kalia@uwaterloo.ca" target="_blank">aryan.kalia@uwaterloo.ca</a>.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer pageName="About"/>
            </body>
        );
    }
}

export default AboutPage;