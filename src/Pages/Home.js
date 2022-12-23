import React from 'react';
import CustomersReview from './CustomersReview';
import Details from './Details';
import FollowUs from './FollowUs';
import ImageSlider from './ImageSlider';
import OurProducts from './OurProducts';
import RightImage from './RightImage';
import Trending from './Trending';
import WhyButtistore from './WhyButtistore';

const Home = () => {
    return (
        <div>
            <div className='d-flex break'>
                <ImageSlider></ImageSlider>
                <RightImage></RightImage>
            </div>
            <Details></Details>
            <div>
                <Trending></Trending>
            </div><br />
            <div className='m-t'>
                <OurProducts></OurProducts>
            </div>
            <CustomersReview></CustomersReview>
            <WhyButtistore></WhyButtistore>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;