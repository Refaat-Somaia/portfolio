import '../styles/project.css'
import { useState, useEffect, useRef } from 'react';
import ImageSlider from "./imageSlider";
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXmark, faGlobe, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faAndroid } from '@fortawesome/free-brands-svg-icons'

const Project = (props) => {

  const [anim, setAnime] = useState();
  const projectRef = useRef(null);

  useEffect(() => {
    let e = document.getElementsByClassName("skills-bar")[0].children

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (window.screen.width >= 600)
            setAnime("slideIn 0.5s forwards")

        }

      },
      {
        root: null, // viewport
        rootMargin: '0px', // no margin
        threshold: 0.4, // 50% of target visible
      }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);

    }

    // Clean up the observer
    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }

    };
  },
    []);


  return (
    <div ref={projectRef} style={{ animation: anim, opacity: (window.screen.width) < 600 ? 1 : 0 }} className="container-project">
      <div className="col">
        <h2 style={{ color: props.color }}>{props.title}</h2>
        <p>{props.description}</p>
        <div className="row">
          <img className='rowImg' src={props.tech1} alt="" />
          {props.tech2 != null ? <div> <img className='rowImg' src={props.tech2} alt="" /></div> : <div></div>}
          {props.tech3 != null ? <div> <img className='rowImg' src={props.tech3} alt="" /></div> : <div></div>}
          {props.tech4 != null ? <div> <img className='rowImg' src={props.tech4} alt="" /></div> : <div></div>}
          <a target='blank' href={props.codeLink}>
            <FontAwesomeIcon style={{ color: props.color }} className='icon' icon={faGithub} />
          </a>
        </div>

      </div>
      <div className="col">
        <div className={props.device}>
          <ImageSlider
            fit={props.device == "phone" ? "cover" : "contain"}
            height={props.device == "phone" ? "30rem" : "20rem"} video={props.vid} images={props.images}>
          </ImageSlider>
          <div className='camera' />
          {props.device != "laptop" ? <div className='phoneBtns1' /> : <div />}
          {props.device != "laptop" ? <div className='phoneBtns2' /> : <div />}
          {props.device == "laptop" ? <div className='laptop-whiteSpace' /> : <div />}
          {props.device == "laptop" ? <div className='laptop-keyBoard' /> : <div />}
        </div>

      </div>
    </div>
  );
}
export default Project;