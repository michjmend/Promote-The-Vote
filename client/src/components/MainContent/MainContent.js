import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom";
import DisplayPosts from "../DisplayPosts";
import EditPost from "../EditPost";
import DeletePost from "../DeletePost";
import Scrapper from "../Scraper/Scraper";
// use normal bootstrap if required. give yarn add bootstrap for below...
// import "bootstrap/dist/css/bootstrap.min.css";
function MainContent() {
  return (
    <Router>
      <>
        <Container>
          <Row>
            <Col xs={12} md={9}>
              <div id="page-content-wrapper">
                <div className="container-fluid">

                  <div className="card mb-3">
                    <img src="https://media.giphy.com/media/ByVCdBesCZHi0/giphy.gif" height="100%" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                      {/* <Link className="btn btn-outline-danger" to="/">Display Posts</Link> */}
                      <Link to="/edit/:id" className="btn btn-primary"><i class="fas fa-edit"></i></Link>
                      <Link to="/delete/:id" className="btn btn-danger"><i class="fas fa-trash-alt"></i></Link>
                    </div>
                  </div>

                  {/* stuff sushmita put in */}
                  {/* <Route path="/" exact component={DisplayPosts} /> */}

                  <Route path="/edit/:id" component={EditPost} />
                  <Route path="/delete/:id" component={DeletePost} />
                </div>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <Scrapper />
            </Col>
          </Row>
        </Container>
      </>
    </Router>
  );
}
export default MainContent;
