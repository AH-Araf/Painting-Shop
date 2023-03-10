import React from 'react';
import { Link } from 'react-router-dom';
import k from '././../assets/images/k.png';
import l from '././../assets/images/l.png';
import m from '././../assets/images/m.png';
import n from '././../assets/images/n.png';
import o from '././../assets/images/o.png';


const Shop = () => {
    return (
        <div>
            <div className='title'>
                <h2 className=''>SHOP HERE</h2>
            </div>
            <div className='display-grid'>
                    <Link to='/paint2'>
                    <div className='single-card'>
                        <img
                        className="d-block"
                        src={k}
                        alt="First slide"
                        />
                        <h1 className='arrow'>→</h1>
                    </div>
                    </Link>
                    <Link to='/paint1'>
                    <div className='single-card'>
                        <img
                        className="d-block"
                        src={l}
                        alt="First slide"
                        />
                        <h1 className='arrow'>→</h1>
                    </div>
                    </Link>
                    <Link to='/paint4'>
                    <div className='single-card'>
                        <img
                        className="d-block"
                        src={m}
                        alt="First slide"
                        />
                        <h1 className='arrow'>→</h1>
                    </div>
                    </Link>
                    <Link to='/paint2'>
                    <div className='single-card'>
                        <img
                        className="d-block"
                        src={n}
                        alt="First slide"
                        />
                        <h1 className='arrow'>→</h1>
                    </div>
                    </Link>
                    <Link to='/paint3'>
                    <div className='single-card'>
                        <img
                        className="d-block"
                        src={o}
                        alt="First slide"
                        />
                        <h1 className='arrow'>→</h1>
                    </div>
                    </Link>
                </div>
        </div>
    );
};

export default Shop;