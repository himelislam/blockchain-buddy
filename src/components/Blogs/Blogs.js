import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-[70vh]'>
            <div className='mx-16'>
                <div className='border my-8 rounded p-4'>
                    <h2 className='text-center text-2xl font-thin'>1. What is Context API?</h2>
                    <p className='font-thin '>Answer: Context is primarily used for make data accessible by many components at different nesting levels. Apply it when needed because it makes component reuse more difficult. If anyone only want to avoid passing data by props through many levels, component composition is often a simpler solution than context.</p>
                </div>
                <div className='border my-8 rounded p-4'>
                    <h2 className='text-center text-2xl font-thin'>2. What is Sementic Tag?</h2>
                    <p className='font-thin '>Answer: A semantic tag element clearly describes its meaning to both the browser and the developer. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. Semantic elements also help search engines to crawl the page and find the required information. It helps website to appear top in the search result.</p>
                </div>
                <div className='border my-8 rounded p-4'>
                    <h2 className='text-center text-2xl font-thin'>3. What is the difference between Inline, Block and Inline-Block elements?</h2>
                    <p className='font-thin '>Answer:</p>
                    <div className='grid grid-cols-3 gap-4 font-thin'>
                        <div>
                            <h2>Inline:</h2>
                            <li>Inline element doesn’t start on a new line and only occupy just the width it requires.</li>
                            <li>Can’t set the width or height values.</li>
                            <li>Inline elements don’t have top and bottom margin.</li>
                        </div>
                        <div>
                            <h2>Inline-Block:</h2>
                            <li>Inline-block element also formatted just like the inline element, where it doesn’t start on a new line.</li>
                            <li>Can set width and height values.</li>
                            <li>Inline-Block elements don’t have top and bottom margin.</li>
                        </div>
                        <div>
                            <h2>Block:</h2>
                            <li>Block element will start on a new line and occupy the full width available.</li>
                            <li>Can set width and height values.</li>
                            <li>Block elements have top and bottom margin.</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;