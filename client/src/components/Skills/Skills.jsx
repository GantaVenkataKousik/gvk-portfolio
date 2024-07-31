import React, { useState } from 'react';
import SkillItem from './SkillItem';
import './skills.css';

const Skills = () => {
  const [skillsState, setSkillsState] = useState([
    { title: 'FullStack Developer', isOpen: false },
    { title: 'UX/UI Designer', isOpen: false },
    { title: 'DSA Specialist', isOpen: false },
    { title: 'Frontend Developer', isOpen: false },
    { title: 'Backend Developer', isOpen: false },
    { title: 'ML Engineer', isOpen: false },
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

                {skill.isOpen && (
                  <>
                    {skill.title === 'FullStack Developer' && (
                      <>
                        <SkillItem name="React" imageName="react.png" percentage={93} />
                        <SkillItem name="Express" imageName="express.png" percentage={91} />
                        <SkillItem name="Node Js" imageName="node.png" percentage={88} />
                        <SkillItem name="MongoDB" imageName="mongodb.png" percentage={81} />

                      </>
                    )}

                    {skill.title === 'App Developer' && (
                      <>
                        <SkillItem name="Flutter" imageName="flutter.png" percentage={89} />
                      </>
                    )}




                    {skill.title === 'UX/UI Designer' && (
                      <>
                        <SkillItem name="Figma" imageName="figma.png" percentage={96} />
                        <SkillItem name="WixStudio" imageName="wix-studio.png" percentage={86} />
                        <SkillItem name="Framer Motion" imageName="framer-motion.webp" percentage={68} />
                        <SkillItem name="Blender" imageName="blender.png" percentage={52} />
                      </>
                    )}
                    {skill.title === 'DSA Specialist' && (
                      <>
                        <SkillItem name="All Topics" imageName="dsa.png" percentage={92} />
                      </>
                    )}
                    {skill.title === 'Frontend Developer' && (
                      <>
                        <SkillItem name="React" imageName="react.png" percentage={89} />
                        <SkillItem name="Vue" imageName="vue.png" percentage={69} />
                        <SkillItem name="Next Js" imageName="nextjs.png" percentage={71} />
                        <SkillItem name="JavaScript" imageName="javascript.png" percentage={75} />
                        <SkillItem name="HTML" imageName="html.png" percentage={90} />
                        <SkillItem name="CSS" imageName="css.png" percentage={77} />

                      </>
                    )}

                    {skill.title === 'Backend Developer' && (
                      <>
                        <SkillItem name="MongoDB" imageName="mongodb.png" percentage={92} />
                        <SkillItem name="Node Js" imageName="node.png" percentage={72} />
                        <SkillItem name="MySQL" imageName="sql.png" percentage={62} />
                      </>
                    )}
                    {skill.title === 'ML Engineer' && (
                      <>
                        <SkillItem name="Neural Networks" imageName="nn.png" percentage={67} />
                        <SkillItem name="Deep Learning Networks" imageName="dl.jpg" percentage={61} />
                        <SkillItem name="NLP" imageName="nlp.png" percentage={56} />
                      </>
                    )}
                    {skill.title === 'DataScience Enthusiast' && (
                      <>
                        <SkillItem name="Data Analytics " imageName="dataanlytics.jpg" percentage={67} />
                      </>
                    )}
                    {skill.title === 'Game Developer' && (
                      <>
                        <SkillItem name="Unity " imageName="unty.png" percentage={51} />
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
