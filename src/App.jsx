import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Project from './sections/Project';
// import Experience from './sections/Experience';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
// import Particlesbackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';
import IntroAnimation from './components/IntroAnimation';

const App = () => {
  const [introDone, setIntroDone] = useState(false);
  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
      {introDone && (
        <div className='relative text-white '>
          {/* <Particlesbackground/> */}
          <CustomCursor />
          <NavBar />
          <Home />
          <About />
          <Skills />
          <Project />
          {/* <Experience /> */}
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App