import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Skills from './components/skills';
import './App.css'
import { useEffect } from 'react';
import Projects from './components/projects';
import Footer from './components/footer';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.title = "Refaat Somaia"
  }, [])
  return (
    <><NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
