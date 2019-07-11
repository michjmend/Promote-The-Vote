import React from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './SideNavbar.css';

function SideNavbar() {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">INSERT LOGO HERE?</div>
      <div className="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action bg-light">Resources</Link>
        <Link className="list-group-item list-group-item-action bg-light">More Information</Link>
        <Link className="list-group-item list-group-item-action bg-light">Post</Link>
        <Link className="list-group-item list-group-item-action bg-light">Other Link</Link>
        <Link className="list-group-item list-group-item-action bg-light">Our partners</Link>
        <Link className="list-group-item list-group-item-action bg-light">About Us</Link>
        <Link to="/" className="list-group-item list-group-item-action bg-light">Display Posts</Link>
        <Link to="/ceate" className="list-group-item list-group-item-action bg-light">Create New Post</Link>
        <Link to="/edit" className="list-group-item list-group-item-action bg-light">Edit Post</Link>
        <Link to="/delete" className="list-group-item list-group-item-action bg-light">Delete Post</Link>
      </div>
    </div>
  );
}

export default SideNavbar;
