import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom";
import DisplayPosts from "../DisplayPosts";
import CreatePost from "../CreatePost";
import EditPost from "../EditPost";
import DeletePost from "../DeletePost";
import Scrapper from "../Scrapper/Scrapper";
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
                  <h1 className="mt-4">VIDEO CONTENT HERE</h1>
                  <div className="card-deck">
                    <div className="card">
                      <img src="..." className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <img src="..." className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This card has supporting text below as a natural
                          lead-in to additional content.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <img src="..." className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This card has
                          even longer content than the first to show that equal
                          height action.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* stuff sushmita put in */}
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Display Posts</Link>
                      </li>
                      <li>
                        <Link to="/create">Create New Post</Link>
                      </li>
                      <li>
                        <Link to="/edit">Edit Post</Link>
                      </li>
                      <li>
                        <Link to="/delete">Delete Post</Link>
                      </li>
                    </ul>
                  </nav>
                  <Route path="/" exact component={DisplayPosts} />
                  <Route path="/create" component={CreatePost} />
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
