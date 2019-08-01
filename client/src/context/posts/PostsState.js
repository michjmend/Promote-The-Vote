import React, { useReducer } from "react"
import axios from "axios"
import PostsContext from "./postsContext"
import postsReducer from "./postsReducer"
import {
  ADD_POST,
  GET_POSTS,
  POST_ERROR,
  CLEAR_CURRENT
} from "../types"

const PostsState = props => {
  const initialState = {
    posts: [],
    // current: null,
    // filtered: null,
    error: null
  }
  const [state, dispatch] = useReducer(postsReducer, initialState)
  // Get Posts
  const getPosts = async () => {
    console.log("getting the posts")
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
      const res = await axios.post("/api/posts", post, config)
      dispatch({ type: ADD_POST, payload: res.data })
    } catch (err) {
      dispatch({ type: POST_ERROR,
      payload: err.response.msg})
    }
  }
  // Clear current post form
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }
  return(
    <PostsContext.Provider
    value={{
      posts: state.posts,
      error: state.error,
      addPost,
      getPosts,
      clearCurrent,
    }}>
      { props.children }
    </PostsContext.Provider>
  )
}

export default PostsState