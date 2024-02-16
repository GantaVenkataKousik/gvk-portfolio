import React from 'react';

const SkillItem = ({ name, imageName, percentage }) => {
  const imagePath = `/portfolio-images/${imageName}.png`;

  return (
    <div className="skills__data">
      <div className="skills__titles">
        <h3 className="skills__name">
          <img src={imagePath} className="skills__logo" width="20px" alt={`Logo for ${name}`} />
          {name}
        </h3>
        <span className="skills__number">{percentage}%</span>
      </div>
      <div className="skills__bar">
        <span
          className={`skills__percentage skills__${name.toLowerCase().replace(/\s+/g, '-')}`}
          style={{ width: `${percentage}%` }}
        ></span>
      </div>
    </div>
  );
};

export default SkillItem;
