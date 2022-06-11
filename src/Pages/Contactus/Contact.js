import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import banner from '../../images/banner.jpg';

const Contact = () => {
    return (
        <section style={{ background: `url(${banner})`, backgroundSize: 'cover' }} className='py-12'>
            <div className='w-full sm:w-10/12 mx-auto px-4 sm:px-6'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl text-white text-center font-bold py-4 line'>Contact Us</h2>
                <h4 style={{ fontFamily: 'Merienda' }} className='text-secondary text-center text-xl'>If you have any question about me? Then you should contact with this.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 py-10 items-center'>
                    <div>
                        <div className='flex'>
                            <div className='pr-4'>
                                <FontAwesomeIcon className='font-awesome text-primary px-3 py-[10px] rounded-full bg-white' icon={faLocationDot}></FontAwesomeIcon>
                            </div>
                            <div>
                                <h3 className='text-primary text-xl font-semibold'>Address</h3>
                                <p className='text-white pt-2'>Chattogram, Bangladesh</p>
                                <p className='text-white'>Hathazari, 4333</p>
                            </div>
                        </div>
                        <div className='flex pt-4'>
                            <div className='pr-4'>
                                <FontAwesomeIcon className='font-awesome text-primary p-3 rounded-full bg-white' icon={faPhone}></FontAwesomeIcon>
                            </div>
                            <div>
                                <h3 className='text-primary text-xl font-semibold'>Phone</h3>
                                <p className='text-white pt-2'>+ 8801872238027</p>
                            </div>
                        </div>
                        <div className='flex pt-4'>
                            <div className='pr-4'>
                                <FontAwesomeIcon className='font-awesome text-primary p-3 rounded-full bg-white' icon={faEnvelope}></FontAwesomeIcon>
                            </div>
                            <div>
                                <h3 className='text-primary text-xl font-semibold'>Email</h3>
                                <p className='text-white pt-2'>rajebulalam@gmial.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-sm p-5'>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-primary text-2xl font-bold pb-4'>Send Message</h3>
                        <form>
                            <input type="text" name="name" id="name" placeholder='Your Name' className='py-3 border-b border-3 outline-0 w-full mb-3' />
                            <input type="email" name="email" id="email" placeholder='Email' className='py-3 border-b border-3 outline-0 w-full' />
                            <textarea name="message" id="message" rows="5" className='py-3 border-b border-3 outline-0 w-full' placeholder='Write your message...'></textarea>
                            <button type="submit" className='btn mt-5'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;