import React, { useState, useContext, useEffect } from 'react'
import AuthContext from "../../context/auth/authContext"
import AlertContext from "../../context/alert/alertContext"
import { Container, Row, Col } from "react-bootstrap";
import './Login.css'

const Login = props => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext

  const { login, error, clearErrors, isAuthenticated } = authContext

  useEffect(() => {
    if(isAuthenticated) {
      props.history.push("/")
    }

    if(error === "Invalid Credentials") {
      setAlert(error, "danger")
      clearErrors()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isAuthenticated, props.history])

  const [user, setUser] = useState({
    username: "",
    password: "",
  })

  const { username, password } = user

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    login({
      username,
      password
    })
  }

  return (
    <Container id="logincontent" className="card">
      <Row>
        <Col>
          <div className="form-container">
            <h1 className="text-center"><i className="fas fa-user"></i> Login
            </h1>
            <Container id="inputs">
              <Row>
                <Col>
                  <form onSubmit={onSubmit}>
                    <div className="form-group row">
                      <label className="col-md-12" htmlFor="username"><i className="far fa-envelope"></i> Username</label>
                      <input className="col-md-12" type="username" name="username" value={username} onChange={onChange} required />
                    </div>
                    <div className="form-group row">
                      <label className="col-md-12" htmlFor="password"><i className="fas fa-lock"></i> Password</label>
                      <input className="col-md-12" type="password" name="password" value={password} onChange={onChange} required />
                    </div>
                    <input type="submit" value="LOGIN" className="loginButton btn btn-danger btn-block" />
                  </form>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  )
}


export default Login
