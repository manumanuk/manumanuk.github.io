import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from "react-bootstrap/Jumbotron";
import Footer from './footer'

class HardwarePage extends Component {
    
    state = { };

    render() {
        return(
            <body>
                <br/>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <h1 className="display-2">Hardware</h1>
                        </Col>
                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
            </body>
        );
    }
}

export default HardwarePage;