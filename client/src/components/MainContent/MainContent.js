import React from "react";
//import { BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import DisplayPosts from "../posts/DisplayPosts";

import Scrapper from "../Scraper/Scraper";
// import ReactDOM from "react-dom";
// import EditPost from "../EditPost";
// import DeletePost from "../DeletePost";
// use normal bootstrap if required. give yarn add bootstrap for below...
// import "bootstrap/dist/css/bootstrap.min.css";


const MainContent = () => {

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={9}>
            <div id="page-content-wrapper">
              <div className="container-fluid">
                <DisplayPosts />
              </div>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <Scrapper />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default MainContent;
