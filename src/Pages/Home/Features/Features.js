import { faCode, faComment, faFlag, faLaptop, faLifeRing, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section id='features' className='py-10'>
            <div className='w-full sm:w-11/12 px-4 sm:px-6 mx-auto features'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-center font-bold text-primary text-3xl py-4'>My Features</h2>
                <h4 style={{ fontFamily: 'Merienda' }} className='text-center font-semibold text-accent text-xl py-4 pb-8'>Why You Should Work With Me?</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10'>
                    <div className='flex justify-between'>
                        <div className='pr-3'>
                            <FontAwesomeIcon className='font-awesome text-4xl text-primary border p-6 hover:bg-primary hover:text-white rounded-sm' icon={faLaptop}></FontAwesomeIcon>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-accent pb-2'>Pixel Perfect Coding</h3>
                            <p className='pt-2 text-accent'>If you want that, your website will look perfect so that it can be eye-catching for the website visitor? Then you should need a pixel-perfect design. That increases your website's beauty.</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='pr-3'>
                            <FontAwesomeIcon className='font-awesome text-4xl text-primary border p-6 hover:bg-primary hover:text-white rounded-sm' icon={faCode}></FontAwesomeIcon>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-accent pb-2'>Fresh & Modern Code</h3>
                            <p className='pt-2 text-accent'>If you want that, your website will work perfectly so that every update on the internet will work properly? Then you should need a fresh & modern code design. That increases your website's beauty. </p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='pr-3'>
                            <FontAwesomeIcon className='font-awesome text-4xl text-primary border p-6 hover:bg-primary hover:text-white rounded-sm' icon={faListCheck}></FontAwesomeIcon>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-accent pb-2'>W3C Validation & Performance</h3>
                            <p className='pt-2 text-accent'>If you want that, your website will load fast so that it can be interesting for people to visit? Then you should w3c validation on your website. That will increase your website's visitors.</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='pr-3'>
                            <FontAwesomeIcon className='font-awesome text-4xl text-primary border p-6 hover:bg-primary hover:text-white rounded-sm' icon={faLifeRing}></FontAwesomeIcon>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-accent pb-2'>24/7 Customer Support</h3>
                            <p className='pt-2 text-accent'>
                                24/7 Client Support
                                If you work with me, then I will provide you 24/7 support after completing your project.
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='pr-3'>
                            <FontAwesomeIcon className='font-awesome text-4xl text-primary border p-6 hover:bg-primary hover:text-white rounded-sm' icon={faFlag}></FontAwesomeIcon>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-accent pb-2'>Unlimited Revision</h3>
                            <p className='pt-2 text-accent'>If you work with me, then I will provide you unlimited revisions for my work to complete your project.</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='pr-3'>
                            <FontAwesomeIcon className='font-awesome text-4xl text-primary border p-6 hover:bg-primary hover:text-white rounded-sm' icon={faComment}></FontAwesomeIcon>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-accent pb-2'>Use Proper Comment</h3>
                            <p className='pt-2 text-accent'>My coding is pixel perfect, and I use proper comments in my code so that when you need to modify this code you can fix this very easily.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;