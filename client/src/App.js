import Wrapper from "./components/Wrapper/Wrapper";
import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import SideNavbar from './components/SideNavbar/SideNavbar';
import MainContent from './components/MainContent/MainContent';
import $ from 'jquery';
import axios from 'axios';
// use normal bootstrap if required. give yarn add bootstrap for below...
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const toggle = e => {
    e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  }

  return (
    <Router>
      <>
        <Wrapper>
          <Container fluid="true">
            <Row>
              <Col>
                <h1>Promote The Vote</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <nav className="navbar navbar-expand-lg border-bottom">
                  <button className="btn btn-danger" onClick={ toggle } id="menu-toggle">
                    MENU
                  </button>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                      <li className="nav-item active">
                        <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">Login</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </Col>
            </Row>
          </Container>
        </Wrapper>

        <div className="d-flex" id="wrapper">
          <SideNavbar />
          <MainContent />
        </div>
      </>
    </Router>

  );
}

export default App;
