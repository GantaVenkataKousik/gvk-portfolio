// Project.js
import React from 'react';
import './experience.css';

const Experience = ({ experience }) => {
  const { title, imageName, content, tags, link } = experience;
  const imagePath = `/experience/${imageName}`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
      <div className="project project-1">
        <div className="image">
          <img src={imagePath} alt={title} />
        </div>
        <div className="info">
          <div className="title">
            <span >
              {title} <span><i className="fa-solid fa-arrow-up arrow"></i></span>
            </span>
          </div>
          <div className="content" >
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

export default Experience;
