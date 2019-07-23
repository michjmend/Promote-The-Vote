import React, { useState, useContext, useEffect } from 'react'
import AlertContext from "../../context/alert/alertContext"
import AuthContext from "../../context/auth/authContext"
import { Container, Row, Col } from "react-bootstrap";
import './Register.css'

const Register = props => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext

  const { register, error, clearErrors, isAuthenticated } = authContext

  useEffect(() => {
    if(isAuthenticated) {
      props.history.push("/")
    }

    if(error === "User already exists") {
      setAlert(error, "danger")
      clearErrors()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isAuthenticated, props.history])

  const [user, setUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    password: "",
    password2: "",
    picture: "",
  })

  const { username, firstname, lastname, email, address1, address2, city, state, zip, picture, password, password2 } = user

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    if(username === "" || firstname === "" || lastname === "" || email === "" || address1 === "" || city === "" || state === "" || zip === "" || password === "") {
      setAlert("Please enter all fields", "danger")
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger")
    } else {
      register({
        username,
        password,
        firstname,
        lastname,
        email,
        address1,
        address2,
        city,
        state,
        zip,
        picture
      })
    }
  }

  return (
    <Container className="Register card">
      <Row>
        <Col>
          <div>
            <h1 className="text-center">
              Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
              <div className="form-group row">
                <label className="col-sm-2" htmlFor="username">Username</label>
                <input className="col-sm-10" type="text" name="username" value={username} onChange={onChange} required />
              </div>
              <div className="form-group row">
                <label className="col-sm-2" htmlFor="firstname">First name</label>
                <input className="col-sm-10" type="text" name="firstname" value={firstname} onChange={onChange} required />
              </div>
              <div className="form-group row">
                <label className="col-sm-2" htmlFor="lastname">Last name</label>
                <input className="col-sm-10" type="text" name="lastname" value={lastname} onChange={onChange} required />
              </div>
              <div className="form-group row">
                <label className="col-sm-2" htmlFor="email">Email</label>
                <input className="col-sm-10" type="email" name="email" value={email} onChange={onChange} required />
              </div>
              <div className="form-group row">
                <label className="col-sm-2" htmlFor="address1">Address 1</label>
                <input className="col-sm-10" type="text" name="address1" value={address1} onChange={onChange} required />
              </div>
              <div className="form-group row">
                <label className="col-sm-2" htmlFor="address2">Address 2</label>
                <input className="col-sm-10" type="text" name="address2" value={address2} onChange={onChange} />
              </div>
              <div className="form-group row">
                <label className="col-sm-2" htmlFor="city">City</label>
                <input className="col-sm-10" type="text" name="city" value={city} onChange={onChange} required />
              </div>
              <div className="form-group row">
                <label className="col-sm-2" htmlFor="state">State</label>
                <input className="col-sm-10" type="text" name="state" value={state} onChange={onChange} required />
              </div>
              <div className="form-group row">
                <label className="col-sm-2" htmlFor="zip">Zip Code</label>
                <input className="col-sm-10" type="text" name="zip" value={zip} onChange={onChange} required />
              </div>
              <div className="form-group row">
                <label className="col-sm-2" htmlFor="picture">Profile Picture</label>
                <input className="col-sm-10" type="text" name="picture" value={picture} onChange={onChange} />
              </div>
              <div className="form-group row">
                <label className="col-sm-2" htmlFor="password">Password</label>
                <input className="col-sm-10" type="password" name="password" value={password} onChange={onChange} required minLength="6" />
              </div>
              <div className="form-group row">
                <label className="col-sm-2" htmlFor="password2">Confirm Password</label>
                <input className="col-sm-10" type="password" name="password2" value={password2} onChange={onChange} required minLength="6" />
              </div>
              <input type="submit" value="REGISTER" className="btn btn-danger btn-block" />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
