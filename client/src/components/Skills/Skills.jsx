import React, { useState } from 'react';
import SkillItem from './SkillItem';
import './skills.css';

const Skills = () => {
  const [skillsState, setSkillsState] = useState([
    { title: 'Frontend developer', isOpen: true },
    { title: 'Backend developer', isOpen: false },
    { title: 'Designer', isOpen: false },
    // Add other skills here
  ]);
  const toggleSkills = (index) => {
    setSkillsState((prevSkillsState) => {
      const newSkillsState = prevSkillsState.map((skill, i) => {
        return {
          ...skill,
          isOpen: i === index ? !skill.isOpen : false,
        };
      });
      return newSkillsState;
    });
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title" style={{ color: '#5779e0' }}>
        Skills
      </h2>
      <span className="section__subtitle">
        My <span className="highlight" style={{ fontSize: '0.9rem' }}>technical</span> level
      </span>
      <div data-aos="fade-up" className="skills__container container grid">

        {skillsState.map((skill, index) => (
          <div key={index}>
            <div className={`skills__content ${skill.isOpen ? 'skills__open' : 'skills__close'}`}>
              <div className="skills__header" onClick={() => toggleSkills(index)}>
                <i className="uil uil-brackets-curly skills__icon"></i>
                <div>
                  <h1 className="skills__title">{skill.title}</h1>
                </div>
                <i className={`uil uil-angle-${skill.isOpen ? 'up' : 'down'} skills__arrow`}></i>
              </div>

              <div className="skills__list grid">
                {/* Add SkillItems for each skill */}
                {skill.isOpen && (
                  <>
                    {skill.title === 'Frontend developer' && (
                      <>
                        <SkillItem name="HTML" imageName="html" percentage={90} />
                        <SkillItem name="CSS" imageName="css" percentage={77} />
                        <SkillItem name="JavaScript" imageName="javascript" percentage={75} />
                        <SkillItem name="React" imageName="react" percentage={70} />
                      </>
                    )}


                    {skill.title === 'Designer' && (
                      <>
                        <SkillItem name="Figma" imageName="figma" percentage={60} />
                        <SkillItem name="Blender" imageName="blender" percentage={52} />
                      </>
                    )}


                    {skill.title === 'Backend developer' && (
                      <>
                        <SkillItem name="Node Js" imageName="node" percentage={72} />
                        <SkillItem name="MySQL" imageName="sql" percentage={62} />
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
