import Wrapper from "./components/Wrapper/Wrapper";
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import { Container, Row, Col } from "react-bootstrap";
import './App.css';



function App() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
          <h1>Promote The Vote</h1>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
  }



export default App;
