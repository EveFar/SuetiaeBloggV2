import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';


export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <Container>
            <Jumbotron>
                <h2>Hello, world!</h2>
                <p>Welcome to your new single-page application, built with:</p>
            </Jumbotron>
        </Container>
    );
  }
}
