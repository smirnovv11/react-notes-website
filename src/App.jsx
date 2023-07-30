import Header from "./components/header/Header"
import PostEditPanel from "./components/postEditPanel/PostEditPanel"
import { PostSection } from "./components/postsSection/PostSection";
import PostsProvider from "./components/postsContext/PostContext";

function App() {

  return (
    <>
      <Header/>
      <PostsProvider>
        <PostEditPanel/>
        <PostSection/>
      </PostsProvider>
    </>
  )
}

export default App
