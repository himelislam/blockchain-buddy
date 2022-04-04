import React from 'react';


const Review = ({ review }) => {
    return (
        <div className='border rounded p-4 bg-green-100'>
            <div className='flex mb-3'>
                <div>
                    <img className='rounded' src={review.img} alt="" />
                </div>
                <div className='ml-3'>
                    <h2 className='text-xl font-mono'>{review.name}</h2>
                    <p>Ratings: {review.ratings}</p>
                </div>
            </div>
            <div>
                <p className='font-thin'>{review.review}</p>
            </div>
        </div>
    );
};

export default Review;