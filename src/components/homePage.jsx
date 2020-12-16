import React, { Component } from "react";
import homebkg from '../assets/homebkg.jpg'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from "react-bootstrap/Jumbotron";

class HomePage extends Component {
    
    state = { };

    render() {
        return(
            <body>
                <Jumbotron fluid className="home-bg text-center m-0" style={{height: '90vh', backgroundImage: `url(${homebkg})`}}>
                    <Container className="d-flex align-items-center h-100">
                        <Row className="m-0 w-100">
                            <Col>
                                <h1 className="display-1 strong-title">Aryan Kalia</h1>
                                <h2 className="display-4 strong-title">Hang on, you're not supposed to see this yet!</h2>
                                <h1 className="display-4 strong-title">This site is still under construction. Let me redirect you to my weebly for the time being.</h1>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </body>
        );
    }
}

export default HomePage;