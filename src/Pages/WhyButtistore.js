import React from 'react';
import q from '././../assets/images/q.png';
import r from '././../assets/images/r.png';
import s from '././../assets/images/s.png';

const WhyButtistore = () => {
    return (
        <div className='customer-color'>
            <div className='title mb-5'>
                <h1>WHY BUTTISTORE?</h1>
                <p>The pictures that decorate your wall are not just simple photos, they are your masterpieces. We help you create such a masterpiece from your favourite photos.</p>
            </div>
            <div>
            <div className='details'>
                <img
                    className="d-block"
                    src={q}
                    alt="First slide"
                />
            </div>
            </div>
            <div className='image-edit text-center carousel-con'>
                <img
                    className="d-block"
                    src={r}
                    alt="First slide"
                    
                />
            </div>
            {/* <img
                    className="d-block"
                    src={s}
                    alt="First slide"
                /> */}
                <div className='image-center'><img src={s} alt=""/></div>
        </div>
    );
};

export default WhyButtistore;