import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MM from '../../../components/SideNavbar/Authors/MM.png';
import AT from '../../../components/SideNavbar/Authors/AT.jpg';
import SY from '../../../components/SideNavbar/Authors/SY.jpg';
import KD from '../../../components/SideNavbar/Authors/KD.png';
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
                Hey America, we are extremely proud of our Promote the Vote project. We have worked hard to help encourage all eligible voters find their way to the polls! We want your voice to be heard.
              </p>
              <p>
                Below are all who contributed to Promote the Vote. <img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/usa.png"></img>
              </p>
              <p>
                Feedback is welcomed on our gitHub page <i className="fas fa-arrow-right"></i><a target="_blank" rel="noopener noreferrer" href="https://github.com/michjmend/Promote-The-Vote" alt="promote the vote github"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/github.png" /></a>
              </p>
              {/* andrew */}
              <Row>
                <Col md={3}>
                  <img className="Photo" src={AT} alt="AT pic" />
                </Col>
                <Col md={9}>
                  <h2>Andrew Tirpok</h2>
                  <Row>
                    <Col>
                      Portfolio: <a className="contactLink" target="_blank" rel="noopener noreferrer" href="https://androosk.github.io/Andrew-Tirpok/"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/moleskine.png" /></a>
                    </Col>
                    {/* <Col>
                          Resume: <a className="contactLink" target="_blank" href="#"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/resume.png" /></a>
                        </Col> */}
                  </Row>
                  <Row>
                    <Col>
                      Contact:
                      <a className="contactLink" href="mailto:atirpok3@gmail.com"><i className="far fa-envelope"></i></a>
                      <a className="contactLink" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andrew-tirpok-05296815/"><i className="fab fa-linkedin-in"></i></a>
                      <a className="contactLink" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/androosk/"><i className="fab fa-instagram"></i></a>
                      <a className="contactLink" target="_blank" rel="noopener noreferrer" href="https://github.com/androosk"><i className="fab fa-github"></i></a>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {/* kristen */}
              <Row>
                <Col md={3}>
                  <img className="Photo" src={KD} alt="KD pic" />
                </Col>
                <Col md={9}>
                  <h2>Kristen De La Rosa</h2>
                  <Row>
                    <Col>
                      Portfolio: <a className="contactLink" target="_blank" rel="noopener noreferrer" href="https://kristendlr.github.io/updatedPortfolio/"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/moleskine.png" /></a>
                      Resume: <a className="contactLink" target="_blank" rel="noopener noreferrer" href="https://dochub.com/kristendelarosac13285b8/rxPn9R/2019-web-dev-k-de-la-rosa-resume?dt=vaqg4i8sZQ5vPM1zWimo"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/resume.png" /></a>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Contact:
                      <a className="contactLink" href="mailto:delarosa.kristen@gmail.com"><i className="far fa-envelope"></i></a>
                      <a className="contactLink" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kris10-de-la-rosa/"><i className="fab fa-linkedin-in"></i></a>
                      {/* <a className="contactLink" target="_blank" href="#"><i className="fab fa-facebook-f"></i></a> */}
                      {/* <a className="contactLink" target="_blank" href="#"><i className="fab fa-instagram"></i></a> */}
                      <a className="contactLink" target="_blank" rel="noopener noreferrer" href="https://github.com/KristenDLR"><i className="fab fa-github"></i></a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            {/* michelle   */}
              <Row>
                <Col md={3}>
                  <img className="Photo" src={MM} alt="MM pic" />
                </Col>
                <Col md={9}>
                  <h2>Michelle Mendieta</h2>
                  <Row>
                    <Col>
                      Portfolio: <a className="contactLink" target="_blank" rel="noopener noreferrer" href="https://michjmend.github.io/My-Portfolio/"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/moleskine.png" /></a>
                      Resume: <a className="contactLink" target="_blank" href="https://drive.google.com/file/d/1nRybEoXn_9ya_HZ8UyjMiynaTkDZKw-n/view?usp=sharing"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/resume.png" /></a>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Contact:
                      <a className="contactLink" href="mailto:michjmend@gmail.com"><i className="far fa-envelope"></i></a>
                      <a className="contactLink" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michelle-j-mendieta"><i className="fab fa-linkedin-in"></i></a>
                      <a className="contactLink" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/michjmend/?hl=en"><i className="fab fa-instagram"></i></a>
                      <a className="contactLink" target="_blank" rel="noopener noreferrer" href="https://github.com/michjmend"><i className="fab fa-github"></i></a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            {/* sushmita */}
              <Row>
                <Col md={3}>
                  <img className="Photo" src={SY} alt="SY pic" />
                </Col>
                <Col md={9}>
                  <h2>Sushmita Yande</h2>
                  <Row>
                    <Col>
                      Portfolio: <a className="contactLink" target="_blank" rel="noopener noreferrer" href="https://fullstack-sy.github.io/Portfolio/."><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/moleskine.png" /></a>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Contact:
                      <a className="contactLink" href="mailto:sushmitayande@gmail.com"><i className="far fa-envelope"></i></a>
                      <a className="contactLink" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sushmita-yande-53bbb817b/"><i className="fab fa-linkedin-in"></i></a>
                      <a className="contactLink" target="_blank" rel="noopener noreferrer" href="https://github.com/FULLSTACK-SY"><i className="fab fa-github"></i></a>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <h1 className="text-center">
                Thank you for visiting!
              </h1>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Authors;
