import {useParams} from 'react-router-dom';
import {FcLikePlaceholder, FcFullTrash} from 'react-icons/fc';
import useFetch from '../../useFetch';
import {BsDot} from 'react-icons/bs';
import './Posts.css';
import readingTime from 'reading-time';
import {useHistory} from 'react-router-dom';
import{Button} from 'reactstrap';

const Post = () => {
    const history = useHistory();
    const {id} = useParams();
    const {data: post, isLoading, error}=useFetch('http://localhost:8000/blogs/' + id);
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {history.push('/posts')}
        );
    }
    return ( 
        <div>
            {error && <div className="post-item"><h2>{error}</h2></div>}
            {isLoading && <div className="post-item"><h2>Loading Post...</h2></div>}
            {post && 
            <div className="post-item" key={id}>
                <h2>{post.title}</h2>
                <p className="date">By @{post.author}<BsDot />{readingTime(post.content).text}</p>  
                <p>{post.content}</p>
                <Button color="danger" >{post.likes} <FcLikePlaceholder /></Button>

                <Button color="danger" onClick={handleClick} outline><FcFullTrash /></Button> 
            </div>}
        </div>
    );
}
 
export default Post;