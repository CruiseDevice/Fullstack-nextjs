import Image from "next/image";
import styles from './singlePost.module.css';
import Link from "next/link";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="/post.jpeg" 
          alt="" 
          className={styles.img} 
          width={550}
          height={550}></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image 
            src="/post.jpeg" 
            alt="" 
            className={styles.avatar} 
            width={50} 
            height={50}></Image>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>Terry Jefferson</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>01.01.2024</span>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quia eos ea ullam veniam dolorem quidem quas quibusdam, nesciunt asperiores tenetur aut dolor fuga eveniet, adipisci beatae reprehenderit. Minus, quia.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;