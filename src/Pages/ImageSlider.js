import React from 'react';
import { Carousel } from 'react-bootstrap';
import a from '././../assets/images/a.png';
import b from '././../assets/images/b.png';
import c from '././../assets/images/c.png';

const ImageSlider = () => {
    return (
        <div>
            <div className='carousel-con mb-5'>
            <Carousel>
                <Carousel.Item>
                <img
                    className="d-block"
                    src={a}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block"
                    src={b}
                    alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block"
                    src={c}
                    alt="Second slide"
                />
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
};

export default ImageSlider;