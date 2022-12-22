import React from 'react';
import t from '././../assets/images/t.png';
import u from '././../assets/images/u.png';

const FollowUs = () => {
    return (
        <div className='customer-color'>
            <div className='title mb-5'>
                <h1>Follow us on</h1>
                <p>Social media for latest offers & monthly contests</p>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='image-size'>
                    <img src={t} alt="" />
                </div>
                <div className='image-size'>
                    <img src={u} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FollowUs;