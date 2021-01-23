import {Jumbotron} from 'reactstrap';
import {FaHeart} from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
    return ( 
        <footer>
            <Jumbotron className="footer">

                <h1>Would love to connect with you!</h1>
                <div>
                    <p>Linkedin Github Gmail Instagram Facebook</p>
                </div>
                <p>© 2021 Built with <FaHeart /> by Pranjali Bajpai</p>
            </Jumbotron>
        </footer>
        
    );
}
 
export default Footer;