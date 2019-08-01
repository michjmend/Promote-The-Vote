import React, { useContext} from 'react'
import PropTypes from "prop-types"
import { Video } from "cloudinary-react"
// import PostsContext from "../../context/posts/postsContext"

const PostItem = ({ post }) => {
  const { title, story, video, date } = post

  return (
    <div className="card mb-3">
      <video id="demo-player" controls className="cld-video-player" src={video}></video>
      {/* <iframe width="560" height="315" src="https://res.cloudinary.com/dcuspzza/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      {/* <img src={video} width="30%" className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{story}</p>
        <p className="card-text"><small className="text-muted">Last updated {date}</small></p>
        {/* <Link className="btn btn-outline-danger" to="/">Display Posts</Link>
        <Link to="/edit/:id" className="btn btn-primary"><i className="fas fa-edit"></i></Link>
        <Link to="/delete/:id" className="btn btn-danger"><i className="fas fa-trash-alt"></i></Link> */}
      </div>
    </div>
  
  
  
  
  
    // <div>
    //   <h1>Yo posticles</h1>
    // </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostItem
