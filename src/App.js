import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import SideNavbar from './components/SideNavbar/SideNavbar';
import MainContent from './components/MainContent/MainContent';
import logo from './logo.svg';
// use normal bootstrap if required. give yarn add bootstrap for below...
// import "bootstrap/dist/css/bootstrap.min.css";
 function App() {
  return (
    <Router>
      <>
      <h2>Promote-The-Vote with a flying eagle across the top maybe. idk we'll see lol we'll put it in icebobx</h2><img src={logo} width="30" height="30" alt="PromoteTheVote" />
        <div className="d-flex" id="wrapper">
          <SideNavbar />
          <MainContent />
        </div>
      </>
    </Router>
  );
}

export default App;
