import React from 'react';
import banner from '../../images/banner.jpg';
import Person from '../../images/person.png';
import './Banner.css';

const Banner = () => {
    return (
        <section className='py-14' style={{ background: `url(${banner})`, backgroundSize: 'cover' }}>
            <div className='w-full sm:w-11/12 mx-auto px-4 sm:px-6'>
                <div className='flex items-center justify-center'>
                    <img className='w-[130px] border-4 rounded-full' src={Person} alt="personIamge" />
                </div>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-white flex items-center justify-center py-3 pt-8 text-4xl font-extrabold'>I'm <span className='animation text-green-500 pl-3 uppercase'> Md. Rajebul Alam Khokan</span> </h2>
                <p style={{ fontSize: '19px' }} className='w-full sm:w-9/12 py-3 text-white mx-auto text-center text-md'>
                    I am a professional front-end web developer. I have been doing web design & development for the last many years. I have worked with various technologies including  HTML5, CSS3, CSS3 Animation, Bootstrap, tailwind, JavaScript, React, Node, Express, MongoDB and an exquisite blend of experience on Full-stack Development.
                </p>
                <p style={{ fontSize: '19px' }} className='w-full sm:w-9/12 py-3 text-white mx-auto text-center text-md'>
                    Likewise, I'm dependable, trustworthy, and put everything into my work, and appreciate the importance of responsibility. If u want quality-oriented work, then be confident, and let's communicate!
                </p>
            </div>
        </section>
    );
};

export default Banner;