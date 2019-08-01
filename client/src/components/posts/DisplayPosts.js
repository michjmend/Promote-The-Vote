import React, { useContext, useEffect, Fragment } from "react";
import PostsContext from "../../context/posts/postsContext"
import PostItem from "./PostItem"

const DisplayPosts = () => {
  const postsContext = useContext(PostsContext)
  const { posts, getPosts } = postsContext

  useEffect(() => {
    getPosts()
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
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default DisplayPosts
