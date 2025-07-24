import React from 'react'
import '../css/Project_card.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ image,name, description, repoLink, liveLink, reverse }) => {
  return (
    <div className={`Project-card ${reverse ? 'reverse' : ''}`}>
      <div className="project-image">
        <img src={image} alt="Project Preview" />
      </div>
      <div className="project-intro">
        <h3>{name}</h3>
        <span>{description}</span>
        <div className="Project-btn">
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            <button>
              <FaGithub style={{ marginRight: "6px" }} />
              Repo
            </button>
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <button>
              <FaExternalLinkAlt style={{ marginRight: "6px" }} />
              Live Demo
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
