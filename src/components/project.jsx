import '../styles/project.css'
import { useState, useEffect, useRef } from 'react';
import 'react-device-frameset/styles/marvel-devices.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Slider from "./Slider"
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
const Project = (props) => {

  const [anim, setAnime] = useState();
  const projectRef = useRef(null);
  const [auto, setAuto] = useState(false)

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
          {props.link != null ? <a target='blank' href={props.link}>
            <FontAwesomeIcon style={{ color: props.color }} className='icon' icon={faGlobe} />
          </a> : ""}
          <a target='blank' href={props.codeLink}>
            <FontAwesomeIcon style={{ color: "gray" }} className='icon' icon={faGithub} />
          </a>
        </div>

      </div>
      <div className="col">


        <div className={props.device}>
          <Slider color={props.color} vid={props.vid} className={props.device == "laptop" ? "slider-laptop" : "slider-mobile"}>
            {props.images}
          </Slider>
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