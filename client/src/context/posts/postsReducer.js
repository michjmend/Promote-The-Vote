import {
  ADD_POST,
  GET_POSTS,
  POST_ERROR,
  CLEAR_CURRENT,
  GET_USER_POSTS,
  DELETE_POST
} from "../types"

export default (state, action) => {
  switch(action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false
      }
    case GET_USER_POSTS:
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload),
        loading: false
      }
    case POST_ERROR:
      return {
        ...state,
        error: action.payload
      }
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null
        }
    default:
      return state
  }
}