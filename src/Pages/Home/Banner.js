import React from 'react';
import banner from '../../images/banner.jpg';

const Banner = () => {
    return (
        <section style={{ background: `url(${banner})`, backgroundSize: 'cover' }}>
            <div className='w-full sm:w-11/12 mx-auto px-4 sm:px-6'>
                <h2>Banner</h2>
            </div>
        </section>
    );
};

export default Banner;