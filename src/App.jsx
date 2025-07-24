import React from 'react';
import Navbar from './Components/Navbar';
import Introduction from './Components/Introduction';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <About />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
