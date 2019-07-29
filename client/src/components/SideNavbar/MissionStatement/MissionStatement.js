import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import './MissionStatement.css';
import "bootstrap/dist/css/bootstrap.min.css";

class MissionStatement extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="MissionStatement card">
              <h1 className="navyWord text-center">Our Mission</h1>
              <h4 className="text-center"><i class="fas fa-flag-usa"></i> <span className="navyWord">P R O M O T E </span><i class="fas fa-flag-usa"></i> <span className="navyWord">T H E </span><i class="fas fa-flag-usa"></i> <span className="navyWord">V O T E </span><i class="fas fa-flag-usa"></i></h4>
              <p className="blue">
                Almost 92 million eligible Americans did not vote in the 2016 presidential elections. In the 2014 midterm elections, an estimated 143 million eligible Americans failed to vote, marking the lowest voter participation in 72 years. For the nation’s democracy to function properly and for government to provide fair representation, all eligible Americans must have the opportunity to vote—and be encouraged to do so. Our collective self-rule is established and fostered through free, fair, accessible, and secure elections through which the voice of every eligible American is heard.
              </p>
              <p className="red">
                This application will provide a platform for actual, US citizens to communicate with others about why they vote and believe that voting is important.
              </p>
              <p className="blue">
                For someone feeling disenfranchised from our system, like their vote doesn’t matter, they can go to this site to communicate with other people in a similar state of mind, and also share their story. At the site, verifiably registered voters will be able to find resources that will help them vote. Those that are not registered will be provided with resources that will either allow them to register online if applicable, or give them appropriate forms and direct them where to go to register. This app will be moderated to provide as judgment free as possible environment for social interaction around our democracy.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default MissionStatement;
