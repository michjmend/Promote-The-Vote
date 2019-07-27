import React from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreatePost from "../CreatePost/CreatePost";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './SideNavbar.css';
import './simple-sidebar.css';

function SideNavbar() {
  return (
    <div id="SideNavbar">
      <div className="border-right" id="sidebar-wrapper">
        {/* <div className="sidebar-heading text-white">INSERT LOGO HERE?</div> */}
        <Link className="btn btn-danger btn-lg btn-block" to="/post">Post <i className="fas fa-sign-in-alt "></i></Link>
        <div className="list-group list-group-flush">
          <h4 className="text-white"><u>Resources:</u></h4>
            <a className="list-group-item list-group-item-action" href="https://www.vote.org/am-i-registered-to-vote/?gclid=CjwKCAjw67XpBRBqEiwA5RCoceIDFFk-I4kBVE0THh5h3uIy43Xz0PTnF307YSpg3frm0KyQYtdbIRoCKhYQAvD_BwE" target="_blank">Register: How and Where?</a>
            <a className="list-group-item list-group-item-action" href="https://www.vote.org/absentee-voting-rules/" target="_blank">Early Bird Voter</a>
          <h4 className="text-white"><u>More Information:</u></h4>
            <a className="list-group-item list-group-item-action" href="https://graphics.reuters.com/USA-ELECTION/010091471JC/index.html" target="_blank">Who is running in 2020?</a>
            <a className="list-group-item list-group-item-action" href="https://www.270towin.com/" target="_blank">Electoral College Map</a>
          <h4 className="text-white"><u>Other Links:</u></h4>
            <a className="list-group-item list-group-item-action" href="https://www.isidewith.com/political-quiz" target="_blank">2019 Political Quiz</a>
            <a className="list-group-item list-group-item-action" href="https://carpoolvote.com/" target="_blank">Need a ride to the Polls?</a>
          <h4 className="text-white"><u>Our Partners:</u></h4>
            <a className="list-group-item list-group-item-action" href="" target="_blank">Partner 1</a>
            <a className="list-group-item list-group-item-action" href="" target="_blank">Partner 2</a>
          <h4 className="text-white"><u>About Us:</u></h4>
          <Link className="list-group-item list-group-item-action" to="/Authors">Authors</Link>
          <Link className="list-group-item list-group-item-action" to="/MissionStatement">Mission Statement</Link>
          <Container>
            <Row>
              <a href="https://github.com/michjmend/Promote-The-Vote" alt="promote the vote github"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/github.png" /></a>
              <Link className="" to="/Register"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/add-user-group-woman-man.png" /></Link>
              <Link className="" to="/Login"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/gender-neutral-user.png" /></Link>
            </Row>
          </Container>
        </div>
      </div>
      <footer className="text-white text-center">
        Copyright &copy; 2019
      </footer>
    </div>
  );
}

export default SideNavbar;
