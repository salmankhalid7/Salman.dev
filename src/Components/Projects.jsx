import React from "react";
import ProjectCard from "./ProjectCard";
import "../css/Project_card.css";
import movieflix from "@/assets/movieflix.png";
import wavingHand from "@/assets/waving-hand.png";
import zestAi from "@/assets/Zest_Ai.png";
import zhenxiAi from "@/assets/Zhenix_Ai.png";

function Projects() {
  return (
    <div className="Projects" id="Projects">
      <h2 id="Project-heading">Featured Projects</h2>
      <h3 id="Project-headline">
        Real-world solutions built to solve business problems and drive growth.
      </h3>

      <ProjectCard
        image={zestAi}
        name="Zest Ai"
        description={`Built a full-stack AI platform that transforms lengthy PDFs and documents into structured, actionable knowledge. ZAI leverages Large Language Models (LLMs) to generate intelligent summaries, extract key concepts, and accelerate learning and research workflows.Designed with a cost-efficient architecture where AI-generated outputs are persisted in MongoDB, enabling instant retrieval on subsequent requests without reprocessing the document. This significantly reduces API costs while improving performance and scalability.`}
        repoLink="https://github.com/salmankhalid7/Wordswiz"
        liveLink="https://salmankhalid7.github.io/Wordswiz/"
      />

      <ProjectCard
        image={zhenxiAi}
        name="Zhenx Ai"
        description={`Zhenix AI is an AI-powered code review platform that helps developers and engineering teams identify bugs, security vulnerabilities, and performance bottlenecks before they reach production. By delivering instant, intelligent feedback across multiple programming languages, Zhenix AI accelerates development cycles while improving code quality and reliability.`}
        repoLink="https://github.com/salmankhalid7/Open-Weather"
        liveLink="https://salmankhalid7.github.io/Open-Weather/"
        reverse={true}
      />

      <ProjectCard
        image={movieflix}
        name="Movie Flix"
        description={`Users often struggle to discover relevant movies and access reliable information across fragmented entertainment platforms. MovieFlix solves this by providing a centralized movie discovery experience where users can instantly search, explore, and access detailed movie insights in real time. Built with a modern full-stack architecture, it integrates external movie data APIs with a responsive frontend to deliver fast, scalable, and seamless content retrieval. The platform transforms movie exploration into an intuitive, data-driven experience that enhances user engagement and content accessibility.
`}
        repoLink="https://github.com/salmankhalid7/Task-Lister"
        liveLink="https://salmankhalid7.github.io/Task-Lister/"
      />
    </div>
  );
}

export default Projects;
