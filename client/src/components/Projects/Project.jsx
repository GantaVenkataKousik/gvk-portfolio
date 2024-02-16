// Project.js
import React from 'react';

const Project = ({ project }) => {
  const { title, imageName, content, tags, link } = project;
  const imagePath = `/images/${imageName}`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
      <div className="project project-1">
        <div className="image">
          <img src={imagePath} alt={title} />
        </div>
        <div className="info">
          <div className="title">
            <span>
              {title} <span><i className="fa-solid fa-arrow-up arrow"></i></span>
            </span>
          </div>
          <div className="content" style={{ fontSize: '0.9rem' }}>
            {content}
          </div>
          <ul className="tags">
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default Project;
