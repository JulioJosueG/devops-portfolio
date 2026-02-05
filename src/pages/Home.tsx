import React from 'react';
import Hero from '../components/Hero';
import SkillsGrid from '../components/SkillsGrid';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';

const Home: React.FC = () => {
    return (
        <div className="space-y-24 pb-20">
            <Hero />
            <div id="about" className="scroll-mt-24">
                <About />
            </div>
            <div id="skills" className="scroll-mt-24">
                <SkillsGrid />
            </div>
            <div id="projects" className="scroll-mt-24">
                <Projects />
            </div>



            <div id="contact" className="scroll-mt-24">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
