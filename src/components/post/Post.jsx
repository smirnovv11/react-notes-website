import styles from "./Post.module.css"

const Post = ({post}) => {
    return (
        <div className={styles.post}>
            <div className={styles.info}>
                <img src={post.img} alt='/no-image.png'></img>
                <div className={styles.content}>
                    <label>#{post.id} <b>{post.title}</b></label>
                    <p>{post.content}</p>
                </div>
            </div>
            <div className={styles.controls}>
                <button className={styles.controlBtn}>Edit</button>
                <button className={styles.controlBtn}>X</button>
            </div>
        </div>
    )
}

export default Post