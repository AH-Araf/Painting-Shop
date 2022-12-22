import React from 'react';
import h from '././../assets/images/h.png';
import i from '././../assets/images/i.png';
import j from '././../assets/images/j.png';

const Trending = () => {
    return (
        <div className='trend m-3'>
            <h5 className='trend-header'>Trending</h5>
        <div className='display-grid'>
            <div>
                <img
                className="d-block"
                src={h}
                alt="First slide"
                />
                <h1 className='arrow'>→</h1>
            </div>
            <div>
                <img
                className="d-block"
                src={i}
                alt="First slide"
                />
                <h1 className='arrow'>→</h1>
            </div>
            <div>
                <img
                className="d-block"
                src={j}
                alt="First slide"
                />
                <h1 className='arrow'>→</h1>
            </div>
        </div>
            
        </div>
    );
};

export default Trending;