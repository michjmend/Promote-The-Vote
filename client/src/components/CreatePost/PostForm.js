import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext"
import AuthContext from "../../context/auth/authContext"
import { Container, Row, Col } from "react-bootstrap";
import CloudinaryUploadWidget from "../CloudinaryUploadWidget"
import "bootstrap/dist/css/bootstrap.min.css";
import "./PostForm.css";

const PostForm = props => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)
  const [isSubmitted] = useState(false)
  const { setAlert } = alertContext
  const { isAuthenticated } = authContext

  // useEffect(() => {
  //   if(isAuthenticated) {
  //     props.history.push("/")
  //   }
  // }, [isAuthenticated, props.history])

  const [post, setPost] = useState({
    title: "",
    story: "",
    video: ""
  })

  const setCloudinaryInfo = (imgUrl) => {
    setPost({ ...post, video: imgUrl })
  };

  const { title, story, video } = post

  const onChange = e => setPost({ ...post, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    post({
      title,
      story,
      video
    })
  }

    return (
      <div>
        <div className="card">
          <Container className="postDirection">
          <div className="postTitle">Post Your Voting Experience
          <img src="https://img.icons8.com/color/48/000000/video.png" alt="videoIcon">
           </img></div>
           <div className="postText">In the last Presidential Election eligible voter turnout for 2016 had low results. The US Census rates and FairVote.org reports national estimates of voter turnouts to read about 60.1% of eligible voters participated in the previous presidential election; but we are on the move up. Pew Research Center reports voter turnout rate increased across racial and ethnic groups, with an increase of 11.7% White, 10.6% Black, 13.4% Hispanic, and 13.3% Asian voters participating in 2018 midterm election. Have you voted? Spread your story, Promote the Vote!
           </div>
          </Container>
        </div>
        <div className="card" style={{ marginTop: 20 }}>
          <Container id="CreatePostContent">
            <Row>
              <Col>
                <div className="whatToPost">
                  What to Post?
                  <ol>
                    <li>Why do you vote?</li>
                    <li>What was your first voting experience like?</li>
                    <li>How do you better prepare yourself to vote?</li>
                  </ol>
                </div>
              </Col>
              <Col>
                <h3 className="text-center">Post</h3>
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label>Title:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={title}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Story:</label>
                    <textarea
                      className="form-control"
                      value={story}
                      onChange={onChange}
                      rows="3"
                    />
                  </div>
                  <div className="row d-flex justify-content-center">
                    <label className="" htmlFor="photo"><img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/add-image.png" /> Upload Video Story:</label>
                    <CloudinaryUploadWidget className="" cloudinaryInfo={setCloudinaryInfo} isSubmitted={isSubmitted} />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="SUBMIT"
                      className="btn btn-danger btn-lg btn-block"
                    />
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
export default PostForm;
