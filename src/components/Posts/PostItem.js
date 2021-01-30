import {FcLikePlaceholder, FcFullTrash} from 'react-icons/fc';
import {BsDot} from 'react-icons/bs';
import{Button} from 'reactstrap';
import moment from 'moment';
import './Posts.css';
import readingTime from 'reading-time';
import {Link} from 'react-router-dom';

const PostItem = ({title, date, content, id, likes, author}) => {
    return ( 
    <div className="post-item" key={id}>
        <h2>{title}</h2>
        <p className="date"> Posted {moment(date, 'DD/MM/YYYY').fromNow()} by @{author} <BsDot />{readingTime(content).text}</p>  
        <p>{content}</p>
        <Link to={`/posts/${id}`}>Read Full Post</Link>
        <Button color="danger" >{likes} <FcLikePlaceholder /></Button>
        <Button color="danger" outline><FcFullTrash /></Button> 
    </div> 
    );
}
 
export default PostItem;