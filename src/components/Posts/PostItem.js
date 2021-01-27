import {AiOutlineHeart, AiFillHeart, AiOutlineDelete} from 'react-icons/ai';
import {useState} from 'react';
import{Button} from 'reactstrap';
import moment from 'moment';
import './Posts.css';

const PostItem = ({title, date, content}) => {
    const[likeIcon, setLikeIcon] = useState(false);
    return ( 
    <div className="post-item">
        <h2>{title}</h2>
        <p className="date"> Posted {moment(date, 'DD/MM/YYYY').fromNow()}</p>  
        <p>{content}</p>
        <Button color="danger" outline="true"onClick={() => setLikeIcon(!likeIcon)}>{likeIcon? <AiFillHeart /> : <AiOutlineHeart />}</Button>
        <Button color="info" outline="true"><AiOutlineDelete /></Button>
    </div> 
    );
}
 
export default PostItem;