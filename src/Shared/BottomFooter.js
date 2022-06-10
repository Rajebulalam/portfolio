import React from 'react';
import { Link } from 'react-router-dom';

const BottomFooter = () => {
    return (
        <section className='py-6'>
            <div className='w-full sm:w-11/12 mx-auto px-4 sm:px-6'>
                <div className='flex-none sm:flex items-center justify-between'>
                    <p className='text-md font-medium pb-3 sm:pb-0'>All Rights Reserved &copy; Template By Rajebul Alam Khokan</p>
                    <div className='flex items-center justify-center sm:justify-end'>
                        <p className='pl-3 text-xl font-semibold hover:text-primary'><Link to='/'>Home</Link></p>
                        <p className='pl-3 text-xl font-semibold hover:text-primary'><Link to='/'>Services</Link></p>
                        <p className='pl-3 text-xl font-semibold hover:text-primary'><Link to='/'>Blogs</Link></p>
                        <p className='pl-3 text-xl font-semibold hover:text-primary'><Link to='/'>About</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BottomFooter;