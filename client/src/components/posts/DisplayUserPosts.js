import React, { useContext, useEffect, Fragment } from "react";
import PostsContext from "../../context/posts/postsContext"
import PostItem from "./PostItem"

const DisplayUserPosts = () => {
  const postsContext = useContext(PostsContext)
  const { posts, getUserPosts } = postsContext


  useEffect(() => {
    getUserPosts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(posts !== null && posts.length === 0) {
    return <h1>Please make some posts!</h1>
  }
  return (
    <Fragment>
      <div>
        {posts.map(post => (
          <div key={post._id}>
            <PostItem post={post}/>
            {/* <button type="button" className="btn btn-warning">edit post</button>
            <button type="button" class="btn btn-danger">delete post</button>
            <p>delete button</p>
            <p>edit button</p> */}
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default DisplayUserPosts
