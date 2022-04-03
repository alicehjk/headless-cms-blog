import { getAllSlugs, getPostData } from "../../lib/posts"
import styles from './BlogPost.module.css';

export default function BlogPost(props) {
    const { postData } = props;
    console.log({postData});
    return (
        <div className={style.container}>
            <h1>{postData.title}</h1>
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