// Projects.jsx
import React from 'react';
import Experience from './Experience.jsx';
import { experiences } from './ExperienceData.js';
const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2 className="section__title" style={{ color: '#5779e0' }}>Experiences</h2>
      <span className="section__subtitle">My <span className="highlight" style={{ fontSize: '0.9rem' }}>technical level</span></span>
      <div className="container-projects">
        {experiences.map((experience) => (
          <Experience key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
