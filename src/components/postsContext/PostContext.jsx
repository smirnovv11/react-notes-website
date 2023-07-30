import { createContext, useContext, useState } from "react"
import { PostManager } from "../../services/postManages";

const PostsContext = createContext()

export const usePosts = () => {
    return useContext(PostsContext)
}

export default function PostsProvider({children}) {
    const [posts, setPosts] = useState(() => PostManager.getAll());

    const addPost = (post) => {
        setPosts((prev) => [post, ...prev]);
        PostManager.addPost(post);
    }
    const removePost = (post) => {
        setPosts((prev) => prev.filter((p) => p.id !== post.id));
        PostManager.removePost(post);
    }
    const getFreeId = () => PostManager.getFreeId();

    return (
        <PostsContext.Provider value={
            {
                posts,
                addPost, removePost, getFreeId
            }
        }>
            {children}
        </PostsContext.Provider>
    )
}