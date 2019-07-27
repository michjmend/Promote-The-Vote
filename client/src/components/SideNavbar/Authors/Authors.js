import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Contributors from '../../../components/SideNavbar/Authors/Contributors.png';
import "bootstrap/dist/css/bootstrap.min.css";
class Authors extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="card">
              <h1>Contributers</h1>
              <img src={Contributors} alt="logo" />
              <h3>Andrew Tirpok</h3>
              <Container>
                <h6>Contact:</h6>
                <Row>
                  <Col>
                    <a href="mailto:"><i class="far fa-envelope fa-2x"></i></a>
                    <a target="_blank" href=""><i class="fab fa-linkedin-in fa-2x"></i></a>
                    <a target="_blank" href=""><i class="fab fa-facebook-f fa-2x"></i></a>
                    <a target="_blank" href=""><i class="fab fa-instagram fa-2x"></i></a>
                    <a target="_blank" href=""><i class="fab fa-github fa-2x"></i></a>
                  </Col>
                </Row>
              </Container>
              <h3>Kristen De La Rosa</h3>
              <Container>
                <h6>Contact:</h6>
                <Row>
                  <Col>
                    <a href="mailto:"><i class="far fa-envelope fa-2x"></i></a>
                    <a target="_blank" href=""><i class="fab fa-linkedin-in fa-2x"></i></a>
                    <a target="_blank" href=""><i class="fab fa-facebook-f fa-2x"></i></a>
                    <a target="_blank" href=""><i class="fab fa-instagram fa-2x"></i></a>
                    <a target="_blank" href=""><i class="fab fa-github fa-2x"></i></a>
                  </Col>
                </Row>
              </Container>
              <h3>Sushmita Yande</h3>
              <Container>
                <h6>Contact:</h6>
                <Row>
                  <Col>
                    <a href="mailto:"><i class="far fa-envelope fa-2x"></i></a>
                    <a target="_blank" href=""><i class="fab fa-linkedin-in fa-2x"></i></a>
                    <a target="_blank" href=""><i class="fab fa-facebook-f fa-2x"></i></a>
                    <a target="_blank" href=""><i class="fab fa-instagram fa-2x"></i></a>
                    <a target="_blank" href=""><i class="fab fa-github fa-2x"></i></a>
                  </Col>
                </Row>
              </Container>
              <h3>Michelle Mendieta</h3>
              <Container>
                <h6>Contact:</h6>
                <Row>
                  <Col>
                    <a href="mailto:michjmend@gmail.com"><i class="far fa-envelope fa-2x"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/michelle-j-mendieta"><i class="fab fa-linkedin-in fa-2x"></i></a>
                    <a target="_blank" href="https://www.facebook.com/michelle.mendieta.52"><i class="fab fa-facebook-f fa-2x"></i></a>
                    <a target="_blank" href="https://www.instagram.com/michjmend/?hl=en"><i class="fab fa-instagram fa-2x"></i></a>
                    <a target="_blank" href="https://github.com/michjmend"><i class="fab fa-github fa-2x"></i></a>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Authors;
