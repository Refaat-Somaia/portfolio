import '../styles/projects.css'
import Project from './project';
import sparkleShip from "../assets/images/sparkleShip1-logo.png"
import soundly from "../assets/images/soundly-logo.png"
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import learGate from "../assets/images/LearGate.png"
import flutter from "../assets/images/flutter.svg"
import js from "../assets/images/js.png"
import carHuntVid from "../assets/CarHunt demo.mp4"
import css from "../assets/images/css.svg"
import nodeJs from "../assets/images/nodeJs.jpg"
import firebase from "../assets/images/firebase.svg"
import html from "../assets/images/html.png"
import carHunt from "../assets/images/carHunt-logo.png"
import sparkleShipVid from "../assets/SparkleShip demo.mp4"
import learnGateVid from "../assets/LearnGate demo.mp4"
import soundlyVid from "../assets/Soundly demo.mp4"
import budgetReactVid from "../assets/BudgetReact demo.mp4"
import budgetFlutterVid from "../assets/BudgetFlutter demo.mp4"
import react from "../assets/images/react.png"
import socketIo from "../assets/images/Socket-io.png"
import images from "./images";


function Projects() {
  const { soundlyImages, sparkleShipImages, learnGateImages, carHuntImages, budgetReactImages, budgetFlutterImages } = images;

  return (
    <>


      <div className="conatiner-projects" id="projects">

        <h1>My Projects</h1>
        <Project id={0} img={sparkleShip} images={sparkleShipImages} title={"Scholarship Platform Applicaion"} color={"#1687A7"} icon={faMobileScreenButton}
          description="SparkleShip is a scholarship platform application developed using
        Flutter for the front-end and node.js for the back-end. The purpose of this
        application is to help students search for and find scholarships that
        match their academic background. The application offers a variety of
        helpful features and services such as profile matching feature that
        compares the user’s profile attributes against the requirements for the
        application for a scholarship, a comprehensive search functionality that
        allows the user to search for scholarships using a search bar as well as
        the ability to use many filters, also the app offers chatting in groups service
        that allows the student to interact with and text other srudents of similar
        academic backgrounds." vid={sparkleShipVid} tech1={flutter} device={'phone'}
          tech2={nodeJs} tech3={socketIo} icon1Title="Flutter Mobile App" />

        <Project vid={budgetFlutterVid} images={budgetFlutterImages} title={"Flutter Budget App"} color={"#6AD0C1"} icon={faMobileScreenButton}

          tech1={flutter} tech2={firebase} description="A budget app developed using Flutter. The purpose of this app is to help users manage
          and keep track of their expenses and organize them into budgets, the app offers stats in the form of charts in oreder to help the 
          user better understand and analyze how their money was spent on different days, weeks, and months, 
          all of this data is saved using SQLite in Flutter. The app is integrated with a web version developed using React where the user can upload 
          their data and transfer it between both mobile and web versions of the app using Firebase's Firestore."
          icon1Title="Flutter Mobile App" codeLink="https://github.com/Refaat-Somaia/budget_app_flutter" device={'phone'}
        />



        <Project img={soundly} images={soundlyImages} title={"Music Player App"} color={"#49108B"} icon={faMobileScreenButton}
          vid={soundlyVid}
          tech1={flutter} description="Soundly is a customizable music player app that allows users to  access to 
all audio files on their device in one place where they can search for tracks as well as being able to create their own playlists. 
The app offers many features such as shuffle play which plays tracks in random order, play track on repeat, offer track controls from notifications, 
recently played tracks and more. 
The app also allows users the choice between multiple colored themes as well as the choice between a light and a dark modes."
          icon1Title="Flutter Mobile App" codeLink="https://github.com/Refaat-Somaia/Soundly---Music-Player" device={'phone'}
        />

        <Project img={learGate} images={learnGateImages} title="Student Portal Website" color={"#3F72AF"} device={'laptop'}
          description="This web application allows a student to log into their account which
          contains their academic information such as their GPA, achieved credits,
          faculty, personal information etc..., This data is all entered and managed
          by system admins who have their own dashboard within the app. Students
          can also view and download lectures as well as grades for their subjects
          which are uploaded by professors. The application also offers special
          features such as a to-do list, a productivity time, multiple themes to
          choose from as well as a dark theme." vid={learnGateVid} tech1={js} tech2={html}
          tech3={css} codeLink="https://github.com/Refaat-Somaia/LearnGate" tech4={firebase} icon1={faLaptop} icon1Title={"Web App - Responsive"}

        />
        <Project img={learGate} vid={budgetReactVid} images={budgetReactImages} title="React Budget App" color={"#6AD0C1"} device={'laptop'}
          description="A React budget app that lets users manage their budgets and keep track of their spendigs along with
          a statistics page that shows visual data about weekly, monthly, and yearly spendings.  
          Essential React concepts were implemented in this app such as the implemntaion of useContext for
          the budgets and expenses data to be accessible from within all the app components as well as 
          the making of a custom hook called useLocalStorage to be used for storing arrays of objects persistently."  tech1={react} tech2={css}
          tech3={firebase} codeLink="https://github.com/Refaat-Somaia/react_budget_app" icon1={faLaptop} icon1Title={"Web App - Responsive"}

        />
        <Project vid={carHuntVid} images={carHuntImages} img={carHunt} title={"Car Rental website"} color={"#F99417"} device={'laptop'}
          description="CarHunt is a car rental website that allows the users to browse a set
        available cars. The data of the cars are stored in a firebase database. When a user selects
        one of the cars he is taken to page where the full information of the car is displayed, 
        here the user can click on the 'Book' button (provided he is already logged into the system) so he can select the booking date and duration, 
        confirm his address and confirm the rent request, the request is then sent to the database
        where it could be reviewed and approved by an admin. " codeLink="https://github.com/Refaat-Somaia/carHunt" tech1={react} tech2={css} tech3={firebase}
        />
      </div>

    </>);
}
export default Projects;
