import Head from 'next/head';
import { getAllPosts } from '../lib/posts';
import styles from '../styles/Home.module.css';

export default function Home() {
  const posts = getAllPosts();
  return (
    <div className={styles.container}>
      <Head>
        <title>Technical Blog w/ Alice</title>
      </Head>
      <div>
        <h1>Technical Blog w/ Alice</h1>  
      </div>
      <div>
      <BlogPostReview />
      </div>    
    </div>
  )
}

const BlogPostReview = (props) => {
  console.log(props);
  return (
    <div className={styles.blog}>
      <img 
        src="./images/koba.png" 
        alt="Koba" 
      />
      <h2>Blog title 1</h2>
      <div>Apr 2 2022</div>
      <p>
      In this Next.js tutorial we will build a blog. We will concentrate on the 
      functionality of the blog and the basics of Next js. This Next.js tutorial 
      is great for beginners. At the end of this tutorial you will have a working 
      blog application. This video is first part of a series where we build a 
      fully functioning blog with Next.js.
      </p>
      <div className={styles.author}>Alice Kim</div>
    </div>
  );

}
