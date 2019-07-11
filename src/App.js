import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';

import DisplayPosts from "./components/DisplayPosts";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import DeletePost from "./components/DeletePost";


// use normal bootstrap if required. give yarn add bootstrap for below...
// import "bootstrap/dist/css/bootstrap.min.css";

 import logo from './logo.svg';

function App() {
  return (
      <Router>
        <>
          <h2>Promote-The-Vote</h2>
          <nav>
              <img src={logo} width="30" height="30" alt="PromoteTheVote" />
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
        </>
      </Router>
  );
}

export default App;
