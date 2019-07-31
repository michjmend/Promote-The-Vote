import React, { useReducer } from "react"
import axios from "axios"
import PostContext from "./postContext"
import postReducer from "./postReducer"
import {
  GET_POSTS,
  ADD_POST,
  POST_ERROR,
} from "../types"

const PostState = props => {
  const initialState = {
    posts: null,
    current: null,
    filtered: null,
    error: null
  }
  const [state, dispatch] = useReducer(postReducer, initialState)
  // Get Posts
  const getPosts = async () => {
    try {
      const res = await axios.get("/api/posts")
      dispatch({ type: GET_POSTS, payload: res.data })
    } catch (err) {
      dispatch({ type: POST_ERROR,
      payload: err.response.msg })
    }
  }
  // Add Post
  const addPost = async post => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const res = await axios.post("api/posts", post, config)
      dispatch({ type: ADD_POST, payload: res.data })
    } catch (err) {
      dispatch({ type: POST_ERROR,
      payload: err.response.msg})
    }
  }

  return(
    <PostContext.Provider
    value={{
      posts: state.posts,
      error: state.error,
      getPosts,
      addPost,
    }}>
      { props.children }
    </PostContext.Provider>
  )
}

export default PostState