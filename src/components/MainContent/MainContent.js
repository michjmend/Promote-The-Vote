import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import DisplayPosts from "../DisplayPosts";
import CreatePost from "../CreatePost";
import EditPost from "../EditPost";
import DeletePost from "../DeletePost";
// use normal bootstrap if required. give yarn add bootstrap for below...
// import "bootstrap/dist/css/bootstrap.min.css";

function MainContent() {
  return (
    <Router>
    <>
    <div id="page-content-wrapper">

      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button className="btn btn-primary" id="menu-toggle">Toggle Menu</button>
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
      <div className="container-fluid">
        <h1 className="mt-4">VIDEO CONTENT HERE</h1>

{/* stuff sushmita put in */}
        <nav>
          <ul>
            <li>
              <Link to='/'>Display Posts</Link>
            </li>
            <li>
              <Link to='/create'>Create New Post</Link>
            </li>
            <li>
              <Link to='/edit'>Edit Post</Link>
            </li>
            <li>
              <Link to='/delete'>Delete Post</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={DisplayPosts} />
        <Route path="/create" component={CreatePost} />
        <Route path="/edit/:id" component={EditPost} />
        <Route path="/delete/:id" component={DeletePost} />



      </div>
    </div>
    </>
    </Router>
  )
}

export default MainContent;
