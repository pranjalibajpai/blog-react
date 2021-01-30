import {useParams} from 'react-router-dom';
import useFetch from '../../useFetch';
import {BsDot} from 'react-icons/bs';
import './Posts.css';
import readingTime from 'reading-time';
const Post = () => {
    const {id} = useParams();
    const {data: post, isLoading, error}=useFetch('http://localhost:8000/blogs/' + id);
    return ( 

        <div>
            {error && <div className="post-item"><h2>{error}</h2></div>}
            {isLoading && <div className="post-item"><h2>Loading Posts...</h2></div>}
            {post && 
            <div className="post-item" key={id}>
                <h2>{post.title}</h2>
                <p className="date">By @{post.author}<BsDot />{readingTime(post.content).text}</p>  
                <p>{post.content}</p>
            </div>}
        </div>
    );
}
 
export default Post;