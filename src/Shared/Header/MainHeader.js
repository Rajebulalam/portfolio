import React from 'react';
import { Link } from 'react-router-dom';
import './MainHeader.css';

const MainHeader = () => {

    const menuItem = <>
        <li className=''><Link className='linkItem uppercase hover:bg-white bg-transparent' to='/'>Home</Link></li>
        <li className=''><Link className='linkItem uppercase hover:bg-white bg-transparent' to='/'>Services</Link></li>
        <li className=''><Link className='linkItem uppercase hover:bg-white bg-transparent' to='/'>Project</Link></li>
        <li className=''><Link className='linkItem uppercase hover:bg-white bg-transparent' to='/'>Features</Link></li>
        <li className=''><Link className='linkItem uppercase hover:bg-white bg-transparent' to='/'>Blog</Link></li>
        <li className=''><Link className='linkItem uppercase hover:bg-white bg-transparent' to='/'>About</Link></li>
        <li className=''><Link className='linkItem uppercase hover:bg-white bg-transparent' to='/'>Contact</Link></li>
        <li><Link className='uppercase font-semibold text-primary border border-primary hover:bg-primary hover:text-white resume' to='/'>Resume</Link></li>
    </>

    return (
        <header>
            <nav className='w-full sm:w-11/12 mx-auto px-3'>
                <div class="navbar bg-base-100 py-0">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItem}
                            </ul>
                        </div>
                        <Link to='/' class="normal-case text-5xl py-5 sm:py-7 font-extrabold">KHOKAN</Link>
                    </div>
                    <div class="navbar-end hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            {menuItem}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default MainHeader;