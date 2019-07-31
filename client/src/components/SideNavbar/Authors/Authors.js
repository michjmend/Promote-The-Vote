import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MM from '../../../components/SideNavbar/Authors/MM.png';
import SY from '../../../components/SideNavbar/Authors/SY.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import './Authors.css';
class Authors extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="Authors card">
              <h1 className="text-center">Authors</h1>
              <p>
                Hey America, we are extremely proud of our Promote the Vote project. We have worked hard to help encourage all eligible voter find their way to the polls! We want your voice to be heard.
              </p>
              <p>
                Below are all who contributed to Promote the Vote. <img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/usa.png"></img> Feedback is welcomed on our gitHub page <i class="fas fa-arrow-right"></i><a target="_blank" href="https://github.com/michjmend/Promote-The-Vote" alt="promote the vote github"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/github.png" /></a> Thank you for visiting!
              </p>
              <Row>
                <Col>
                  <Row>
                    <Col md={3}>
                      {/* <img className="Photo" src={} alt="AT pic" /> */}
                    </Col>
                    <Col md={9}>
                      <h3>Andrew Tirpok</h3>
                      <Row>
                        <Col>
                          Portfolio: <a className="contactLink" target="_blank" href="#"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/moleskine.png" /></a>
                        </Col>
                        <Col>
                          Resume: <a className="contactLink" target="_blank" href="#"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/resume.png" /></a>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          Contact:
                            <a className="contactLink" href="mailto:michjmend@gmail.com"><i class="far fa-envelope"></i></a>
                            <a className="contactLink" target="_blank" href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a className="contactLink" target="_blank" href="#"><i class="fab fa-facebook-f"></i></a>
                            <a className="contactLink" target="_blank" href="#"><i class="fab fa-instagram"></i></a>
                            <a className="contactLink" target="_blank" href="#"><i class="fab fa-github"></i></a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      {/* <img className="Photo" src={} alt="KD pic" /> */}
                    </Col>
                    <Col md={9}>
                      <h3>Kristen De La Rosa</h3>
                      <Row>
                        <Col>
                          Portfolio: <a className="contactLink" target="_blank" href="#"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/moleskine.png" /></a>
                        </Col>
                        <Col>
                          Resume: <a className="contactLink" target="_blank" href="#"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/resume.png" /></a>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          Contact:
                            <a className="contactLink" href="mailto:michjmend@gmail.com"><i class="far fa-envelope"></i></a>
                            <a className="contactLink" target="_blank" href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a className="contactLink" target="_blank" href="#"><i class="fab fa-facebook-f"></i></a>
                            <a className="contactLink" target="_blank" href="#"><i class="fab fa-instagram"></i></a>
                            <a className="contactLink" target="_blank" href="#"><i class="fab fa-github"></i></a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col md={3}>
                      <img className="Photo" src={SY} alt="SY pic" />
                    </Col>
                    <Col md={9}>
                      <h3>Sushmita Yande</h3>
                      <Row>
                        <Col>
                          Portfolio: <a className="contactLink" target="_blank" href="https://fullstack-sy.github.io/Portfolio/."><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/moleskine.png" /></a>
                        </Col>
                        <Col>

                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          Contact:
                            <a className="contactLink" href="mailto:sushmitayande@gmail.com"><i class="far fa-envelope"></i></a>
                            <a className="contactLink" target="_blank" href="https://www.linkedin.com/in/sushmita-yande-53bbb817b/"><i class="fab fa-linkedin-in"></i></a>


                            <a className="contactLink" target="_blank" href="https://github.com/FULLSTACK-SY"><i class="fab fa-github"></i></a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <img className="Photo" src={MM} alt="MM pic" />
                    </Col>
                    <Col md={9}>
                      <h3>Michelle Mendieta</h3>
                      <Row>
                        <Col>
                          Portfolio: <a className="contactLink" target="_blank" href="https://michjmend.github.io/My-Portfolio/"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/moleskine.png" /></a>
                        </Col>
                        {/* <Col>
                          Resume: <a className="contactLink" target="_blank" href="#"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/resume.png" /></a>
                        </Col> */}
                      </Row>
                      <Row>
                        <Col>
                          Contact:
                            <a className="contactLink" href="mailto:michjmend@gmail.com"><i class="far fa-envelope"></i></a>
                            <a className="contactLink" target="_blank" href="https://www.linkedin.com/in/michelle-j-mendieta"><i class="fab fa-linkedin-in"></i></a>
                            {/* <a className="contactLink" target="_blank" href="https://www.facebook.com/michelle.mendieta.52"><i class="fab fa-facebook-f"></i></a> */}
                            <a className="contactLink" target="_blank" href="https://www.instagram.com/michjmend/?hl=en"><i class="fab fa-instagram"></i></a>
                            <a className="contactLink" target="_blank" href="https://github.com/michjmend"><i class="fab fa-github"></i></a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Authors;
