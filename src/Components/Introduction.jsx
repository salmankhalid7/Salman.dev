import React, { useCallback } from "react";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import profilePic from "../assets/me.jpg";
import "../css/Introduction.css";
import wavinghand from "../assets/waving-hand.png";

const techStack = [
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
    name: "React.js",
    url: "https://react.dev/",
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
  {
    name: "Python",
    url: "https://www.python.org/",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    name: "Express.js",
    url: "https://expressjs.com/",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  },
  {
    name: "Node.js",
    url: "https://nodejs.org/",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Redis",
    url: "https://redis.io/",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
  },
  {
    name: "Linux",
    url: "https://www.linux.org/",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
  },
  {
    name: "Docker",
    url: "https://www.docker.com/",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  },
  {
    name: "Figma",
    url: "https://www.figma.com/",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
  {
    name: "Postman",
    url: "https://www.postman.com/",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
  },
  {
    name: "Vercel",
    url: "https://vercel.com/",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
  },
  {
    name: "Render",
    url: "https://render.com/",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpvyw1hTUVazYxkdcip4QmeNqx40bUR7RiogTY8NR5g&s=10",
  },
  {
    name: "Socket.io",
    url: "https://socket.io/",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg",
  },
  {
    name: "RAG models",
    url: "https://www.ibm.com/think/topics/retrieval-augmented-generation",
    img: "https://static.vecteezy.com/system/resources/previews/034/869/661/non_2x/rag-letter-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg",
  },
  {
    name: "Lang Chain",
    url: "https://www.langchain.com/",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMAPlVgYyaiUkHKrHhBKgWzeDYwTukFAZBolJb0hX_w&s=10",
  },
];

// SVG fallback for images
const FALLBACK_ICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='3' width='20' height='14' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='8' y1='21' x2='16' y2='21'%3E%3C/line%3E%3Cline x1='12' y1='17' x2='12' y2='21'%3E%3C/line%3E%3C/svg%3E";

const FALLBACK_PROFILE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Ccircle cx='12' cy='8' r='4'%3E%3C/circle%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3C/svg%3E";

const Introduction = () => {
const openResume = useCallback(() => {

  
  const url = "/Salman_Khalid_Resume.pdf";
  
  console.log("Attempting to open:", url);
  console.log("Current URL:", window.location.href);

  // Try opening
  const newWindow = window.open(url, "_blank");
  if (!newWindow) {
    alert("Popup blocked! Please allow popups for this site.");
  }
}, []);
  const handleImageError = useCallback((e) => {
    e.target.onerror = null;
    e.target.src = FALLBACK_ICON;
  }, []);

  const handleProfileError = useCallback((e) => {
    e.target.onerror = null;
    e.target.src = FALLBACK_PROFILE;
  }, []);

  return (
    <div className="introduction-container" id="home">
      <div className="badge-container">
        <span className="badge" role="status" aria-label="Open to work">
          🟢 Open to Work
        </span>
      </div>

      <div className="blob-wrapper">
        <div className="blob-container">
          <svg
            viewBox="0 0 200 200"
            className="blob-svg"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Profile picture"
          >
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
              onError={handleProfileError}
            />
            <path
              className="blob-path blob-border"
              fill="none"
              stroke="#0077b5"
              strokeWidth="2"
              d="M46.9,-69.3C60.5,-59.6,70.4,-45.2,73.4,-30.3C76.4,-15.5,72.5,0,64.1,13.3C55.7,26.5,42.8,37.4,29.1,45.9C15.4,54.4,0.9,60.4,-13.6,63.5C-28.1,66.6,-42.7,66.8,-54.5,59.4C-66.3,52.1,-75.3,37.2,-77.2,21.5C-79,5.9,-73.6,-10.6,-66.1,-26.3C-58.7,-42,-49.3,-56.9,-36.2,-66.6C-23.1,-76.3,-6.5,-80.9,8.9,-82.2C24.3,-83.6,48.7,-81.6,46.9,-69.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      <div className="left-section">
        <div className="name-container">
          <h1>
            Full Stack MERN
            <br />
            <span className="gradient-text">Engineer</span>
            <img
              src={wavinghand}
              alt="Waving hand emoji"
              className="waving-hand"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
              }}
            />
          </h1>
          <p>
            Hi, I'm Salman Khalid. I help businesses build intelligent products,
            automate workflows, and scale faster.
          </p>
          <div className="location">
            <FaMapMarkerAlt color="#0077b5" aria-hidden="true" />
            <span>Lahore, Pakistan</span>
          </div>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/salmankhalid13"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={24} aria-hidden="true" />
          </a>
          <a
            href="https://github.com/salmankhalid7"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
            aria-label="GitHub profile"
          >
            <FaGithub size={24} aria-hidden="true" />
          </a>
          <button
            className="resume-btn"
            onClick={openResume}
            aria-label="View resume"
            type="button"
          >
            📄 My Resume
          </button>
        </div>
      </div>

      <div className="tech-stack">
        <div className="tech-stack-header">
          <h3>Tech Stack |</h3>
          <div className="tech-divider" role="presentation"></div>
        </div>
        <div className="tech-icons">
          {techStack.map((tech) => (
            <div className="tech-icon-wrapper" key={tech.name}>
              <a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Learn more about ${tech.name}`}
              >
                <img
                  src={tech.img}
                  alt={`${tech.name} icon`}
                  loading="lazy"
                  onError={handleImageError}
                />
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
