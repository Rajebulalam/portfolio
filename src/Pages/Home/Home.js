import React, { useEffect } from 'react';
import Banner from './Banner';
import Features from './Features/Features';
import Projects from './Projects/Projects';
import Services from './Services/Services';
import Skills from './Skills/Skills';
import Works from './Works/Works';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatsApp from '../WhatsApp/WhatsApp';

const Home = () => {

    // Used for Animation
    useEffect(() => {
        AOS.init({
            easing: 'ease',
            once: false,
        });
    }, [])

    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Skills></Skills>
            <Features></Features>
            <Services></Services>
            <Works></Works>
            <WhatsApp></WhatsApp>
        </div>
    );
};

export default Home;