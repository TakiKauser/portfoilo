import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Intro from '../../Intro/Intro';
import Projects from '../../Projects/Projects';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Skills from '../../Skills/Skills';

const HomePage = () => {
    return (
        <>
            <Navigation />
            <Intro />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </>
    );
};

export default HomePage;