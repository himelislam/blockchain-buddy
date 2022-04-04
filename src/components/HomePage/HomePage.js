import React from 'react';
import ethereum from '../../images/Ethereum-Logo.wine.svg';

const HomePage = () => {
    return (
        <div className='grid grid-cols-2 pl-[100px] pr-[100px] items-center my-10'>
            <div className='text-left'>
                <h1 className='text-6xl font-mono my-3'>Ethereum</h1>
                <p className='text-xl my-3 font-thin'>Ethereum is a network that revolutionised the financial industry through the popularisation of Decentralised Finance (DeFi). And a programming language that makes it possible for any developer to build and publish next-generation decentralized applications.</p>
                <button className='btn rounded bg-indigo-400 p-3 font-thin text-white mt-6  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' href='https://www.g2.com/products/ethereum/reviews#details'>Read More</button>
            </div>
            <div>
                <img className='ml-20' src={ethereum} alt="" />
            </div>
        </div>
    );
};

export default HomePage;