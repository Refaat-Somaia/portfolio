import '../styles/Hero.css'
import blob from "../assets/images/pfp.svg"
import wave from "../assets/images/wave1.svg"
import { useState, useEffect } from 'react'


function Hero() {

    const [anim, setAnime] = useState();
    const [btnText, setBtnText] = useState("Profile");
    const [h1, setH1] = useState("Hello!");
    const [h2, setH2] = useState();
    const [changed, setChanged] = useState(false);


    let text = "I’m Refaat Somaia, a Software Engineer Specializing in Flutter & Frontend Web Development.".split(" ")
    useEffect(() => {
        let e = document.getElementsByTagName("h2")[0]
        e.innerHTML = ""
        // document.getElementsByTagName("h2")[0].innerHTML=""
        for (let i = 0; i < text.length; i++) {
            e.innerHTML += `<span>${text[i]} </span>`
        }
        setTimeout(() => {
            Array.from(e.children).forEach((child, i) => {

                if (i == 8 || i == 10) {

                    child.classList.add("highlight")

                }
                const delay = i + 2 < 10 ? `${0}.${i + 2}s` : `${1}.${i % 10 + 3}s`;
                child.style.animation = `span-in 0.5s forwards ${delay}`;
            });
        }, 0);

    }, [])



    function changeTextToProfile() {
        let e = document.getElementsByClassName("profile-text")[0]
        let e1 = document.getElementsByClassName("text")[0]
        e1.style.animation = "profileOut 0.4s forwards"

        setTimeout(function () {
            e1.style.display = 'none'
            e.style.display = 'inline-block'
            e.style.animation = "profileIn 0.4s forwards"
        }, 400)
        let e2 = document.getElementsByTagName("h2")[0]

        for (let i = 0; i < e2.children.length; i++) {
            e2.children[i].style.animation = "none"
            e2.children[i].style.opacity = 1

            document.getElementById("btn").style.opacity = 1
            document.getElementById("btn").style.animation = "none"
        }
    }

    function backToWelcomeText() {

        let e = document.getElementsByClassName("profile-text")[0]
        let e1 = document.getElementsByClassName("text")[0]

        e.style.animation = "profileOut 0.5s forwards"

        setTimeout(function () {
            e.style.display = 'none'
            e1.style.display = 'inline-block'
            e1.style.animation = "profileIn 0.4s forwards"

        }, 400)

    }

    return (
        <><div style={{ animation: anim }} className="hero" id='hero'>
            <img className='img2' src={blob} alt="" />

            <div className="text">

                <div className="h1-container">
                    <h1 id="h1" >{h1}</h1>
                </div>
                <h2>{h2}</h2>
                <button id='btn' onClick={changeTextToProfile}>{btnText}</button>
            </div>
            <div className="profile-text">
                <p>I’m a 5th-year Software Engineering student.
                    With strong experience in both web development and mobile app development using Flutter,
                    I am passionate about coding and constantly eager to learn new technologies while always striving to
                    master my current skills in order to deliver the best solutions.
                </p>
                <button onClick={backToWelcomeText}>Back</button>

            </div>


            <img className='img1' src={blob} alt="" />
            <div className="bottom-wave">

            </div>
        </div>


        </>
    )


}
export default Hero;