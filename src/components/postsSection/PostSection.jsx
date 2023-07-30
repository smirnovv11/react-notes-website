import Post from "../post/Post"
import { usePosts } from "../postsContext/PostContext";

export const PostSection = () => {
    const { posts } = usePosts();

    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            {posts.length > 0 ? (
              posts.map(post => (
                <Post key={post.id} post={post}/>
              ))
            ) : (
              <p>No any posts yet.</p>
            )}
          </section>
    )
}