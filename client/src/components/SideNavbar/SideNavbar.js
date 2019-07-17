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
        <div className="list-group list-group-flush">
          <Link className="list-group-item list-group-item-action">Resources</Link>
          <Link className="list-group-item list-group-item-action">More Information</Link>
          <Link className="list-group-item list-group-item-action">Post</Link>
          <Link className="list-group-item list-group-item-action">Other Link</Link>
          <Link className="list-group-item list-group-item-action">Our partners</Link>
          <Link className="list-group-item list-group-item-action">About Us</Link>
          <Link to="/" className="list-group-item list-group-item-action">Display Posts</Link>
          <Link to="/ceate" className="list-group-item list-group-item-action">Create New Post</Link>
          <Link to="/edit" className="list-group-item list-group-item-action">Edit Post</Link>
          <Link to="/delete" className="list-group-item list-group-item-action">Delete Post</Link>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
