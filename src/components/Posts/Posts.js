import PostItem from './PostItem';
import './Posts.css';
import useFetch from '../../useFetch';

const Posts = () => {
    const {data: posts, isLoading, error} = useFetch('http://localhost:8000/blogs');
    return ( 
    <div className="posts">
        {error && <div className="post-item"><h2>{error}</h2></div>}
        {isLoading && <div className="post-item"><h2>Loading Posts...</h2></div>}
        {posts && posts.map(post => <PostItem title={post.title} date={post.date} content={post.content} id={post.id} likes={post.likes} author={post.author}/>)}
    </div> 
    );
}
 
export default Posts;