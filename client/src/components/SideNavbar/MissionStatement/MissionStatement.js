import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import './MissionStatement.css';
import "bootstrap/dist/css/bootstrap.min.css";

class MissionStatement extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="MissionStatement">
              <div className="card">
                <h1 className="navyWord text-center">Our Mission</h1>
                <h4 className="text-center"><i className="fas fa-flag-usa"></i> <span className="navyWord">P R O M O T E </span><i className="fas fa-flag-usa"></i> <span className="navyWord">T H E </span><i className="fas fa-flag-usa"></i> <span className="navyWord">V O T E </span><i className="fas fa-flag-usa"></i></h4>
              </div>
              <div className="missionContent card">
                <p>
                 Financial Times records total voting age population at 245.5 million people. 157.6 million Americans are registered to vote, but the turnout for the November 2016 election only accounted 136.8 million votes.
                </p>
                <p>
                  This application was created to provide a platform for  US citizens to communicate with others about why they vote and how they better prepare themselves.
                </p>
                <p>
                  We hope to better prepare individuals that feel disenfranchised from our system, or are concerned their vote doesn’t matter. We hope this site helps citizens to communicate the importance of voting in our democracy and provide the opportunity to share their story. At the site, voters will be able to find resources and better prepare themselves in the voting experience. This app will be moderated to provide as judgment free as possible environment for social interaction around our democracy.
                </p>
              </div>
              <div className="video">
              <iframe width="560" height="315" title="promotevote" src="https://www.youtube.com/embed/9-IgaqXjl24" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default MissionStatement;
