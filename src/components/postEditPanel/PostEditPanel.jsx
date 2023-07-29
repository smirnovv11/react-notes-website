import styles from "./PostEditPanel.module.css"
import { PostManager } from "../../services/postManages"
import { useState } from "react"
import { ImageUploader } from "../../services/imageService"

const clearPost = {
    id: 0,
    title: '',
    content: '',
    img: '',
}

const PostEditPanel = ({onNewPost}) => {

    const [post, setPost] = useState(() => clearPost);
    const [isNotifAnim, setNotification] = useState(false);

    const makeNewPost = () => {
        if (post.title != '' &&
            post.content != '' &&
            post.img != '') {
                
            }
        post.id = PostManager.getFreeId();
        PostManager.addPost(post);
        onNewPost();
        setPost(clearPost);
        notify();
    }

    async function notify () {
         setNotification(true);
         setTimeout(() => setNotification(false), 4000);
    }
    
    return (
        <form className={styles.container}>
            <div className={styles.data}>
                <label>Post ID: </label>
                <input type="text" placeholder="Title / Post name" value={post.title} onChange={(event) => {setPost({
                    ...post,
                    title: event.target.value
                })}}></input>
                <textarea type="text" placeholder="Content"  value={post.content} onChange={(event) => {setPost({
                    ...post,
                    content: event.target.value
                })}}></textarea>
                <input type="text" placeholder="Image URL" value={post.img} onChange={(event) => {setPost({
                    ...post,
                    img: event.target.value
                })}}></input>
                <input type="file" accept="image/*" files={post.img} onChange={(event) => {
                    ImageUploader.uploadImage(event.target.files[0]).then(imgURL => {
                        setPost({
                            ...post,
                            img: event.target.files[0].name
                        })
                    })
                    }}></input>
            </div>
            <div className={styles.controls}>
                <button type="button" onClick={makeNewPost}>Post</button>
                <button type="button" className={styles.previewBtn}>Preview</button>
            </div>

            <div className={`${styles.notification_container} ${isNotifAnim ? styles.animate_notif : ''}`}>
                <h3>Posted!</h3>
                <p>Your post has been published.</p>
            </div>
        </form>
    )
}

export default PostEditPanel