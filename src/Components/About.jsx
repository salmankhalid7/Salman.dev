import React from 'react';
import About_image from '../assets/About image.jpg';
import '../css/About.css';
import { FaReact } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <section className="About" id="About" aria-labelledby="about-heading">
      <div className="About-img">
        <img 
          src={About_image} 
          alt="Salman, a Front-End Developer based in Lahore, Pakistan" 
          loading="lazy"
          decoding="async"
          sizes="(max-width: 480px) 85vw, (max-width: 768px) 70vw, 35vw"
        />
        
      </div>

      <div className="About-intro">
        <h3 id="about-heading">About Me</h3>
        <strong aria-live="polite">
         <span className="type-animations">
            <Typewriter 
              words={['Web Developer', 'Front-End Developer']}
              loop={true}
              cursor
              cursorStyle=" | "
              typeSpeed={120}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </span> 
        </strong>
        <p>
          Hi! I'm a front-end developer with a strong foundation in computer science. I specialize in building responsive, accessible, and user-focused web interfaces using modern technologies such as React, JavaScript, and CSS. My work is centered around creating clean, efficient, and scalable UI components that enhance user experience across all devices. I'm deeply committed to writing maintainable code, following best practices, and delivering high-quality digital solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
