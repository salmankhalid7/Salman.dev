import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from '../assets/me.jpg';
import '../css/Introduction.css';
import wavinghand from '../assets/waving-hand.png';

const Introduction = () => {
    const openResume = () => {
        window.open('/Salman_Khalid_Resume.pdf', '_blank');
    };
    return (
        <div className="introduction-container" id='home'>
            <div className="name-container">
                <h1>Front-End React<br /> Developer  <img src={wavinghand} alt="" className='waving-hand' />
                </h1>
                <p>
                    Hi, I am Salman Khalid. A passionate Front-End React <br />
                    Developer based in Lahore, Pakistan. 📍
                </p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/salman-khalid7/" target="_blank" rel="noopener noreferrer" className='social-icon'>
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://github.com/salmankhalid7" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                    </a>
                    <div className="resume">
                        <button className="resume-btn" onClick={openResume}>My Resume</button>
                    </div>
                </div>
            </div>

            <svg viewBox="0 0 200 200" className="blob-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="blobClip">
                        <path
                            className="blob-path"
                            fill="#000"
                            d="M46.9,-69.3C60.5,-59.6,70.4,-45.2,73.4,-30.3C76.4,-15.5,72.5,0,64.1,13.3C55.7,26.5,42.8,37.4,29.1,45.9C15.4,54.4,0.9,60.4,-13.6,63.5C-28.1,66.6,-42.7,66.8,-54.5,59.4C-66.3,52.1,-75.3,37.2,-77.2,21.5C-79,5.9,-73.6,-10.6,-66.1,-26.3C-58.7,-42,-49.3,-56.9,-36.2,-66.6C-23.1,-76.3,-6.5,-80.9,8.9,-82.2C24.3,-83.6,48.7,-81.6,46.9,-69.3Z"
                            transform="translate(100 100)"
                        />
                    </clipPath>
                </defs>
                <image
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    href={profilePic}
                    clipPath="url(#blobClip)"
                />
                <path
                    className="blob-path border-path"
                    fill="none"
                    stroke="black"
                    strokeWidth="1.5"
                    d="M46.9,-69.3C60.5,-59.6,70.4,-45.2,73.4,-30.3C76.4,-15.5,72.5,0,64.1,13.3C55.7,26.5,42.8,37.4,29.1,45.9C15.4,54.4,0.9,60.4,-13.6,63.5C-28.1,66.6,-42.7,66.8,-54.5,59.4C-66.3,52.1,-75.3,37.2,-77.2,21.5C-79,5.9,-73.6,-10.6,-66.1,-26.3C-58.7,-42,-49.3,-56.9,-36.2,-66.6C-23.1,-76.3,-6.5,-80.9,8.9,-82.2C24.3,-83.6,48.7,-81.6,46.9,-69.3Z"
                    transform="translate(100 100)"
                />
            </svg>
            <div className="tech-stack">
                <h3 align="left"> Tech Stack |</h3>
                <div className="tech-icons">
                    {[
                        {
                            name: "CSS3",
                            url: "https://www.w3schools.com/css/",
                            img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
                        },
                        {
                            name: "HTML5",
                            url: "https://www.w3.org/html/",
                            img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
                        },
                        {
                            name: "JavaScript",
                            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                            img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                        },
                        {
                            name: "React.js ",
                            url: "https://reactjs.org/",
                            img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
                        },
                        {
                            name: "C++",
                            url: "https://www.w3schools.com/cpp/",
                            img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
                        },
                        {
                            name: "MySQL",
                            url: "https://www.mysql.com/",
                            img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
                        },
                    ].map((tech, idx) => (
                        <div className="tech-icon-wrapper" key={idx}>
                            <a href={tech.url} target="_blank" rel="noreferrer">
                                <img src={tech.img} alt={tech.name} width="40" height="40" />
                            </a>
                            <span className="tech-label">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Introduction;