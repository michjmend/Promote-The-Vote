import React from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreatePost from "../CreatePost/CreatePost";
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
          <h4 className="text-white"><u>Our Partners:</u></h4>
          <h4 className="text-white"><u>About Us:</u></h4>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
