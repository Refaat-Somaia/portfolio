import '../styles/footer.css'
import insta from "../assets/images/instagram.png"
import facebook from "../assets/images/facebook.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer id='footer'>
            {/* <div className="empty"></div> */}
            {/* <div className="list-container">
            <a href="">+963 935745337</a>
            <a href="">refatfahadsu2003@gmail.com</a>
  

            </div> */}
            <div className="list-social">

                <div className="row">
                    <FontAwesomeIcon className='icon' icon={faWhatsapp} />
                    <a href="https://wa.me/963935745337">+963 935745337</a>

                </div>
                <div className="row">
                    <FontAwesomeIcon className='icon' icon={faLinkedin} />

                    <a target='blank' href="https://www.linkedin.com/in/refaat-somaia-3667b6281/">Refaat-Somaia</a>
                </div>
                <div className="row">
                    <FontAwesomeIcon className='icon' icon={faInstagram} />

                    <a target='blank' href="https://www.instagram.com/refaat_somaia?igsh=MWdkd2E0aHg0bjBqMw==">refaat_somaia</a>
                </div>
                <div className="row">
                    <FontAwesomeIcon className='icon' icon={faGithub} />

                    <a target='blank' href="https://github.com/Refaat-Somaia">Refaat-Somaia</a>
                </div>
                <div className="row">
                    <FontAwesomeIcon className='icon' icon={faEnvelope} />
                    <a target='blank' href="mailto:refatfahadsu2003@gmail.com">refatfahadsu2003@gmail.com</a>

                </div>
            </div>
        </footer>
    );

}
export default Footer