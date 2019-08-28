import React, { Fragment } from 'react'
import PropTypes from "prop-types"
import Moment from "react-moment"
import AuthContext from "../../context/auth/authContext"

const PostItem = ({ post }) => {
  const { _id, user, title, story, video, date } = post
  // const authContext = useContext(AuthContext)
  // const { user } = 

  const activeUser = (
    <Fragment>
      <button type="button" className="btn btn-warning">edit post</button>
      <button type="button" class="btn btn-danger">delete post</button>
    </Fragment>
  )
  const noUser = (
    <Fragment></Fragment>
  )

  return (
    <div className="card mb-3">
      <video id="demo-player" controls className="cld-video-player card-img-top" src={video}></video>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{story}</p>
        <p className="card-text"><small className="text-muted">Last updated <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment></small></p>
      </div>
      {/* {req.user.id === user ? noToggle : currentLocation === "/Login" ? noToggle : toggler} */}
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostItem
