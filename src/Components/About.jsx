import React, { useEffect, useRef } from "react";
import "../css/About.css";

const About = () => {
  const typewriterRef = useRef(null);
  const cardRefs = useRef([]);
  const credRefs = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Typewriter Effect
    const words = [
      "AI Solutions Architect",
      "Full Stack Engineer",
      "Automation Specialist",
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    let timeoutId = null;

    function type() {
      if (!typewriterRef.current) return;
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typewriterRef.current.textContent = currentWord.substring(
          0,
          charIndex - 1,
        );
        charIndex--;
        typeSpeed = 60;
      } else {
        typewriterRef.current.textContent = currentWord.substring(
          0,
          charIndex + 1,
        );
        charIndex++;
        typeSpeed = 120;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }

      timeoutId = setTimeout(type, typeSpeed);
    }

    // Start typewriter after initial load
    const initialTimeout = setTimeout(type, 1000);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe expertise cards
    cardRefs.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(card);
      }
    });

    // Observe credibility items
    credRefs.current.forEach((item, index) => {
      if (item) {
        item.style.opacity = "0";
        item.style.transform = "translateY(10px)";
        item.style.transition = `all 0.4s ease ${index * 0.15}s`;
        observer.observe(item);
      }
    });

    // Observe CTA
    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
      ctaRef.current.style.transform = "translateY(20px)";
      ctaRef.current.style.transition = "all 0.6s ease 0.3s";
      observer.observe(ctaRef.current);
    }

    // Parallax effect for orbs on mouse move
    const handleMouseMove = (e) => {
      const orbs = document.querySelectorAll(".gradient-orb");
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.5;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialTimeout);
      document.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-heading"
    >
  

      {/* Main Grid */}
      <div className="about-grid">
        {/* Left: Image + Social Proof */}
        <div className="about-visual">
          <div className="image-frame">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=1000&fit=crop&q=80"
              alt="Salman Khalid - AI Solutions Architect working on laptop with modern workspace setup"
              loading="lazy"
            />
            <div className="stats-float">
              <div className="stat-item">
                <div className="stat-value accent">
                  <span className="star">★</span> 4.9
                </div>
                <div className="stat-label">Client Rating</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">100%</div>
                <div className="stat-label">On-Time Delivery</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">10+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="about-content-col">
          {/* Role Badge with Typewriter */}
          <div className="role-badge">
            <div className="role-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="typewriter-text" ref={typewriterRef}>
              AI Solutions Architect<span className="cursor"></span>
            </span>
          </div>

          {/* Bio */}
          <p className="bio-text">
            I'm <strong>Salman Khalid</strong>, a Full Stack Engineer
            specializing in AI-powered applications and intelligent automation
            systems. I help startups and businesses transform ideas into
            scalable digital products while reducing operational overhead
            through automation and AI integration.
          </p>

          {/* Expertise Cards */}
          <div className="expertise-section">
            <div className="section-mini-title">Core Expertise</div>
            <div className="expertise-grid">
              <div
                className="expertise-card"
                ref={(el) => (cardRefs.current[0] = el)}
              >
                <div className="card-icon-wrap ai">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a4 4 0 0 1 4 4c0 2.5-3 3.5-3 6" />
                    <path d="M12 22a4 4 0 0 1-4-4c0-2.5 3-3.5 3-6" />
                    <path d="M8 22a4 4 0 0 1-4-4c0-2.5 3-3.5 3-6" />
                    <path d="M16 22a4 4 0 0 0 4-4c0-2.5-3-3.5-3-6" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h4>AI Solutions</h4>
                <p>Agents, RAG, LLM Integration</p>
                <div className="card-arrow">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div
                className="expertise-card"
                ref={(el) => (cardRefs.current[1] = el)}
              >
                <div className="card-icon-wrap stack">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h4>Full Stack</h4>
                <p>MERN & Modern Web Apps</p>
                <div className="card-arrow">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div
                className="expertise-card"
                ref={(el) => (cardRefs.current[2] = el)}
              >
                <div className="card-icon-wrap auto">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <h4>Automation</h4>
                <p>Business Workflow Systems</p>
                <div className="card-arrow">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div
                className="expertise-card"
                ref={(el) => (cardRefs.current[3] = el)}
              >
                <div className="card-icon-wrap cloud">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  </svg>
                </div>
                <h4>Cloud</h4>
                <p>Scalable Infrastructure</p>
                <div className="card-arrow">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Credibility Strip */}
          <div className="credibility-strip">
            <div className="cred-item" ref={(el) => (credRefs.current[0] = el)}>
              <div className="cred-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <span className="cred-text">AI Agents & Automation</span>
            </div>
            <div className="cred-item" ref={(el) => (credRefs.current[1] = el)}>
              <div className="cred-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <span className="cred-text">Full Stack Development</span>
            </div>
            <div className="cred-item" ref={(el) => (credRefs.current[2] = el)}>
              <div className="cred-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <span className="cred-text">Cloud & Scalable Architecture</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
