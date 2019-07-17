import Wrapper from "./components/Wrapper/Wrapper";
import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import SideNavbar from './components/SideNavbar/SideNavbar';
import MainContent from './components/MainContent/MainContent';

// use normal bootstrap if required. give yarn add bootstrap for below...
// import "bootstrap/dist/css/bootstrap.min.css";

 function App() {
  return (
    <Router>
      <>
         <Wrapper>
          <Container>
            <Row>
              <Col>
                <h1>Promote The Vote</h1>
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
