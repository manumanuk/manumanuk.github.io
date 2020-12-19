import React, { Component } from "react";
import homebkg from '../assets/homebkg.jpg';
import redboard from '../assets/redboard_dark.jpg';
import codebkg from '../assets/code.jpg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from "react-bootstrap/Jumbotron";
import {Link} from 'react-router-dom';
import Footer from './footer';

class HomePage extends Component {
    
    state = { };

    render() {
        return(
            <body>
                <Jumbotron fluid className="home-bg text-center m-0" style={{height: '90vh', backgroundImage: `url(${homebkg})`}}>
                    <Container className="h-100 fade-in fly-in">
                        <Row>
                            <div className="my-5 w-100"></div>
                            <div className="my-4 w-100"></div>
                            <div className="my-3 w-100 d-sm-none d-md-none d-lg-none"></div>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <h1 className="display-1 strong-title">Aryan Kalia</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <h2 className="display-4 mb-4 light-title">Hang on, you're not supposed to see this yet!</h2>
                                <h2 className="display-4 mb-4 light-title">This site is still under construction. Let me redirect you to my weebly for the time being.</h2>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg={1.5} md={1.5} sm={1.5}>
                                <Button className="button-light py-2 px-4 mx-2">Resume</Button>
                            </Col>
                            <Col lg={1.5} md={1.5} sm={1.5}>
                                <Button className="button-light py-2 px-4 mx-2">Portfolio</Button>
                            </Col>
                        </Row>
                        <Row>
                            <div className="my-5 w-100"></div>
                        </Row>
                    </Container>
                </Jumbotron>

                <div className="vh-100 d-flex align-items-center justify-content-center home-bg text-center m-0" style={{backgroundImage: `url(${redboard})`}}>
                {/* <Jumbotron fluid className="home-bg text-center m-0" style={{backgroundImage: `url(${redboard})`}}> */}
                    <Container className="align-middle">
                        <Row className="m-0 w-100">
                            <Col>
                                <h1 className="display-3 strong-title">Hardware Projects</h1>
                                <br />
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <div className="vertical-line"></div>
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="white-p-text">
                                Worked with Arduino and other hardware including IoT (RC transmitters + receivers, camera module, SD card module, Wi-fi module, Bluetooth modules, QTI light sensors, etc), common ICs (e.g. 555-Timer, L293D Motor Driver), various robotics kits, and PIC Programming with Assembly.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <br/>
                                <Link to="/hardware"><Button className="button-light py-2 px-4">View Hardware Projects</Button></Link>
                            </Col>
                        </Row>
                    </Container>
                {/* </Jumbotron> */}
                </div>

                <div className="vh-100 d-flex align-items-center justify-content-center home-bg text-center m-0" style={{backgroundImage: `url(${codebkg})`}}>
                {/* <Jumbotron fluid className="home-bg text-center m-0" style={{backgroundImage: `url(${codebkg})`}}> */}
                <Container>
                        <Row className="m-0 w-100">
                            <Col>
                                <br/><br/><br/><br/><br/><div className="my-5 w-100 d-xs-none d-sm-none d-md-none"></div>
                                <h1 className="display-3 strong-title">Software Projects</h1>
                                <br />
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <div className="vertical-line"></div>
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="white-p-text">
                                3+ years of experience with C++ and OOP, 2+ years of experience with Python, over one year of experience with HTML/CSS/JavaScript, and exposure to several other languages and front-end frameworks including Angular, React, and Flutter. Backend experience includes AI certification from EDX, familiarity implementing a variety of APIs, and a good understanding of Firebase tools.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <br/>
                                <Link to="/software"><Button className="button-light py-2 px-4">View Software Projects</Button></Link>
                            </Col>
                        </Row>
                        <Row><Col><br/><br/><br/><br/><br/><div className="my-5 w-100 d-xs-none d-sm-none d-md-none"></div></Col></Row>
                    </Container>
                {/* </Jumbotron> */}
                </div>
                <Footer/>
            </body>
        );
    }
}

export default HomePage;