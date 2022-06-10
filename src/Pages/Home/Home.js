import React from 'react';
import Banner from './Banner';
import Features from './Features/Features';
import Services from './Services/Services';
import Skills from './Skills/Skills';
import Works from './Works/Works';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Features></Features>
            <Services></Services>
            <Works></Works>
        </div>
    );
};

export default Home;