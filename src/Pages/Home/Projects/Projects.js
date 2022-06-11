import React, { useEffect, useState } from 'react';
import './Projects.css';
import work4 from '../../../images/work4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVectorSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { ExternalLink } from 'react-external-link';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    console.log(projects);

    return (
        <section id='projects' className='py-10'>
            <div className='w-full sm:w-11/12 mx-auto px-4 sm:px-6 projects'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl text-primary text-center font-bold py-4'>My Projects</h2>
                <h4 style={{ fontFamily: 'Merienda' }} className='text-xl text-accent text-center font-semibold pt-4 pb-8'>Some of my projects</h4>
                <div className=''>
                    <div>
                        {
                            projects.map(project =>
                                <div key={project.id} className='grid grid-cols-1 sm:grid-cols-2 gap-8 pb-5'>
                                    <div className='flex items-center justify-center bg-blue-100 py-10 rounded-sm'>
                                        <img src={project.main} alt="projectImage" />
                                    </div>
                                    <div className='flex items-center justify-center bg-blue-100 py-10 rounded-sm'>
                                        <div>
                                            <div className='px-3'>
                                                <h3 style={{ fontFamily: 'Merienda' }} className='text-2xl text-primary font-bold pt-4 pb-2'>{project.name}</h3>
                                                <p className='text-gray-500'>{project.project}</p>
                                                <p className='text-gray-500'>{project.description}</p>
                                                <p className='pt-5'>
                                                    {
                                                        project.technologies.map((technology, index) => <span key={index}>
                                                            <span className='btn px-6 mr-2 py-0 mb-2'>{technology}</span>
                                                        </span>)
                                                    }
                                                </p>
                                                <div className='pt-4'>
                                                    <ExternalLink style={{ fontFamily: 'Merienda' }} className='text-xl font-semibold pr-4' target='_blank' href={`${project.live}`}><FontAwesomeIcon className='font-awesome text-primary text-xl' icon={faVectorSquare}></FontAwesomeIcon> Live Site </ExternalLink>
                                                    <ExternalLink style={{ fontFamily: 'Merienda' }} className='text-xl font-semibold px-4' target='_blank' href={`${project.git}`}><FontAwesomeIcon className='font-awesome text-primary text-xl' icon={faGithub}></FontAwesomeIcon> Git Link </ExternalLink>
                                                </div>
                                            </div>
                                            <div className='text-center pt-6'>
                                                <button type="submit" className='btn btn-primary bg-white hover:text-white font-bold text-primary border px-7'>DETAILS</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    {/* <div className='border pb-5'>
                        <img src={work4} alt="projectImage" />
                        <div className='px-3'>
                            <h3 style={{ fontFamily: 'Merienda' }} className='text-2xl text-primary font-bold pt-4 pb-2'>Electric Tools</h3>
                            <p className='text-gray-500'>Full Stack Project</p>
                            <p className='text-gray-500'>A manufacturing full-stack project. This project Developed on react and firebase authentication based. The project has different features for admin and normal users in DASHBOARD</p>
                        </div>
                        <div className='text-center pt-6'>
                            <button type="submit" className='btn btn-primary bg-white hover:text-white font-bold text-primary border px-7'>DETAILS</button>
                        </div>
                    </div>
                    <div className='border pb-5'>
                        <img src={dress} alt="projectImage" />
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-2xl text-primary text-center font-bold py-4'>Dress Warehouse</h3>
                        <div className='text-center'>
                            <button type="submit" className='btn btn-primary bg-white hover:text-white font-bold text-primary border px-7'>DETAILS</button>
                        </div>
                    </div>
                    <div className='border pb-5'>
                        <img className='bg-accent w-[500px]' src={architect} alt="projectImage" />
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-2xl text-primary text-center font-bold py-4'>Architect Service</h3>
                        <div className='text-center'>
                            <button type="submit" className='btn btn-primary bg-white hover:text-white font-bold text-primary border px-7'>DETAILS</button>
                        </div>
                    </div>
                    <div className='border pb-5'>
                        <img className='bg-accent w-[500px]' src={password} alt="projectImage" />
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-2xl text-primary text-center font-bold py-4'>Password Generator</h3>
                        <div className='text-center'>
                            <button type="submit" className='btn btn-primary bg-white hover:text-white font-bold text-primary border px-7'>DETAILS</button>
                        </div>
                    </div>
                    <div className='border pb-5'>
                        <img className='bg-accent w-[500px]' src={influencer} alt="projectImage" />
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-2xl text-primary text-center font-bold py-4'>Influencer</h3>
                        <div className='text-center'>
                            <button type="submit" className='btn btn-primary bg-white hover:text-white font-bold text-primary border px-7'>DETAILS</button>
                        </div>
                    </div>
                    <div className='border pb-5'>
                        <img className='bg-accent w-[500px]' src={shopping} alt="projectImage" />
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-2xl text-primary text-center font-bold py-4'>Shopping Cart</h3>
                        <div className='text-center'>
                            <button type="submit" className='btn btn-primary bg-white hover:text-white font-bold text-primary border px-7'>DETAILS</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Projects;