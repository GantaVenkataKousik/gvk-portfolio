// Projects.jsx
import React from 'react';
import FeedBackC from './FeedBackC.jsx';
import { feedbacks } from './FeedBackData.js';

const FeedBack = () => {


  return (
    <section className="section" id="projects">
      <h2 className="section__title" style={{ color: '#5779e0' }}>Projects</h2>
      <span className="section__subtitle">My <span className="highlight" style={{ fontSize: '0.9rem' }}>technical level</span></span>
      <div className="container-projects">
        {feedbacks.map((project) => (
          <FeedBackC key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeedBack;
