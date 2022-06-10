import React from 'react';
import './Projects.css';
import work4 from '../../../images/work4.png';
import dress from '../../../images/dressware.png';
import architect from '../../../images/architect.png';
import password from '../../../images/passwrdgenerator.png';
import influencer from '../../../images/business1.png';
import shopping from '../../../images/shopping.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVectorSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { ExternalLink } from 'react-external-link';

const Projects = () => {
    return (
        <section className='py-10'>
            <div className='w-full sm:w-11/12 mx-auto px-4 sm:px-6 projects'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl text-primary text-center font-bold py-4'>My Projects</h2>
                <h4 style={{ fontFamily: 'Merienda' }} className='text-xl text-accent text-center font-semibold pt-4 pb-8'>Some of my projects</h4>
                <div className=''>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 pb-5'>
                        <div className='flex items-center justify-center bg-blue-100 py-10 rounded-sm'>
                            <img src={work4} alt="projectImage" />
                        </div>
                        <div className='flex items-center justify-center bg-blue-100 py-10 rounded-sm'>
                            <div>
                                <div className='px-3'>
                                    <h3 style={{ fontFamily: 'Merienda' }} className='text-2xl text-primary font-bold pt-4 pb-2'>Electric Tools</h3>
                                    <p className='text-gray-500'>Full Stack Project</p>
                                    <p className='text-gray-500'>A manufacturing full-stack project. This project Developed on react and firebase authentication based. The project has different features for admin and normal users in DASHBOARD.</p>
                                    <p className='pt-5'>
                                        <span className='btn px-6 mr-2 py-0 mb-2'>Tailwind</span>
                                        <span className='btn px-6 mr-2 py-0 mb-2'>React</span>
                                        <span className='btn px-6 mr-2 py-0 mb-2'>Firebase</span>
                                        <span className='btn px-6 mr-2 py-0 mb-2'>Node</span>
                                        <span className='btn px-6 mr-2 py-0 mb-2'>Express</span>
                                        <span className='btn px-6 mr-2 py-0 mb-2'>MongoDB</span>
                                        <span className='btn px-6 mr-2 py-0 mb-2'>Stripe</span>
                                        <span className='btn px-6 mr-2 py-0 mb-2'>JWT</span>
                                    </p>
                                    <div className='pt-4'>
                                        <ExternalLink style={{ fontFamily: 'Merienda' }} className='text-xl font-semibold pr-4' target='_blank' href='https://electric-tools-4d28a.web.app/'><FontAwesomeIcon className='font-awesome text-primary text-xl' icon={faVectorSquare}></FontAwesomeIcon> Live Site </ExternalLink>
                                        <ExternalLink style={{ fontFamily: 'Merienda' }} className='text-xl font-semibold px-4' target='_blank' href='https://github.com/Rajebulalam/electric-tools'><FontAwesomeIcon className='font-awesome text-primary text-xl' icon={faGithub}></FontAwesomeIcon> Git Link </ExternalLink>
                                    </div>
                                </div>
                                <div className='text-center pt-6'>
                                    <button type="submit" className='btn btn-primary bg-white hover:text-white font-bold text-primary border px-7'>DETAILS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;