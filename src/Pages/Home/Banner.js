import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import banner from '../../images/banner.jpg';
import Person from '../../images/person.png';
import './Banner.css';

const Banner = () => {
    return (
        <section className='py-14' style={{ background: `url(${banner})`, backgroundSize: 'cover' }}>
            <div className='w-full sm:w-11/12 mx-auto px-4 sm:px-6'>
                <div className='flex items-center justify-center'>
                    <img className='w-[110px] border-4 rounded-full' src={Person} alt="personIamge" />
                </div>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-white text-center text-4xl font-bold pt-8'>I'm</h2>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-white  pt-0 mt-[-10px] text-xl sm:text-4xl font-extrabold text-center'><span className='text-primary pl-3 uppercase'>
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                            'Md. Rajebul Alam Khokan',
                            3000,
                            'A Front End Developer',
                            3000,
                            'A Coder',
                            3000,
                        ]}
                        speed={300}
                        wrapper="h2"
                        repeat={Infinity}
                    />
                </span> </h2>
                <p style={{ fontSize: '19px' }} className='w-full sm:w-10/12 pt-5 pb-3 text-white mx-auto text-center text-md'>
                    I am a professional front-end web developer. I have been doing web design & development for the last many years. I have worked with various technologies including  HTML5, CSS3, CSS3 Animation, Bootstrap, tailwind, Material UI, Material Table, JavaScript, React, Node, Express, MongoDB and an exquisite blend of experience on Full-stack Development.
                </p>
            </div>
        </section>
    );
};

export default Banner;