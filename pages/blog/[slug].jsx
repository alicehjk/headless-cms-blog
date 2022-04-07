import { getAllSlugs, getPostData } from "../../lib/posts"
import styles from './BlogPost.module.css';
import Image from '../../components/Image';

export default function BlogPost(props) {
    const { postData } = props;
    console.log({postData});
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image 
                    src={postData.coverImage} 
                    alt={postData.title}
                    layout="fill"
                />
            </div>
            <h1>{postData.title}</h1>
            <p>
                {postData.author} / {postData.publishDate}
            </p>
            <p>
                {postData.content}
            </p>
        </div>
    )
}

// return all possible values for slug param
export const getStaticPaths = () => {
    const paths = getAllSlugs();
    return {
        paths,
        fallback: false //if this is false , any path not return by this will be 404
    };
};

// this fucntion returns real time -> give sthe props to the BlogPost compomnet 
export const getStaticProps = ({ params }) => {
    const postData = getPostData(params.slug);
    return {
        props : {
            postData,
        }
    }
};