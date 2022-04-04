import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const ReviewPage = () => {
    const [reviews, setReviews] = useReviews();
    console.log(reviews)
    return (
        <div className='min-h-[70vh]'>
            <div>
                <h2 className='text-4xl text-center my-6 font-mono'>All Reviews</h2>
            </div>
            <div className='grid grid-cols-3 gap-6 pl-16 pr-16'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default ReviewPage;