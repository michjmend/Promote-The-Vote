import React, { Fragment, useContext } from 'react'
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Wrapper from "../Wrapper/Wrapper";
import logo from './logo.png';
import { Container, Row, Col } from "react-bootstrap";
import AuthContext from "../../context/auth/authContext"
import $ from 'jquery';
import './logo.css';
// import PostContext from "../../context/post/postContext"

const TopNav = () => {
  const authContext = useContext(AuthContext)
  console.log(authContext)
  // const postContext = useContext(PostContext)
  const { logout, user, isAuthenticated } = authContext

  const onLogout = () => {
    logout()
  }

  const toggle = e => {
    e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  }

  const authLinks = (
    <Fragment>
      <li>
        Hello { user && user.firstname }
      </li>
      <li>
        <a onClick={ onLogout } href="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  )
  const guestLinks = (
    <Fragment>
      <li  className="nav-item">
        <Link className="btn btn-outline-danger nav-link" to="/Register"><i class="fas fa-user-plus"></i> Register</Link>
      </li>
      <li  className="nav-item">
        <Link className="btn btn-outline-danger nav-link" to="/Login"><i class="fas fa-user"></i> Login</Link>
      </li>
    </Fragment>
  )

  return (
      <Wrapper>
        <Container fluid="true">
          <Row>
            <Col>
              <nav className="navbar navbar-expand-lg border-bottom">
                <button className="btn btn-outline-danger" onClick={ toggle } id="menu-toggle">
                  <i class="fas fa-bars"></i>
                </button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/"><div className="rotate-scale-up"><img src={logo} alt ={"logo"}/></div></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  {isAuthenticated ? authLinks : guestLinks }
                  </ul>
                </div>
              </nav>
            </Col>
          </Row>
        </Container>
      </Wrapper>
  )
}

export default TopNav
