import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import blockchainbuddy from '../images/blockchainbuddy.jpg'

const Header = () => {
    return (
        <div className='flex justify-between items-center h-[70px] bg-slate-500 pl-16 pr-16'>
            <div className='w-[70px] h-[70px]'>
                <img src={blockchainbuddy} alt="" />
            </div>
            <div className='text-white font-medium'>
               <NavLink className='mr-8' to='/'>Home</NavLink>
               <NavLink className='mr-8' to='/'>Review</NavLink>
               <NavLink className='mr-8' to='/'>Dashboard</NavLink>
               <NavLink className='mr-8' to='/'>Blogs</NavLink>
               <NavLink className='mr-8' to='/'>About</NavLink>
            </div>
        </div>
    );
};

export default Header;