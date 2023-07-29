import Header from "./components/header/Header"
import PostEditPanel from "./components/postEditPanel/PostEditPanel"
import Post from "./components/post/Post"
import { PostManager } from "./services/postManages"
import { useEffect, useRef, useState } from "react";

function App() {

  const [postsState, setData] = useState(PostManager.getAll());
  const posts = useRef(postsState)

  return (
    <>
      <Header/>
      <PostEditPanel onNewPost={() => setData([...postsState])}/>
      <section style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        {posts.current.length > 0 ? (
          posts.current.map(post => (
            <Post key={post.id} post={post}/>
          ))
        ) : (
          <p>No any posts yet.</p>
        )}
      </section>
    </>
  )
}

export default App
