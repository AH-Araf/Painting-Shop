import React from 'react';
import e from '././../assets/images/e.png';
import f from '././../assets/images/f.png';


const RightImage = () => {
    return (
        <div className='right-image'> 
            <img
                className="d-block"
                src={e}
                alt="First slide"
            />
            <img
                className="d-block"
                src={f}
                alt="First slide"
            />
        </div>
    );
};

export default RightImage;