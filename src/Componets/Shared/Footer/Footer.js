import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faEnvelope, faPhoneVolume, faMapMarker } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <section>
            <div className='footer-section'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <Link to='/'>
                                    <h4 className='text-light fst-italic fw-bold'>Bikehourse</h4>
                                </Link>
                                <p className='text-light mt-3 mb-3'>This is open to everyone every day and provides primary health care and cutting-edge medicine in a central location</p>
                                <ul className='d-flex align-items-center justify-content-between w-50'>
                                    <li><Link to="#"><FontAwesomeIcon icon={faFacebook} className='text-light fs-4' /></Link></li>
                                    <li><Link to="#"><FontAwesomeIcon icon={faTwitter} className='text-light fs-4' /></Link></li>
                                    <li><Link to="#"><FontAwesomeIcon icon={faLinkedin} className='text-light fs-4' /></Link></li>
                                    <li><Link to="#"><FontAwesomeIcon icon={faInstagram} className='text-light fs-4' /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <h3 className='text-light mb-3 fs-5 fw-bold'>Important Link</h3>
                                <div className="fotMenu2">
                                    <li><Link to="#">Upcoming bike</Link></li>
                                    <li><Link to="#">Services</Link></li>
                                    <li><Link to="#">latest bike</Link></li>
                                    <li><Link to="#">sports bike</Link></li>
                                    <li><Link to="#">Showrooms</Link></li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <h3 className='text-light mb-3 fs-5 fw-bold'>Useful Link</h3>
                                <div className="fotMenu2">
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                    <li><Link to="#">Open Source Agreements</Link></li>
                                    <li><Link to="#">FAQ</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="#">notice</Link></li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <div className="footer-social">
                                    <h3 className='text-light mb-3 fs-5 fw-bold'>Our Locations</h3>
                                    <h6 className='text-light'>The bikehouese sell latest bike for customers</h6>
                                </div>
                                <div className="call-client mt-3">
                                    <h6 className='text-light'><FontAwesomeIcon icon={faMapMarker} className='me-2' />24A Kingston NC 28202, USA.</h6>
                                    <h6 className='text-light mt-2 mb-2'><FontAwesomeIcon icon={faEnvelope} className='me-2' />
                                        support@bikehouese.com</h6>
                                    <h6 className='text-light'><FontAwesomeIcon icon={faPhoneVolume} className='me-2' />(+22) 123 - 4567 - 900</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright text-center">
                    <p className='text-light'>©{date} bikehouese. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;