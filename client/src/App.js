import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/layouts/TopNav"
import SideNavbar from './components/SideNavbar/SideNavbar';
import MainContent from './components/MainContent/MainContent';
import Alerts from "./components/layouts/Alerts"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import PostForm from "./components/posts/PostForm" ;
import Authors from "./components/SideNavbar/Authors/Authors";
import MissionStatement from "./components/SideNavbar/MissionStatement/MissionStatement";
import AlertState from "./context/alert/AlertState"
import AuthState from "./context/auth/AuthState"
import PostsState from "./context/posts/PostsState"
require("dotenv").config()

// use normal bootstrap if required. give yarn add bootstrap for below...
// import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <AuthState>
        <PostsState>
          <AlertState>
            <Router>
              <Alerts />
                <Switch>
                  <Route exact path="/" render={(props)=>(<div><TopNav {...props}/><div className="d-flex" id="wrapper"><SideNavbar /><MainContent /></div></div>)} />
                  <Route exact path="/register" render={(props)=>(<div><TopNav {...props}/><div className="d-flex" id="wrapper"><Register {...props}/></div></div>)} />
                  <Route exact path="/login" render={(props)=>(<div><TopNav {...props}/><div className="d-flex" id="wrapper"><Login {...props}/></div></div>)} />
                  <Route exact path="/post" render={(props)=>(<div><TopNav {...props}/><div className="d-flex" id="wrapper"><SideNavbar /><PostForm {...props}/></div></div>)} />
                  <Route exact path="/Authors" render={(props)=>(<div><TopNav {...props}/><div className="d-flex" id="wrapper"><SideNavbar /><Authors /></div></div>)} />
                  <Route exact path="/MissionStatement" render={(props)=>(<div><TopNav {...props}/><div className="d-flex" id="wrapper"><SideNavbar /><MissionStatement /></div></div>)} />
                </Switch>
            </Router>
          </AlertState>
        </PostsState>
      </AuthState>
    );
  }
}

export default App;
