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
            <div className='d-flex'>
                <ImageSlider></ImageSlider>
                <RightImage></RightImage>
            </div>
            <Details></Details>
            <div>
                <Trending></Trending>
            </div>
            <OurProducts></OurProducts>
            <CustomersReview></CustomersReview>
            <WhyButtistore></WhyButtistore>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;