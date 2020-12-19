import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'


class Footer extends Component {

    state = { };

    render() {
        return(
            <footer>
                <Container className="mt-3 mb-1 text-center">
                    <Row>
                        <Col>
                            <Link className="footer-text" to="/software"><p >Software</p></Link>
                        </Col>
                        <Col>
                            <Link className="footer-text" to="/hardware"><p>Hardware</p></Link>
                        </Col>
                        <Col>
                            <Link className="footer-text" to="/about"><p>About</p></Link>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }

}

export default Footer;