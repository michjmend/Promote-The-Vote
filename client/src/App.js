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
import AlertState from "./context/alert/AlertState"
import AuthState from "./context/auth/AuthState"

// use normal bootstrap if required. give yarn add bootstrap for below...
// import "bootstrap/dist/css/bootstrap.min.css";

const App = props => {

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
            </Switch>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
