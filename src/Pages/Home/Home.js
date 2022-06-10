import React from 'react';
import Banner from './Banner';
import Features from './Features/Features';
import Projects from './Projects/Projects';
import Services from './Services/Services';
import Skills from './Skills/Skills';
import Works from './Works/Works';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Skills></Skills>
            <Features></Features>
            <Services></Services>
            <Works></Works>
        </div>
    );
};

export default Home;