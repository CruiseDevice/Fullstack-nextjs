import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';


const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/post.jpeg" alt="" fill className={styles.img}></Image>
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde eum dolor, adipisci soluta, tempore necessitatibus natus eaque optio voluptate reiciendis repellat aliquam velit vero odit veniam provident excepturi sunt. Labore?</p>
        <Link className={styles.link} href="/blog/post">READ More</Link>
      </div>
    </div>
  )
}

export default PostCard;