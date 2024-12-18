import '../styles/contact.css'
import { useState, useRef, useEffect } from 'react'
import img from '../assets/images/contact.svg'
import whatsapp from '../assets/images/whatsapp.svg'
import linkedIn from '../assets/images/linkedin-svgrepo-com.svg'
import resume from "../assets/Refaat somaia CV.pdf"
import gmail from "../assets/images/gmail.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
function Contact() {
    const [anim, setAnime] = useState();
    const contactRef = useRef(null);

    useEffect(() => {
        let e = document.getElementsByClassName("contact-list")[0].children

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {

                    (window.innerWidth) < 1380 ? setAnime("img-slide-small 0.5s forwards")
                        : setAnime("img-slide-big 1s forwards")

                    setTimeout(function () {

                        for (let i = 0; i < e.length; i++) {

                            e[i].style.animation = `fade-in-square 0.5s forwards ${200 + (i * 200)}ms`
                        }
                    }, 500)
                }

            },
            {
                root: null, // viewport
                rootMargin: '0px', // no margin
                threshold: 0.4, // 50% of target visible
            }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);

        }

        // Clean up the observer
        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }

        };
    },
        []);

    return (
        <div ref={contactRef} className='contact-container' id='contact'>
            <div style={{ animation: anim }} className='img-container'>
                <h2>Find me at</h2>

                <img src={img} alt="" />
            </div>
            <div className='contact-list'>

                <a target='blank' href="https://wa.me/963935745337" className="square">
                    <img src={whatsapp} className='icon' alt="" />
                    +963 935745337</a>


                <a className="square" target='blank' href="https://www.linkedin.com/in/refaat-somaia-3667b6281/">
                    <img src={linkedIn} className='icon' alt="" />


                    Refaat Somaia</a>


                <a className="square" target='blank' href="https://github.com/Refaat-Somaia">
                    <FontAwesomeIcon className='icon' icon={faGithub} />

                    Refaat-Somaia</a>


                <a className="square" target='blank' href="mailto:refatfahadsu2003@gmail.com">
                    <img src={gmail} className='icon' alt="" />
                    refatfahadsu2003@gmail.com</a>
                <a id='resume-btn' target='blank' href={resume}>
                    <FontAwesomeIcon icon={faFile} style={{ marginRight: "0.5rem" }} />

                    Resume

                </a>



            </div>
        </div >
    )
}

export default Contact
