import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from "react-bootstrap/Jumbotron";
import {Image as BootstrapImage} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

class Post extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            buttons: null,
            date: "",
            id: "",
            images: null,
            video: null,
            imgTypes: null,
            windowWidth: 0,
            windowHeight: 0,
            begin : false
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        var data = this.props.content;

        let orientations = {};
        if (data.images) {
            for (const img of Object.keys(data.images)) {
                let loadImg = new Image();
                loadImg.src = require("../assets/" + data.images[img]);
                document.getElementById("test-bed").appendChild(loadImg);
                loadImg.onload = () => {
                    if(loadImg.height/loadImg.width < 1.1 && loadImg.height/loadImg.width > 0.9) {
                        orientations[img] = "square";
                    } else if (loadImg.height/loadImg.width > 1.1) {
                        orientations[img] = "height";
                    } else {
                        orientations[img] = "width"
                    }
                    loadImg.remove();
                    this.setState({ imgTypes: orientations, begin: true })
                }
            }
        }
        this.setState({
            title: data.title,
            body: data.body,
            buttons: data.buttons,
            date: data.date,
            images: data.images,
            video: data.video,
            id: data.id
        }, () => {
            if(this.props.scrollTo && document.getElementById(this.props.scrollTo) != null) {
                window.scrollTo({top: document.getElementById(this.props.scrollTo).offsetTop - document.getElementById('nav').offsetHeight, behavior: 'smooth'});
            }
        });
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
    }
         

    getPostText() {
        return (
            <Col lg={6} md={12} sm={12} xs={12} id={this.state.id}>
                <h3 className="display-4 post-title">{this.state.title}</h3>
                <h4 className="display-4 post-subtitle mb-3">{this.state.date}</h4>
                <p className="post-text">{this.state.body}</p>
            </Col>
        );
    }

    getPostMedia() {
        var rows = [];
        
        var imgRows = [];
        var imgCols = [];
        if(this.state.images && Object.keys(this.state.images).length > 0) {
            for(const imgId of Object.keys(this.state.images)) {
                if(this.state.begin && (this.state.imgTypes[imgId] == "height" || this.state.imgTypes[imgId] == "square")) {
                    imgCols.push(
                            <BootstrapImage fluid src = {require(`../assets/${this.state.images[imgId]}`)} className="mx-auto w-auto d-block" />
                    );
                } else if(this.state.begin && this.state.imgTypes[imgId] == "width" && this.state.windowWidth > 992) {
                    imgRows.push(
                            <Col className="my-auto">
                                <BootstrapImage fluid src={require(`../assets/${this.state.images[imgId]}`)} className="mx-auto w-auto d-block"/>
                            </Col>
                    );
                } else {
                    imgCols.push(
                        <BootstrapImage fluid src = {require(`../assets/${this.state.images[imgId]}`)} className="mx-auto w-auto d-block" />
                    );
                }
            }
            rows.push(
                    <Row className="d-flex justify-content-center">
                        {imgCols.map((key, index) => (
                            <Col className="my-auto">{key}</Col>
                        ))}
                        {imgRows.length > 0 && <Col>
                        {imgRows.map((key, index) => (
                            <Row className="my-1">{key}</Row>
                        ))}
                        </Col>}
                    </Row>

            );
        } else if (this.state.video) {
            rows.push(
                <Row>
                    <Col>
                        {this.state.video &&
                            <ResponsiveEmbed aspectRatio="16by9">
                                <embed src={this.state.video} />
                            </ResponsiveEmbed>
                        }
                        <br/>
                    </Col>
                </Row>
            );
        }
        
        // if (this.state.images && Object.keys(this.state.images).length > 0) {
        //     rows.push(
        //         <Row>
        //             {Object.keys(this.state.images).map((key, index) => (
        //                 <Col className="my-auto">
        //                     <BootstrapImage fluid src = {require(`../assets/${this.state.images[key]}`)} className="mx-auto w-auto d-block" />
        //                 </Col>
        //             ))}
        //         </Row>
        //     );
        // }
        
        if (this.state.buttons) {
            for (var i = 0; i<Object.keys(this.state.buttons).length; i++) {
                rows.push(
                    <Row>
                        <Col className="justify-content-center d-flex">
                            <a target="_blank" href={this.state.buttons[Object.keys(this.state.buttons)[i]]}><Button className="button-dark mx-1 my-2">{Object.keys(this.state.buttons)[i]}</Button></a>
                        </Col>
                    </Row>
                );
            }
        }

        return (
            <Col className="my-auto">
                {rows}
            </Col>
        );
    }

    renderPost() {
        if(this.props.index % 2 == 0 || this.state.windowWidth <= 992) {
            return(
                <Row className="my-5">
                    {this.getPostText()}
                    {this.getPostMedia()}
                </Row>
            );
        } else {
            return(
                <Row className="my-5">
                    {this.getPostMedia()}
                    {this.getPostText()}
                </Row>
            );
        }
    }

    render() {
        return(
            <div>
                {this.renderPost()}
            </div>
        );
    }
}

export default Post;