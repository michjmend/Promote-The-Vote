import React, { useContext, Fragment } from "react";
// eslint-disable-next-line
import {BrowserRouter as Router, Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext"
import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './SideNavbar.css';
import './simple-sidebar.css';



const SideNavbar = () => {
const authContext = useContext(AuthContext)
const { isAuthenticated } = authContext

const signedIn = (
  <Fragment>
    <Link className="btn btn-danger btn-lg btn-block" to="/post">Post <i className="fas fa-sign-in-alt "></i></Link>
  </Fragment>
)
const guestUser = (
  <Fragment>
    <Link className="btn btn-danger btn-lg btn-block" to="/Login">Sign in to Post! <i className="fas fa-sign-in-alt "></i></Link>
  </Fragment>
)

  return (
    <div id="SideNavbar">
      <div className="border-right" id="sidebar-wrapper">
        {isAuthenticated ? signedIn : guestUser}
        <div className="list-group list-group-flush">
          <h5 className="sidebartitle"><u>Resources:</u></h5>
            <a className="list-group-item list-group-item-action" href="https://www.vote.org/am-i-registered-to-vote/?gclid=CjwKCAjw67XpBRBqEiwA5RCoceIDFFk-I4kBVE0THh5h3uIy43Xz0PTnF307YSpg3frm0KyQYtdbIRoCKhYQAvD_BwE" target="_blank" rel="noopener noreferrer">Register: How and Where?</a>
            <a className="list-group-item list-group-item-action" href="https://www.vote.org/absentee-voting-rules/" target="_blank" rel="noopener noreferrer">Early Bird Voter</a>
          <h5 className="sidebartitle"><u>More Information:</u></h5>
            <a className="list-group-item list-group-item-action" href="https://graphics.reuters.com/USA-ELECTION/010091471JC/index.html" target="_blank" rel="noopener noreferrer">Who is running in 2020?</a>
            <a className="list-group-item list-group-item-action" href="https://www.270towin.com/" target="_blank" rel="noopener noreferrer">Electoral College Map</a>
          <h5 className="sidebartitle"><u>Other Links:</u></h5>
            <a className="list-group-item list-group-item-action" href="https://www.isidewith.com/political-quiz" target="_blank" rel="noopener noreferrer">2019 Political Quiz</a>
            <a className="list-group-item list-group-item-action" href="https://carpoolvote.com/" target="_blank" rel="noopener noreferrer">Need a ride to the Polls?</a>
          {/* <h5 className="sidebartitle"><u>Our Partners:</u></h5>
            <a className="list-group-item list-group-item-action" href="" target="_blank">Partner 1</a>
            <a className="list-group-item list-group-item-action" href="" target="_blank">Partner 2</a> */}
          <h5 className="sidebartitle"><u>About Us:</u></h5>
          <Link className="list-group-item list-group-item-action" to="/Authors">Authors</Link>
          <Link className="list-group-item list-group-item-action" to="/MissionStatement">Mission Statement</Link>
          <Container>
            <Row>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/michjmend/Promote-The-Vote" alt="promote the vote github"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/github.png" /></a>
              <Link className="" to="/Register"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/add-user-group-woman-man.png" /></Link>
              <Link className="" to="/Login"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/gender-neutral-user.png" /></Link>
            </Row>
            <Row>
              <footer className="sidebartitle">
                Copyright &copy; 2019
              </footer>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
