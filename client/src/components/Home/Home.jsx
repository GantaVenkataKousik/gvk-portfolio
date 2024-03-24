// Home.jsx

import { Link } from 'react-scroll';
import ScrollDown from './ScrollDown';
import RateButton from './RateButton';
import Download from './Download';
import React, { useState, useEffect, useRef } from 'react';
import './style/home.css'
import Animations from '../Animations';

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
    <>

      <Animations />

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
              <img src="/me/gvk4.jpg" alt="" />

            </div>


            <div className="home__data">
              <h1 className="home_title">
                <div className='welcome'>Hi!👋,I'm
                  <span>  </span> </div>
                <span></span>
                <div><span className="highlight main-name">GVK</span>
                  <span className="highlight full-name">Ganta Venkata Kousik</span></div> </h1>
              <h3 className="home__subtitle">
                I'm an <span className="highlight"> Aspiring MAANG ENGINEER</span>
              </h3>
              <p className="home__description">
                High-level knowledge in <span className="highlight">DSA , Designing , Full Stack </span>, producing <span className="highlight">quality work.</span>
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
    </>
  );
};

export default Home;
