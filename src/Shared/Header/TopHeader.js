import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/fontawesome-free-brands';
import { Link } from 'react-router-dom';

const TopHeader = () => {
    return (
        <section className='border-b'>
            <div className='w-full sm:w-11/12 hidden md:block mx-auto px-4 sm:px-6'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='flex items-center px-3 border-l border-r py-2'>
                            <FontAwesomeIcon className='pr-3 text-primary' icon={faPhone}></FontAwesomeIcon>
                            <p className='text-accent' style={{ fontFamily: 'Merienda' }}>Call Me: 01872238027</p>
                        </div>
                        <div className='border-r px-3 flex items-center py-2'>
                            <FontAwesomeIcon className='pr-3 text-primary' icon={faEnvelope}></FontAwesomeIcon>
                            <p className='text-accent' style={{ fontFamily: 'Merienda' }}>Email: rajebulalam27@gamil.com</p>
                        </div>
                    </div>
                    <div className='h-[27px]'>
                        <Link to='/' className='px-3 h-[20px] py-3 border-l'><FontAwesomeIcon className='font-awesome text-primary hover:text-blue-600' icon={faFacebookF}></FontAwesomeIcon></Link>
                        <Link to='/' className='px-3 h-[25px] py-3 border-l'><FontAwesomeIcon className='font-awesome text-primary hover:text-blue-600' icon={faTwitter}></FontAwesomeIcon></Link>
                        <Link to='/' className='px-3 h-[25px] py-3 border-l'><FontAwesomeIcon className='font-awesome text-primary hover:text-blue-600' icon={faLinkedinIn}></FontAwesomeIcon></Link>
                        <Link to='/' className='px-3 h-[25px] py-3 border-l'><FontAwesomeIcon className='font-awesome text-primary hover:text-blue-600' icon={faGithub}></FontAwesomeIcon></Link>
                        <Link to='/' className='px-3 h-[24px] py-3 border-l border-r'><FontAwesomeIcon className='font-awesome text-primary hover:text-blue-600' icon={faInstagram}></FontAwesomeIcon></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopHeader;