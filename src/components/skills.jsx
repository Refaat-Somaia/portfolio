import { React, useRef, useState, useEffect } from 'react'
import Skill from "./skill";
import "../styles/skills.css"
import flutter from "../assets/images/flutter.svg"
import html from "../assets/images/html.png"
import js from "../assets/images/js.png"
import css from "../assets/images/css.svg"
import react from "../assets/images/react.png"
import firebase from "../assets/images/firebase.svg"
import rightBlob from '../assets/images/blob-right.svg'
import leftBlob from '../assets/images/blob-left.svg'
import uiux from "../assets/images/ui-ux.png"
import sql from "../assets/images/sql.png"
import api from "../assets/images/api.png"
import figma from "../assets/images/figma.png"
// import leftBlob from'../assets/images/blob-left.png'

function Skills() {
  const skillsRef = useRef(null);
  const blobRef = useRef(null);
  const [blobsAnim, setblobsAnim] = useState("")
  const [name, setName] = useState("")
  const [blobsAnimLeft, setblobsAnimLeft] = useState("")

  useEffect(() => {
    let e = document.getElementsByClassName("skills-bar")[0].children

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setblobsAnim("slide-in-blob-left 0.5s forwards")
          setblobsAnimLeft("slide-in-blob-right 0.5s forwards")
          setTimeout(function () {
            for (let i = 0; i < e.length; i++) {
              e[i].style.animation = `skill-in ${500}ms forwards ${i * 200}ms`
            }
          }, 200)

        }

      },
      {
        root: null, // viewport
        rootMargin: '0px', // no margin
        threshold: 0.5, // 50% of target visible
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);

    }


    // Clean up the observer
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }

    };
  },
    []);


  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // document.getElementById("name").style.display="block"


        }

      },
      {
        root: null, // viewport
        rootMargin: '0px', // no margin
        threshold: 1, // 50% of target visible
      }
    );

    if (blobRef.current) {
      observer.observe(blobRef.current);

    }


    // Clean up the observer
    return () => {
      if (blobRef.current) {
        observer.unobserve(blobRef.current);
      }

    };
  },
    []);




  return (

    <div ref={skillsRef} className="container-skills" id="skills">
      {/* <span id='name' style={{animation:name}}>Refaat Somaia</span> */}
      <h1>My Skills</h1>
      <img ref={blobRef} style={{ animation: blobsAnim, }} src={rightBlob} alt="" className="blob-left" />
      <img style={{ animation: blobsAnimLeft }} src={leftBlob} alt="" className="blob-right" />

      <div className="skills-bar">
        <Skill img={flutter} title="Flutter" color="rgba(25, 167, 206, 0.1)" />
        <Skill img={html} title="HTML" color="rgba(246, 107, 14, 0.1)" />
        <Skill img={css} title="CSS" color="rgba(63, 114, 175, 0.1)" />
        <Skill img={js} title="JavaScript" color="rgba(249, 217, 73, 0.2)" />
        <Skill img={react} title="React" color="rgba(81, 196, 211, 0.1)" />
        <Skill img={firebase} title="Firebase" color="rgba(249, 148, 23, 0.1)" />

        <Skill img={sql} title="SQL" color="rgba(23, 107, 135, 0.1)" />

        <Skill img={api} title="REST APIs" color="rgba(80, 130, 150, 0.1)" />
        <Skill img={figma} title="Figma" color="rgba(246, 107, 14, 0.1)" />
        <Skill img={uiux} title="UI / UX" color="rgba(126, 48, 225, 0.1)" />

      </div>
    </div>
  )

}

export default Skills;