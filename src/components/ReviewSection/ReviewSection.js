import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReviewContext } from '../../App';
import Review from '../Review/Review';

const ReviewSection = () => {
    const [reviews, setReviews] = useContext(ReviewContext);
    return (
        <div>
            <h2 className='text-5xl text-center font-mono font-semibold text-gray-600 mt-10 mb-8'>Review Section</h2>
            <hr />
            <br />
            <div className='grid grid-cols-3 gap-6 pl-16 pr-16 mt-3'>
                {
                    reviews.slice(0,3).map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
            <div className='text-center mt-8'>
                <Link to='/review'>
                <button className='btn rounded p-4 text-xl font-mono bg-red-300 mx-auto'>See All Reviews</button>
                </Link>
            </div>
        </div>
    );
};

export default ReviewSection;