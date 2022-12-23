import React from 'react';
import dd from '././../assets/images/dd.png';
import y from '././../assets/images/y.png';
import d from '././../assets/images/d.png';
import z from '././../assets/images/z.png';
import aa from '././../assets/images/aa.png';
import bb from '././../assets/images/bb.png';
import cc from '././../assets/images/cc.png';
import { FaMoneyCheckAlt,FaMoneyCheck,FaShippingFast } from 'react-icons/fa';
import CustomersReview from './CustomersReview';

const Paint1 = () => {
    return (
        <div>
            <div className='row paint1-img'>
            {/* <div className='d-flex justify-content-between'> */}
                {/* <div className='n-4 paint1-img'> */}
                <div className='col'>
                    <img src={dd} alt="" />
                </div>
                <div className='col mt-5'>
                    <h1>One Person Digi Painting</h1>
                    <div className='row'>
                        <div className='col'>
                            <p>✔ Made of Pigment Ink</p>
                            <p>✔ Sunlight Resistant</p>
                            <p>✔ Previewed for Approval</p>
                        </div>
                        <div className='col'>
                            <p>✔ Durable for a lifetime</p>
                            <p>✔ Water Resistant</p>
                        </div>
                    </div>
                    <div className='mt-4 ps-4 pt-2 doted-border'>
                        <h5 className='title-color'>Grab The Best Deal</h5>
                        <p><FaMoneyCheckAlt/> 10% Extra Off on Orders above ₹1000</p>
                        <p><FaMoneyCheck/> 15% Extra Off on Orders above ₹3500</p>
                        <p><FaShippingFast/> Free Shipping</p>
                    </div>
                    <div className='row mt-5 div-con'>
                        <h4>Frame Size</h4>
                        <div className='col button-col'>
                            <p>Softcopy <br />
                            (onemail)</p>
                        </div>
                        <div className='col button-col'>
                            <p>A5 <br />
                            (5.8*8.3in)</p>
                        </div>
                        <div className='col button-col'>
                            <p>A4 <br />
                            (8.3*11.7in)</p>
                        </div>
                    </div>
                    <div className='row mt-2 mb-5 div-con'>
                        <div className='col button-col'>
                            <p>A3 <br />
                            (16.5*11.7in)</p>
                        </div>
                        <div className='col button-col'>
                            <p>A2 <br />
                            (8.3*11.7in)</p>
                        </div>
                        <div className='col button-col'>
                            <p>A1 <br />
                            (9.4*11.7in)</p>
                        </div>
                    </div>
                    <div className='row div-con'>
                        <h4>No. of People & Pets in your photo</h4>
                        <div className='col button-col'>
                            <p>1 Person</p>
                        </div>
                        <div className='col button-col'>
                            <p>2 Person</p>
                        </div>
                        <div className='col button-col'>
                            <p>3 Person</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between mb-5 mt-5'>
                        <div className='row'>
                        <h4>Process & Delivery Priority</h4>
                            <div className='col button-col'>
                            <p>Standard</p>
                            </div>
                            <div className='col button-col'>
                            <p>Express</p>
                            </div>
                        </div>
                        <div className='mt-5 me-4'>
                            <h4 className='title-color'>₹990.00</h4>
                            <p>✔ Available</p>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-success'>Estimated Delivery <br />
                        by 31st December</h4>
                    </div>
                
            <div className='mt-4'>
                <h5>ABOUT THIS ITEM</h5>
                <p>Couple / Two People Digi Painting Only Softcopy in Standard Priority We create a masterpiece of your photo with our unique image to digital painting service. Digitally hand-drawn with pen-tab and stylus pen, the brilliant and delicate details of our painting will brighten your memories. After your evaluation and approval, the artwork is printed with pigment ink on premium matte paper and finished with matte lamination to ensure it lasts for many years.</p>
            </div>
    </div>
</div>
                <div className='img-center1'>
                    <img  src={y} alt="" />
                    <img src={d} alt="" />
                    <img src={z} alt="" /><br />
                    <img src={aa} alt="" />
                    <img src={bb} alt="" />
                    <img src={cc} alt="" />
                </div>
                
                <CustomersReview></CustomersReview>
        </div>
    );
};

export default Paint1;