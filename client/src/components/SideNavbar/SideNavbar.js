import React from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './SideNavbar.css';
import './simple-sidebar.css';

function SideNavbar() {
  return (
    <div id="SideNavbar">
      <div className="border-right" id="sidebar-wrapper">
        <div className="sidebar-heading text-white">INSERT LOGO HERE?</div>
        <button className="btn btn-danger">POST</button>
          <h4 className="text-white">Resources:</h4>
            <a className="list-group-item list-group-item-action" href="https://www.vote.org/am-i-registered-to-vote/?gclid=CjwKCAjw67XpBRBqEiwA5RCoceIDFFk-I4kBVE0THh5h3uIy43Xz0PTnF307YSpg3frm0KyQYtdbIRoCKhYQAvD_BwE" target="_blank">Register: How and Where?</a>
            <a className="list-group-item list-group-item-action" href="https://www.vote.org/absentee-voting-rules/" target="_blank">Early Bird Voter</a>
          <h4 className="text-white">More Information:</h4>
            <a className="list-group-item list-group-item-action" href="https://graphics.reuters.com/USA-ELECTION/010091471JC/index.html" target="_blank">Who is running in 2020?</a>
            <a className="list-group-item list-group-item-action" href="https://www.270towin.com/" target="_blank">Electoral College Map</a>
          <h4 className="text-white">Other Links:</h4>
          <h4 className="text-white">Our Partners:</h4>
          <h4 className="text-white">About Us:</h4>
        </div>
      </div>
  );
}

export default SideNavbar;
