import React from 'react';
import { FaWhatsapp, FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer-container p-5'>
            <div className='d-flex justify-content-around'>
                <div>
                    <h4>SITE MAP</h4>
                    <p>Home</p>
                    <p>Blog</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p className='mt-5 text-danger'>+91 7795117716</p>
                    <p className='text-info'>info@buttistore.com</p>
                </div>
                <div>
                    <h4>PRODUCTS</h4>
                    <p>Digi Painting</p>
                    <p>Digi Merge Painting</p>
                    <p>Old Picture Digi Painting</p>
                    <p>Handmade Painting</p>
                    <p>Handmade Pencil Sketch</p>
                </div>
                <div>
                    <h4>Join Our Family</h4>
                    <p>Subscribe to our newsletter and be among the first to hear about new deals and special offers.</p>
                    <h5 className='mt-5'>Follow Us</h5>
                    <div className='d-flex'>
                        <a href="https://api.whatsapp.com/send/?phone=917795117716&text&type=phone_number&app_absent=0" target="_blank"><h3><FaWhatsapp/></h3></a>
                        <a href="https://www.facebook.com/buttistore" target="_blank"><h3 className='ms-3'><FaFacebook/></h3></a>
                        <a href="https://www.instagram.com/buttistore/" target="_blank"><h3 className='ms-3'><FaInstagram/></h3></a>
                        <a href="https://twitter.com/buttistore" target="_blank"><h3 className='ms-3'><FaTwitter/></h3></a>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Footer;