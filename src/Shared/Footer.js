import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='py-14 bg-neutral'>
            <div className='w-full sm:w-11/12 mx-auto px-4 sm:px-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-8'>
                    <div className='text-center sm:text-left'>
                        <h2 style={{ fontFamily: 'Merienda' }} className='text-primary text-3xl font-bold pb-4'>About Me</h2>
                        <p className='text-gray-400'>I strongly believe that if you satisfied me by you behavior then I will satisfied you by my work.</p>
                        <div className='flex items-center justify-center sm:justify-start pt-4'>
                            <FontAwesomeIcon className='font-awesome text-primary' icon={faLocationDot}></FontAwesomeIcon>
                            <p className='text-gray-400 pl-3'>Chattogram, Bangladesh</p>
                        </div>
                        <div className='flex items-center justify-center sm:justify-start pt-3'>
                            <FontAwesomeIcon className='font-awesome text-primary' icon={faPhone}></FontAwesomeIcon>
                            <p className='text-gray-400 pl-3'>+ 8801872238027</p>
                        </div>
                        <div className='flex items-center justify-center sm:justify-start pt-3'>
                            <FontAwesomeIcon className='font-awesome text-primary' icon={faEnvelope}></FontAwesomeIcon>
                            <p className='text-gray-400 pl-3'>rajebul.alam17@gmail.com</p>
                        </div>
                    </div>
                    <div className='text-center sm:text-left'>
                        <h2 style={{ fontFamily: 'Merienda' }} className='text-primary text-3xl font-bold pb-4'>Latest Work</h2>
                        <p className='text-gray-400 pb-1 hover:text-primary'><Link to='/'>Recent Blog</Link></p>
                        <p className='text-gray-400 py-1 hover:text-primary'><Link to='/'>Recent Update</Link></p>
                        <p className='text-gray-400 py-1 hover:text-primary'><Link to='/'>Recent News</Link></p>
                    </div>
                    <div className='text-center sm:text-left'>
                        <h2 style={{ fontFamily: 'Merienda' }} className='text-primary text-3xl font-bold pb-4'>Pages</h2>
                        <div>
                            <p className='pb-1 text-gray-400 hover:text-primary'><Link to='/'>Home</Link></p>
                            <p className='py-1 text-gray-400 hover:text-primary'><Link to='/'>Services</Link></p>
                            <p className='py-1 text-gray-400 hover:text-primary'><Link to='/'>Project</Link></p>
                            <p className='py-1 text-gray-400 hover:text-primary'><Link to='/'>Features</Link></p>
                            <p className='py-1 text-gray-400 hover:text-primary'><Link to='/'>Blog</Link></p>
                            <p className='py-1 text-gray-400 hover:text-primary'><Link to='/'>About</Link></p>
                            <p className='pt-1 text-gray-400 hover:text-primary'><Link to='/'>Contact</Link></p>
                        </div>
                    </div>
                    <div className='text-center sm:text-left'>
                        <h2 style={{ fontFamily: 'Merienda' }} className='text-primary text-3xl font-bold pb-4'>Newsletter</h2>
                        <p className='text-gray-400 pb-3'>Get our latest update stay connect with us by submit</p>
                        <div>
                            <input type="email" name="email" id="email" placeholder='Your Email' className='w-full p-3' />
                            <input type="submit" value="Submit" className='w-full p-3 bg-white mt-3 uppercase font-bold' />
                        </div>
                        <div className='pt-4 text-center'>
                            <Link to='/'>
                                <FontAwesomeIcon className='font-awesome px-4 py-3 hover:bg-primary hover:text-white mr-3 rounded-full bg-white text-primary' icon={faFacebookF}></FontAwesomeIcon>
                            </Link>
                            <Link to='/'>
                                <FontAwesomeIcon className='font-awesome p-3 mr-3 hover:bg-primary hover:text-white rounded-full bg-white text-primary' icon={faTwitter}></FontAwesomeIcon>
                            </Link>
                            <Link to='/'>
                                <FontAwesomeIcon className='font-awesome p-3 mr-3 hover:bg-primary hover:text-white rounded-full bg-white text-primary' icon={faGithub}></FontAwesomeIcon>
                            </Link>
                            <Link to='/'>
                                <FontAwesomeIcon className='font-awesome p-3 hover:bg-primary hover:text-white rounded-full bg-white text-primary' icon={faLinkedinIn}></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;