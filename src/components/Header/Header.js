import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import blockchainbuddy from '../../images/blockchainbuddy.jpg'

const Header = () => {
    return (
        <div className='flex justify-between items-center h-[70px] bg-slate-500 pl-16 pr-16'>
            <div className='w-[70px] h-[70px]'>
                <Link to='/'>
                    <img src={blockchainbuddy} alt="" />
                </Link>
            </div>
            <div>
                <Link to='/'>
                    <h2 className='text-4xl text-white font-mono'>Blockchain Buddy</h2>
                </Link>
            </div>
            <div className='text-white font-medium'>
                <NavLink
                    className={({isActive}) => (isActive ? 'mr-8 text-black' : 'mr-8 text-white')}
                    to='/'>
                    Home
                </NavLink>
                <NavLink
                    className={({isActive}) => (isActive ? 'mr-8 text-black' : 'mr-8 text-white')}
                    to='/review'>
                    Review
                </NavLink>
                <NavLink
                    className={({isActive}) => (isActive ? 'mr-8 text-black' : 'mr-8 text-white')}
                    to='/dashboard'>
                    Dashboard
                </NavLink>
                <NavLink
                    className={({isActive}) => (isActive ? 'mr-8 text-black' : 'mr-8 text-white')}
                    to='/blogs'>
                    Blogs
                </NavLink>
                <NavLink
                    className={({isActive}) => (isActive ? 'mr-8 text-black' : 'mr-8 text-white')}
                    to='/about'>
                    About
                </NavLink>
            </div>
        </div>
    );
};

export default Header;