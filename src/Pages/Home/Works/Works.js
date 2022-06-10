import React from 'react';
import './Work.css';
import work4 from '../../../images/work4.png'
import work5 from '../../../images/work5.png'
import architect from '../../../images/architect.png'

const Works = () => {
    return (
        <section className='py-10'>
            <div className='w-full sm:w-11/12 mx-auto px-4 sm:px-6 work'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl text-primary text-center font-bold py-4'>Latest Work</h2>
                <h4 style={{ fontFamily: 'Merienda' }} className='text-xl text-accent text-center font-semibold pt-4 pb-8'>Check Out my Latest Work</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10'>
                    <div className='border'>
                        <img className='w-[500px]' src={work4} alt="work" />
                        <div className='px-3'>
                            <h3 style={{ fontFamily: 'Merienda' }} className='text-2xl text-primary font-bold pt-4 pb-2'>Electric Tools</h3>
                            <h6 className='text-gray-500 pb-4'>Full-Stack Project</h6>
                            <p className='text-gray-500'>A manufacturing full-stack project. This project Developed on react and firebase authentication based.</p>
                            <div className='pt-6 py-3'>
                                <button className='btn bg-white border border-primary px-6 text-primary hover:bg-primary hover:text-white hover:border-primary' type="submit">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='border'>
                        <img className='w-[500px]' src={work5} alt="work" />
                        <div className='px-3'>
                            <h3 style={{ fontFamily: 'Merienda' }} className='text-2xl text-primary font-bold pt-4 pb-2'>Electric Tools</h3>
                            <h6 className='text-gray-500 pb-4'>Full-Stack Project</h6>
                            <p className='text-gray-500'>A manufacturing full-stack project. This project Developed on react and firebase authentication based.</p>
                            <div className='pt-6 py-3'>
                                <button className='btn bg-white border border-primary px-6 text-primary hover:bg-primary hover:text-white hover:border-primary' type="submit">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='border'>
                        <img className='w-[500px] border-b' src={architect} alt="work" />
                        <div className='px-3'>
                            <h3 style={{ fontFamily: 'Merienda' }} className='text-2xl text-primary font-bold pt-4 pb-2'>Electric Tools</h3>
                            <h6 className='text-gray-500 pb-4'>Full-Stack Project</h6>
                            <p className='text-gray-500'>A manufacturing full-stack project. This project Developed on react and firebase authentication based.</p>
                            <div className='pt-6 py-3'>
                                <button className='btn bg-white border border-primary px-6 text-primary hover:bg-primary hover:text-white hover:border-primary' type="submit">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;