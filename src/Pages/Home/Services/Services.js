import { faReact } from '@fortawesome/fontawesome-free-brands';
import { faLayerGroup, faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section id='services' className='py-10 bg-neutral'>
            <div className='w-full sm:w-11/12 mx-auto px-4 sm:px-6 services'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl text-primary text-center font-bold py-4'>My Services</h2>
                <h4 style={{ fontFamily: 'Merienda' }} className='text-xl text-accent text-center font-semibold pt-4 pb-8'>Awesome & Creative Services For You</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <div className='service-hover'>
                        <div className='text-center'>
                            <FontAwesomeIcon className='font-awesome text-primary service-font border-4 rounded-full text-2xl p-6' icon={faObjectGroup}></FontAwesomeIcon>
                        </div>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-xl text-primary text-center font-semibold pt-4 pb-7'>Responsive Web Design</h3>
                        <p className='text-gray-400 indent-2'>When you want to create a website  for all devices that shows in  perfectly and smoothly. Then I will provide you the best services to creating a responsive website that will show in all devices perfectly.</p>
                    </div>
                    <div className='service-hover'>
                        <div className='text-center'>
                            <FontAwesomeIcon className='font-awesome text-primary service-font border-4 rounded-full text-2xl p-6' icon={faReact}></FontAwesomeIcon>
                        </div>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-xl text-primary text-center font-semibold pt-4 pb-7'>React Development</h3>
                        <p className='text-gray-400 indent-2'>When you want to design a website using React single page application. Then I will provide you the best services to creating a react based web page that will show in all devices smoothly.</p>
                    </div>
                    <div className='service-hover'>
                        <div className='text-center'>
                            <FontAwesomeIcon className='font-awesome text-primary service-font border-4 rounded-full text-2xl p-6' icon={faObjectGroup}></FontAwesomeIcon>
                        </div>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-xl text-primary text-center font-semibold pt-4 pb-8'>Front End Development</h3>
                        <p className='text-gray-400 indent-2'>When you want to design a website front page for all devices that shows in  perfectly and smoothly. Then I will provide you the best services to creating a responsive web page that will show in all devices perfectly.</p>
                    </div>
                    <div className='service-hover'>
                        <div className='text-center'>
                            <FontAwesomeIcon className='font-awesome text-primary service-font border-4 rounded-full text-2xl p-6' icon={faLayerGroup}></FontAwesomeIcon>
                        </div>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-xl text-primary text-center font-semibold pt-4 pb-8'>Full-Stack Development</h3>
                        <p className='text-gray-400 indent-2'>When you want to develope a full stack website with front end and backend . Then I will provide you the best services to creating a full-stack website that will show in all devices properly.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;