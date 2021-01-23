import {AiOutlineHeart, AiFillHeart, AiOutlineDelete} from 'react-icons/ai';
import {useState} from 'react';
const PostItem = () => {
    const[likeIcon, setLikeIcon] = useState(false);
    
    return ( 
    <div>
        <div>
            <h2>Title</h2>
            <p>Posted few moments ago </p>
        </div>
        
        <p>Content</p>
        <button onClick={() => setLikeIcon(!likeIcon)}>{likeIcon? <AiFillHeart /> : <AiOutlineHeart />}</button>
        <button><AiOutlineDelete /></button>
    </div> 
    );
}
 
export default PostItem;