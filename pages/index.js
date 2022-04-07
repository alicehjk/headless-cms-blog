import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../lib/posts';
import styles from '../styles/Home.module.css';
import Image from '../components/Image';

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
        {posts.map( 
          post => <BlogPostReview key={post.id} data={post}/>
        )}
      </div>    
    </div>
  )
}

const BlogPostReview = (props) => {
  // console.log(props);
  const { data } = props;
  return (
    <div className={styles.blog}>

      <Image 
        src={data.coverImage} 
        alt={data.title}
        layout="fill"
      />
      <h2>
        <Link href={`/blog/${data.slug}`}>
          <a>{data.title}</a>
        </Link>
      </h2>
      <div>{data.publishDate}</div>
      <p>
        {data.excerpt}
      </p>
      <div className={styles.author}>{data.author}</div>
    </div>
  );
};
