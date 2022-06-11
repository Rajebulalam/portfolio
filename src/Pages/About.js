import React from 'react';
import Person from '../images/person.png';
import './About.css';

const About = () => {
    return (
        <section className='py-10'>
            <div className='w-full sm:w-11/12 mx-auto px-4 sm:px-6 about'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl text-primary text-center font-bold py-4 line'>About Me</h2>
                <div>
                    <div className='flex items-center justify-center pt-8'>
                        <img className='w-[110px] border-4 rounded-full' src={Person} alt="personIamge" />
                    </div>
                    <h2 style={{ fontFamily: 'Merienda' }} className='text-black text-center text-4xl pt-6 font-bold'>I'm</h2>
                    <h2 style={{ fontFamily: 'Merienda' }} className='text-white  pt-5 text-xl sm:text-4xl font-extrabold text-center'><span className='animation text-primary pl-3 uppercase'> Md. Rajebul Alam Khokan</span> </h2>
                    <p style={{ fontSize: '19px' }} className='w-full sm:w-10/12 pt-5 pb-3 text-black mx-auto text-center text-md'>
                        I am a professional front-end web developer. I have been doing web design & development for the last many years. I have worked with various technologies including  HTML5, CSS3, CSS3 Animation, Bootstrap, tailwind, JavaScript, React, Node, Express, MongoDB and an exquisite blend of experience on Full-stack Development.
                    </p>
                    <p style={{ fontSize: '19px' }} className='w-full sm:w-10/12 pt-5 pb-3 text-black mx-auto text-center text-md'>Likewise, I'm dependable, trustworthy, and put everything into my work, and appreciate the importance of responsibility. If u want quality-oriented work, then be confident, and let's communicate!</p>
                </div>
            </div>
        </section>
    );
};

export default About;