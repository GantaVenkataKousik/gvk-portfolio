// Home.jsx

import { Link } from 'react-scroll';
import ScrollDown from './ScrollDown';
import RateButton from './RateButton';
import Download from './Download';
import React, { useState, useEffect, useRef } from 'react';
import './style/home.css'

const Home = () => {

  const words = ['a DSA Specialist', 'a Web Developer', 'a Full Stack Developer', 'a Figma Designer', 'an Aspiring MAANG Engineer'];
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [direction, setDirection] = useState('forward');
  const [currentWord, setCurrentWord] = useState(words[0]);
  const dynamicTextRef = useRef(null);

  useEffect(() => {
    if (!dynamicTextRef.current) return;

    const animateText = () => {
      const text = currentWord.slice(0, letterIndex + 1);
      dynamicTextRef.current.textContent = text + '|';

      if (letterIndex === currentWord.length && direction === 'forward') {
        setDirection('backward');
      } else if (letterIndex === 0 && direction === 'backward') {
        setDirection('forward');
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }

      if (direction === 'forward') {
        setLetterIndex((prevIndex) => prevIndex + 1);
      } else if (direction === 'backward') {
        setLetterIndex((prevIndex) => prevIndex - 1);
      }
    };

    const timeout = setTimeout(animateText, 100);

    // Clean up the animation when the component unmounts
    return () => clearTimeout(timeout);
  }, [currentWord, direction, letterIndex, wordIndex, words]);

  // Update currentWord when wordIndex changes
  useEffect(() => {
    setCurrentWord(words[wordIndex]);
  }, [wordIndex, words]);


  return (
    <section className="home section" id="home">
      <div data-aos="fade-left" className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a href="https://www.linkedin.com/in/venkatakousik/" target="_blank" rel="noreferrer" className="home__social-icon">
              <i className="uil uil-linkedin"></i>
            </a>
            <a href="https://github.com/GantaVenkataKousik" target="_blank" rel="noreferrer" className="home__social-icon">
              <i className="uil uil-github-alt"></i>
            </a>
            <a href="https://twitter.com/mrinmoy91013697" target="_blank" rel="noreferrer" className="home__social-icon">
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>

          <div data-aos="fade-right" className="home__img">
            <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="circleClip">
                  <circle cx="100" cy="93.5" r="93.5" />
                </clipPath>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="#5779e0"
                clipPath="url(#circleClip)"
              />
              <image
                className="home__blob-img main-image"
                x="-10"
                y="18"
                href="/portfolio-images/kousik-bgremoved.png"
                clipPath="url(#circleClip)"
              />
            </svg>
          </div>


          <div className="home__data">
            <h1 className="home_title">Hi!<span className="wavefromof">👋</span>, I'm an<span className="highlight main-name">GVK</span> </h1>
            <h3 className="home__subtitle">
              I'm <span className="highlight"> Aspiring MAANG ENGINEER</span>
            </h3>
            <p className="home__description">
              High-level knowledge in <span className="highlight">DSA and Full Stack</span>, producing <span className="highlight">quality work.</span>
            </p>
            <div className="button-section">
              <Download />
            </div>
          </div>
        </div>

        <div className='scroll-rate'>

          <ScrollDown />
          <RateButton />
        </div>
      </div>
    </section>
  );
};

export default Home;
