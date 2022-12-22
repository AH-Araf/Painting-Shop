import React from 'react';
import { Link } from 'react-router-dom';
import e from '././../assets/images/e.png';
import f from '././../assets/images/f.png';


const RightImage = () => {
    return (
        <div className='right-image'> 
            <Link to='/paint1'>
            <img
                className="d-block"
                src={e}
                alt="First slide"
            />
            </Link>
            <Link to='/paint3'>
            <img
                className="d-block"
                src={f}
                alt="First slide"
            />
            </Link>
        </div>
    );
};

export default RightImage;