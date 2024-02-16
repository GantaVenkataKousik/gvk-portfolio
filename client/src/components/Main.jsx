import React from 'react';
import { Element } from 'react-scroll';
import  Home  from './Home/Home.jsx';
import  About  from './About/About.jsx';
import  Skills  from './Skills/Skills.jsx';
import  Projects  from './Projects/Projects.jsx';
import  Achievements  from './Achievements/Achievements.jsx';
import  Contact  from './Contact/Contact.jsx';


export default function Main() {
    
    return (
        <> 
            <main className='main'>
                <Element name="home">
                    <Home />
                </Element>
                <Element name="about">
                    <About />
                </Element>
                <Element name="skills">
                    <Skills />
                </Element>
                <Element name="projects">
                    <Projects />
                </Element>
                <Element name="achievements">
                    <Achievements />
                </Element>
                <Element name="contact">
                    <Contact />
                </Element>
            </main>
        </>
    );
}
