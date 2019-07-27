import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/layouts/TopNav"
import SideNavbar from './components/SideNavbar/SideNavbar';
import MainContent from './components/MainContent/MainContent';
import Alerts from "./components/layouts/Alerts"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import CreatePost from "../src/components/CreatePost/CreatePost";
import Authors from "./components/SideNavbar/Authors/Authors";
import MissionStatement from "./components/SideNavbar/MissionStatement/MissionStatement";
import AlertState from "./context/alert/AlertState"
import AuthState from "./context/auth/AuthState"
require("dotenv").config()

// use normal bootstrap if required. give yarn add bootstrap for below...
// import "bootstrap/dist/css/bootstrap.min.css";

const App = props => {
console.log(process.env.REACT_APP_UPLOAD_CLOUDNAME)
  return (
    <AuthState>
      <AlertState>
        <Router>
          <TopNav />
          <Alerts />
            <Switch>
              <Route exact path="/" component={()=>(<div className="d-flex" id="wrapper"><SideNavbar /><MainContent /></div>)} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/post" component={()=>(<div className="d-flex" id="wrapper"><SideNavbar /><CreatePost /></div>)} />
              <Route exact path="/Authors" component={()=>(<div className="d-flex" id="wrapper"><SideNavbar /><Authors /></div>)} />
              <Route exact path="/MissionStatement" component={()=>(<div className="d-flex" id="wrapper"><SideNavbar /><MissionStatement /></div>)} />
            </Switch>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
