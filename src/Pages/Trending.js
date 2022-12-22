import React from 'react';
import { Link } from 'react-router-dom';
import h from '././../assets/images/h.png';
import i from '././../assets/images/i.png';
import j from '././../assets/images/j.png';

const Trending = () => {
    return (
        <div className='trend m-3'>
            <h5 className='trend-header'>Trending</h5>
        <div className='display-grid'>
            <Link to='/paint4'>
            <div>
                <img
                className="d-block"
                src={h}
                alt="First slide"
                />
                <h1 className='arrow'>→</h1>
            </div>
            </Link>
            <Link to='/paint2'>
            <div>
                <img
                className="d-block"
                src={i}
                alt="First slide"
                />
                <h1 className='arrow'>→</h1>
            </div>
            </Link>
            <Link to='/paint1'>
            <div>
                <img
                className="d-block"
                src={j}
                alt="First slide"
                />
                <h1 className='arrow'>→</h1>
            </div>
            </Link>
        </div>
            
        </div>
    );
};

export default Trending;