import React, { Fragment, useContext } from 'react'
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Wrapper from "../Wrapper/Wrapper";
import logo from './logo.png';
import { Container, Row, Col, Button } from "react-bootstrap";
import AuthContext from "../../context/auth/authContext"
import $ from 'jquery';
import './logo.css';
import justTJ2 from './justTJ2.png';
//import { withRouter } from "react-router-dom"
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import PostContext from "../../context/post/postContext"

const TopNav = (props) => {
  // const locationGetter = withRouter(props => <toggleButton {...props}/>)
  // console.log(locationGetter)
  // console.log("Window thing", window.location.pathname)
  const authContext = useContext(AuthContext)
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
        <span>Hello { user && user.firstname } </span>
      </li>
      <li>
        <a onClick={ onLogout } href="#!">
          <i className="fas fa-sign-out-alt"> </i>
          <span className="hide-sm"> Logout</span>
        </a>
      </li>
    </Fragment>
  )
  const guestLinks = (
    <Fragment>
      <li  className="nav-item">
        <Link className="btn btn-danger nav-link reg" to="/Register"><i className="fas fa-user-plus"></i> Register</Link>
      </li>
      <li  className="nav-item">
        <Link className="btn btn-danger nav-link login" to="/Login"><i className="fas fa-user"></i> Login</Link>
      </li>
    </Fragment>
  )
  const toggleButton = (
    <Fragment>
      <button className="btn btn-danger menu-toggle" onClick={ toggle } id="menu-toggle">
        <i className="fas fa-bars"></i>
      </button>
    </Fragment>
  )

  const noToggle = (
    <Fragment>
      <p></p>
    </Fragment>
  )
  return (
      <Wrapper>
        <Container fluid="true">
          <Row>
            <Col>
              <nav className="navbar navbar-expand-lg border-bottom">
                {window.location.pathname === "/" ? toggleButton : noToggle}
                {/* <button className="btn btn-danger menu-toggle" onClick={ toggle } id="menu-toggle">
                  <i className="fas fa-bars"></i>
                </button> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/"><div className="rotate-scale-up logo"><img src={logo} alt ={"logo"}/></div></Link>
                <div ClassName= "raisedHands"><img src={justTJ2} alt ="raisedHands" width= "100%"></img></div>

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
