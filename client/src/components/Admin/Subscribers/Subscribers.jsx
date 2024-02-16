// MainComponent.js
import React from 'react';
import Achievement from './Achievement';
import { achievements } from './AchievementsData.js';

const MainComponent = () => {
  return (
    <section className="section achievements_section" id="achievements">
      <h2 className="section__title" style={{ color: '#5779e0' }}>Achievements</h2>
      <span className="section__subtitle">My <span className="highlight" style={{ fontSize: '0.9rem' }}>Remarkable</span> Milestones</span>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <Achievement key={index} {...achievement} />
        ))}
      </div>
    </section>
  );
};

export default MainComponent;
