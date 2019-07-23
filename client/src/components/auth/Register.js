import React, { useState, useContext, useEffect } from 'react'
import AlertContext from "../../context/alert/alertContext"
import AuthContext from "../../context/auth/authContext"
import CloudinaryUploadWidget from "../../components/CloudinaryUploadWidget"

const Register = props => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext

  const { register, error, clearErrors, isAuthenticated } = authContext

  let cloudinaryUrl;
  let source = {}

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
    <div>
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={username} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="firstname">First name</label>
          <input type="text" name="firstname" value={firstname} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last name</label>
          <input type="text" name="lastname" value={lastname} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address1">Address 1</label>
          <input type="text" name="address1" value={address1} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address2">Address 2</label>
          <input type="text" name="address2" value={address2} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" name="city" value={city} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input type="text" name="state" value={state} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip Code</label>
          <input type="text" name="zip" value={zip} onChange={onChange} required />
        </div><div className="form-group">
          <label htmlFor="picture">Profile Picture</label>
          <input type="text" name="picture" value={picture} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} required minLength="6" />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input type="password" name="password2" value={password2} onChange={onChange} required minLength="6" />
        </div>
        <div>
          <CloudinaryUploadWidget cloudinaryInfo={setCloudinaryInfo} isSubmitted={isSubmitted} />
        </div>
        <input type="submit" value="register" className="btn btn-primary btn-block" />
      </form>
    </div>
  )
}

export default Register
