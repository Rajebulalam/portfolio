import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section className='py-10 bg-neutral'>
            <div className='w-full sm:w-11/12 mx-auto px-4 sm:px-6 skills'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl text-primary text-center font-bold py-4'>My Skills</h2>
                <h4 style={{ fontFamily: 'Merienda' }} className='text-xl text-accent text-center font-semibold pt-4 pb-8'>I'm capable to hard work</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 gap-y-0'>
                    <div>
                        <div className="pb-8">
                            <div className="flex items-center justify-between pb-3">
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'>HTML5</p>
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'><i>90%</i></p>
                            </div>
                            <div className="html w-full h-1 bg-accent rounded-sm">
                                <span></span>
                            </div>
                        </div>
                        <div className="pb-8">
                            <div className="flex items-center justify-between pb-3">
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'>CSS3</p>
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'><i>90%</i></p>
                            </div>
                            <div className="css w-full h-1 bg-accent rounded-sm">
                                <span></span>
                            </div>
                        </div>
                        <div className="pb-8">
                            <div className="flex items-center justify-between pb-3">
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'>BOOTSTRAP</p>
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'><i>90%</i></p>
                            </div>
                            <div className="bootstrap w-full h-1 bg-accent rounded-sm">
                                <span></span>
                            </div>
                        </div>
                        <div className="pb-8">
                            <div className="flex items-center justify-between pb-3">
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'>TAILWIND</p>
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'><i>95%</i></p>
                            </div>
                            <div className="tailwind w-full h-1 bg-accent rounded-sm">
                                <span></span>
                            </div>
                        </div>
                        <div className="pb-8">
                            <div className="flex items-center justify-between pb-3">
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'>JAVASCRIPT</p>
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'><i>75%</i></p>
                            </div>
                            <div className="javascript w-full h-1 bg-accent rounded-sm">
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="pb-8">
                            <div className="flex items-center justify-between pb-3">
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'>REACT</p>
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'><i>85%</i></p>
                            </div>
                            <div className="react w-full h-1 bg-accent rounded-sm">
                                <span></span>
                            </div>
                        </div>
                        <div className="pb-8">
                            <div className="flex items-center justify-between pb-3">
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'>FIREBASE</p>
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'><i>87%</i></p>
                            </div>
                            <div className="firebase w-full h-1 bg-accent rounded-sm">
                                <span></span>
                            </div>
                        </div>
                        <div className="pb-8">
                            <div className="flex items-center justify-between pb-3">
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'>NODE</p>
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'><i>80%</i></p>
                            </div>
                            <div className="node w-full h-1 bg-accent rounded-sm">
                                <span></span>
                            </div>
                        </div>
                        <div className="pb-8">
                            <div className="flex items-center justify-between pb-3">
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'>EXPRESS</p>
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'><i>82%</i></p>
                            </div>
                            <div className="express w-full h-1 bg-accent rounded-sm">
                                <span></span>
                            </div>
                        </div>
                        <div className="pb-8">
                            <div className="flex items-center justify-between pb-3">
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'>MONGODB</p>
                                <p style={{ fontFamily: 'Merienda' }} className='text-gray-400 text-xl'><i>77%</i></p>
                            </div>
                            <div className="mongo w-full h-1 bg-accent rounded-sm">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;