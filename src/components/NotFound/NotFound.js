import {Link} from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return ( 
    <div className="not-found">
        <h1>It seems you are lost!</h1>
        <p><Link to= "/">Go Back Home</Link></p>
    </div> 
    );
}
 
export default NotFound;