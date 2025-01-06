import '../styles/NavBar.css';
import { Link } from "react-scroll";
import resume from "../assets/Refaat somaia CV.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react';
import { faUser, faGears, faFolderOpen, faFile, faPhone } from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react';


function NavBar() {

  const [scrollProgress, setScrollProgress] = useState(0)
  useEffect(() => {
    document.addEventListener("scroll", function () {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled)
    })


  }, [])


  return (
    <>
      <div id='nav' className='navBar' >
        <Link offset={-100} to="hero" smooth={true} spy={true} duration={500} className='navBar-btn'>
          <FontAwesomeIcon className='icon-1' icon={faUser} />
          About me
          <div className='underLine' /></Link>
        <Link to="skills" smooth={true} spy={true} offset={-50} duration={500} className='navBar-btn'>
          <FontAwesomeIcon className='icon-1' icon={faGears} />

          Skills
          <div className='underLine' /></Link>
        <Link to="projects" smooth={true} spy={true} offset={-100} duration={500} className='navBar-btn'>
          <FontAwesomeIcon className='icon-1' icon={faFolderOpen} />

          Projects<div className='underLine' /></Link>

        <a target='blank' href={resume} className='navBar-btn'>
          <FontAwesomeIcon className='icon-1' icon={faFile} />
          Resume
          <div className='underLine' /></a>
        <Link to="contact" smooth={true} spy={true} offset={-80} duration={800} className='navBar-btn'>
          <FontAwesomeIcon className='icon-1' icon={faPhone} />

          Contact me<div className='underLine' /></Link>
        <div style={{ width: scrollProgress + "%" }} className="scroll-progress" />
        <h3>Refaat Somaia</h3>
      </div>

      <div className="bottomNav">

        <Link offset={20} to="skills" smooth={true} spy={true} duration={500} className='bottomNav-btn'>
          <FontAwesomeIcon className='icon' icon={faGears} />
          <p>Skills</p></Link>    <Link offset={-50} to="projects" smooth={true} spy={true} duration={500} className='bottomNav-btn'>
          <FontAwesomeIcon className='icon' icon={faFolderOpen} />
          <p>Projects</p></Link>
        <a target='blank' href={resume} className='bottomNav-btn'>
          <FontAwesomeIcon className='icon' icon={faFile} />
          <p>Resume</p>
        </a>
        <Link offset={-100} to="contact" smooth={true} spy={true} duration={500} className='bottomNav-btn'>
          <FontAwesomeIcon className='icon' icon={faPhone} />
          <p>Contact me</p></Link>




      </div>






    </>


  );
}
export default NavBar;
