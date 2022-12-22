import React from 'react';
import k from '././../assets/images/k.png';
import l from '././../assets/images/l.png';
import m from '././../assets/images/m.png';
import n from '././../assets/images/n.png';
import o from '././../assets/images/o.png';


const OurProducts = () => {
    return (
        <div>
            <div className='title'>
                <h2 className='mt-5'>OUR PRODUCTS</h2>
                <h5>BUTTISTORE SKETCHES YOUR MOST <span className='title-color'>MEMORABLE PAINTINGS</span> FROM YOUR FAVOURITE PHOTOS</h5>
            </div>
            <div>
                <div className='display-grid'>
                    <div className='single-card'>
                        <img
                        className="d-block"
                        src={k}
                        alt="First slide"
                        />
                        <h1 className='arrow'>→</h1>
                    </div>
                    <div>
                        <img
                        className="d-block"
                        src={l}
                        alt="First slide"
                        />
                        <h1 className='arrow'>→</h1>
                    </div>
                    <div>
                        <img
                        className="d-block"
                        src={m}
                        alt="First slide"
                        />
                        <h1 className='arrow'>→</h1>
                    </div>
                    <div>
                        <img
                        className="d-block"
                        src={n}
                        alt="First slide"
                        />
                        <h1 className='arrow'>→</h1>
                    </div>
                    <div>
                        <img
                        className="d-block"
                        src={o}
                        alt="First slide"
                        />
                        <h1 className='arrow'>→</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;