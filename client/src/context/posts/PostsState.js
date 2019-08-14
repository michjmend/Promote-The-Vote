import React, { useReducer } from "react"
import axios from "axios"
import PostsContext from "./postsContext"
import postsReducer from "./postsReducer"
import {
  ADD_POST,
  GET_POSTS,
  POST_ERROR,
  CLEAR_CURRENT,
  UPDATE_POST,
  SET_CURRENT,
  GET_USER_POSTS,
} from "../types"

const PostsState = props => {
  const initialState = {
    posts: [],
    current: null,
    error: null
    // filtered: null,
  }
  const [state, dispatch] = useReducer(postsReducer, initialState)
  // Get Posts
  const getPosts = async () => {
    console.log("getting all posts")
    try {
      const res = await axios.get("/api/posts/allstories")
      dispatch({ type: GET_POSTS, payload: res.data })
    } catch (err) {
      dispatch({ type: POST_ERROR,
      payload: err.response.msg })
    }
  }
  // Get user's posts
  const getUserPosts = async () => {
    console.log("getting user posts")
    try {
      const res = await axios.get("/api/posts/userposts")
      dispatch({ type: GET_USER_POSTS, payload: res.data })
    } catch (err) {
      dispatch({ type: POST_ERROR,
      payload: err.response.msg
      })
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
  //  Update post
  const updatePost = async post => {
    console.log("updating the post")
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const res = await axios.put("/api/posts", post, config)
      dispatch({ type: UPDATE_POST, payload: res.data})
    } catch (err) {
      dispatch({ type: POST_ERROR,
      payload: err.response.msg
      })  
    }
  }
  // Set current post
  const setCurrent = post => {
    dispatch({ type: SET_CURRENT, payload: post })
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
      updatePost,
      setCurrent,
      getUserPosts
    }}>
      { props.children }
    </PostsContext.Provider>
  )
}

export default PostsState