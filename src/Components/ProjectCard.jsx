import React, { useEffect, useRef } from 'react'
import '../css/Project_card.css'
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'

const ProjectCard = ({ image, name, description, repoLink, liveLink, reverse }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={cardRef} 
      className={`project-card ${reverse ? 'reverse' : ''}`}
    >
      <div className="project-image-wrapper">
        <div className="project-image">
          <img src={image} alt={name} />
          <div className="image-overlay">
            <div className="overlay-content">
              <FaEye className="overlay-icon" />
              <span>Preview</span>
            </div>
          </div>
        </div>
      </div>
      <div className="project-intro">
        <h3>{name}</h3>
        <p className="project-description">{description}</p>
        <div className="project-btn-group">
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-github">
            <FaGithub />
            <span>Code</span>
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-live">
            <span>Live Demo</span>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard