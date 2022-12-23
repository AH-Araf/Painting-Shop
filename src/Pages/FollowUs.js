import React from 'react';
import { Link } from 'react-router-dom';
import t from '././../assets/images/t.png';
import u from '././../assets/images/u.png';
import v from '././../assets/images/v.png';
import w from '././../assets/images/w.png';

const FollowUs = () => {
    return (
        <div className='customer-color'>
            <div className='title mb-5'>
                <h1>Follow us on</h1>
                <p>Social media for latest offers & monthly contests</p>
            </div>
            <div className='d-flex justify-content-center break'>
                
                <a target="_blank" href='https://www.facebook.com/buttistore'>
                    <div className='image-size'>
                        <img src={t} alt="" />
                    </div>
                </a>

                <a target="_blank" href='https://www.instagram.com/buttistore/'>
                    <div className='image-size'>
                        <img src={u} alt="" />
                    </div>
                </a>
            </div>
            <div className='title mb-5'>
                <h1>Download the app now</h1>
                <img src={v} alt="" className='image-only'/>
                <a href="https://play.google.com/store/apps/details?id=com.app.buttistore&hl=en_IN&gl=US"><button type="button" class="btn btn-outline-primary">Download Now</button></a>
            </div>

            <div>
                <div className='center pt-5'><img src={w} alt="" /></div>
                <div className='title'>
                    <h1>Super-express</h1>
                    <p>Get your dream picture home delivered within 3 days. This service is available in select cities only.</p>
                </div>
            </div>
        </div>
    );
};

export default FollowUs;