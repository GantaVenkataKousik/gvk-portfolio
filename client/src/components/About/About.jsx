import React from 'react';
import './about.css';

const About = () => {

  const handleDownload = () => {
    const url = '/documents/GVK-Resume.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = 'GVK.pdf';
    link.click();
  };
  return (
    <section className="about section" id="about">
      <h2 className="section__title" style={{ color: '#5779e0' }}>About Me</h2>
      <span className="section__subtitle"> My Introduction</span>

      <div data-aos="fade-left" className="about__container container grid">
        <img src="/me/m3.jpg" alt="" style={{ borderRadius: '20px' }} />

        <div className="about__data">
          <p className="about__description">
            👋 Hi there! I'm an DSA Specialist and a versatile full-stack developer knowledge in <span className="highlight">MERN stack 🌐</span> , crafting robust
            solutions blending <span className="highlight">MongoDB, Express, React, and Node.js</span> .
            Proficient in Java, Python,C,C++ and JavaScript,🔍I have created dyanmic and user-friendly<span className="highlight">web
              mobile apps using flutter and performed in depth analysis on data using tools like power bi.</span> 💻. <br /><br />
            I have created excellent <span className="highlight">UI/UX designs using FIGMA , Wix Studio </span>every work will definitely stole your heart.
            <br />
            <br />
            Passionate about problem-solving, I've conquered 📊 <span className="highlight">1500+ DSA
              challenges</span> , securing top ranks on platforms like GeeksForGeeks,Leetcode and coding Ninjas 🏆.
            <br />
          </p>

          <div className="about_info">
            <div>
              <span className="about__info-title">Fast</span>
              <span className="about__info-name"> Learner</span>
            </div>
            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">Completed <br />
                project</span>
            </div>
            <div>
              <span className="about__info-title">24/7</span>
              <span className="about__info-name">Available<br />
              </span>
            </div>
          </div>

          <div className="about__buttons">

            <button
              onClick={handleDownload}
              className="button button--flex main-btn"
              style={{ whiteSpace: 'nowrap', fontSize: 'inherit' }}
            >
              Download CV<i className="uil uil-download-alt button__icon"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;