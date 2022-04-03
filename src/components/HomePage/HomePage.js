import React from 'react';
import ethereum from '../images/Ethereum-Logo.wine.svg';

const HomePage = () => {
    return (
        <div className='grid grid-cols-2 pl-16 pr-16 items-center'>
            <div className='text-left'>
                <h1 className='text-6xl font-mono my-3'>Ethereum</h1>
                <p className='text-xl my-3 font-thin'>Ethereum is a network that revolutionised the financial industry through the popularisation of Decentralised Finance (DeFi). And a programming language that makes it possible for any developer to build and publish next-generation decentralized applications.</p>
                <button className='btn rounded bg-indigo-400 p-3 font-thin text-white mt-6' href='https://www.g2.com/products/ethereum/reviews#details'>Read More</button>
            </div>
            <div>
                <img src={ethereum} alt="" />
            </div>
        </div>
    );
};

export default HomePage;