import React from 'react';


const Review = ({ review }) => {
    return (
        <div className='border rounded p-4 transition ease-in-out delay-150 bg-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300'>
            <div className='flex mb-3 items-center'>
                <div>
                    <img className='rounded-full border border-slate-800' src={review.img} alt="" />
                </div>
                <div className='ml-3'>
                    <h2 className='text-xl font-mono'>{review.name}</h2>
                    <p className='text-red-400'>Ratings: {review.ratings} out of 5</p>
                </div>
            </div>
            <div>
                <p className='font-thin text-gray-800'>{review.review}</p>
            </div>
        </div>
    );
};

export default Review;