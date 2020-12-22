import React, { Component } from "react";
import homebkg from '../assets/homebkg.jpg';
import redboard from '../assets/redboard_background.jpg';
import codebkg from '../assets/code_background.jpg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from "react-bootstrap/Jumbotron";
import {Link} from 'react-router-dom';
import Footer from './footer';
import githubLogo from '../assets/github_logo.png';
import linkedinLogo from "../assets/linkedin_logo.png";
import mailIcon from "../assets/mail_icon_light.jpg";
import phoneIcon from "../assets/phone_icon.png"

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    
    state = { };

    render() {
        return(
            <body>
                <div className="w-100 d-flex align-items-end position-absolute" style={{top: "75vh"}}>
                    <Container className="fade-in fly-in">
                        <Row className = "mt-5">
                            <Col className="d-flex justify-content-center">
                                <a target="_blank" href="https://github.com/manumanuk"><img className="invert icon" src={githubLogo} style={{height: '30px'}} /></a>
                                <a className="d-none d-lg-inline" target="_blank" href="https://github.com/manumanuk"><p className="contact-info d-inline text-bottom ml-2" style={{position: "relative", top: "2.4px"}}>manumanuk</p></a>
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <a target="_blank" href="https://www.linkedin.com/in/aryan-kalia/"><img className="icon" style={{height: '30px'}} src={linkedinLogo} /></a>
                                <a className="d-none d-lg-inline" target="_blank" href="https://www.linkedin.com/in/aryan-kalia/"><p className="contact-info d-inline text-bottom ml-2">aryan-kalia</p></a>
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <a target="_blank" href="mailto:aryan.kalia@uwaterloo.ca"><img className="icon" src={mailIcon} style={{height: '20px'}} /></a>
                                <a className="d-none d-lg-inline" target="_blank" href="mailto:aryan.kalia@uwaterloo.ca"><p className="contact-info d-inline text-bottom ml-2">aryan.kalia@uwaterloo.ca</p></a>
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <a href="tel:+1647-869-0536"><img src={phoneIcon} className="invert icon" style={{height: '25px'}} /></a>
                                <a className="d-none d-lg-inline" href="tel:+1647-869-0536"><p className="contact-info d-inline text-bottom ml-2">+1 (647) 869-0536</p></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Jumbotron fluid className="home-bg text-center m-0" style={{height: '91vh', backgroundImage: `url(${homebkg})`}}>
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
                                <h2 className="display-4 mb-4 light-title">Software and Hardware Portfolio</h2>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg={1.5} md={1.5} sm={1.5}>
                                <a target="_blank" href="/AryanKaliaResume.pdf" download><Button className="button-light py-2 px-4 mx-2">Resume</Button></a>
                            </Col>
                            {/* <Col lg={1.5} md={1.5} sm={1.5}>
                                <Button className="button-light py-2 px-4 mx-2">Portfolio</Button>
                            </Col> */}
                        </Row>
                        <Row>
                            <Col>
                                <div className="my-5 w-100" style={{height: '1px'}}></div>
                            </Col>
                            <Col>
                                <div className="my-5 w-100" style={{height: '1px'}}></div>
                            </Col>
                        </Row>

                        <Row>
                            <div className="my-5 w-100"></div>
                        </Row>
                    </Container>
                </Jumbotron>

                <div className="vh-100 d-flex align-items-center justify-content-center home-bg text-center m-0" style={{backgroundImage: `url(${redboard})`}}>
                    <Container>
                        <Row className="m-0 w-100">
                            <Col>
                                <h1 className="display-2 strong-title">Hardware Projects</h1>
                                <br />
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <div className="horizontal-line-white"></div>
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
                </div>

                <div className="vh-100 d-flex align-items-center justify-content-center home-bg text-center m-0" style={{backgroundImage: `url(${codebkg})`}}>
                <Container>
                        <Row className="m-0 w-100">
                            <Col>
                                <h1 className="display-2 strong-title">Software Projects</h1>
                                <br />
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <div className="horizontal-line-white"></div>
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
                    </Container>
                </div>
                <Footer pageName="Home"/>
            </body>
        );
    }
}

export default HomePage;