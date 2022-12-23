import React from 'react';
import { Link } from 'react-router-dom';
import hh from '././../assets/images/hh.png';
import ii from '././../assets/images/ii.png';
import jj from '././../assets/images/jj.png';
import kk from '././../assets/images/kk.png';
import ll from '././../assets/images/ll.png';
import mm from '././../assets/images/mm.png';

const Blog = () => {
    return (
        <div>
            <div><h1 className='title'>OUR BLOGS</h1></div>
            <div>
            <div className='display-grid1'>
                    <Link to='/blog1'>
                    <div className='single-card'>
                        <img
                        className="d-block"
                        src={hh}
                        alt="First slide"
                        />
                        
                    </div>
                    </Link>
                    <Link to='/blog2'>
                    <div className='single-card'>
                        <img
                        className="d-block"
                        src={ii}
                        alt="First slide"
                        />
                       
                    </div>
                    </Link>
                    <Link to='/blog3'>
                    <div className='single-card'>
                        <img
                        className="d-block"
                        src={jj}
                        alt="First slide"
                        />
                       
                    </div>
                    </Link>
                    <Link to='/blog1'>
                    <div className='single-card'>
                        <img
                        className="d-block"
                        src={kk}
                        alt="First slide"
                        />
                        
                    </div>
                    </Link>
                    <Link to='/blog2'>
                    <div className='single-card'>
                        <img
                        className="d-block"
                        src={ll}
                        alt="First slide"
                        />
                       
                    </div>
                    </Link>
                    <Link to='/blog3'>
                    <div className='single-card'>
                        <img
                        className="d-block"
                        src={mm}
                        alt="First slide"
                        />
                        
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;