import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom';
import GoogleMaps from 'google-map-react';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';

var bg3 = require('./../../images/banner/bnr1.jpg');
const  Contacts = () => {
    const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
		emailjs.sendForm('service_gfykn6i', 'template_iy1pb0b', e.target, 'HccoOtZS6GHw-N-m6')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
		  //swal('Good job!', 'form successfuly submmited', "success");
	};
    return (
        <div>
            <Header2 />
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Blog Classic</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link to={'#'}>Home</Link></li>
                                <li>Blog Classic</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full content-inner bg-white contact-style-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-lg-flex d-md-flex">
                            <div className="p-a30 border m-b30 contact-area border-1 align-self-stretch ">
                                <h4 className="m-b10">Quick Contact</h4>
                                <p>If you have any questions simply use the following contact details.</p>
                                <ul className="no-margin">
                                    <li className="icon-bx-wraper left m-b30">
                                        <div className="icon-bx-xs border-1"><Link to={'#'} className="icon-cell"><i className="ti-location-pin"></i></Link> </div>
                                        <div className="icon-content">
                                            <h6 className="text-uppercase m-tb0 dlab-tilte">Address:</h6>
                                            <p>123 West Street, Melbourne Victoria 3000 Australia</p>
                                        </div>
                                    </li>
                                    <li className="icon-bx-wraper left  m-b30">
                                        <div className="icon-bx-xs border-1"><Link to={'#'}className="icon-cell"><i className="ti-email"></i></Link> </div>
                                        <div className="icon-content">
                                            <h6 className="text-uppercase m-tb0 dlab-tilte">Email:</h6>
                                            <p>info@example.com</p>
                                        </div>
                                    </li>
                                    <li className="icon-bx-wraper left">
                                        <div className="icon-bx-xs border-1"><Link to={'#'} className="icon-cell"><i className="ti-mobile"></i></Link> </div>
                                        <div className="icon-content">
                                            <h6 className="text-uppercase m-tb0 dlab-tilte">PHONE</h6>
                                            <p>+61 3 8376 6284</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="m-t20">
                                    <ul className="dlab-social-icon dlab-social-icon-lg">
                                        <li><Link to={'#'} className="fa fa-facebook bg-primary"></Link></li>
                                        <li><Link to={'#'} className="fa fa-twitter bg-primary"></Link></li>
                                        <li><Link to={'#'} className="fa fa-linkedin bg-primary"></Link></li>
                                        <li><Link to={'#'} className="fa fa-pinterest-p bg-primary"></Link></li>
                                        <li><Link to={'#'} className="fa fa-google-plus bg-primary"></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="p-a30 m-b30 	bg-gray clearfix">
                                <h4>Send Message Us</h4>
                                <div className="dzFormMsg"></div>
                                <form  className="dzForm" ref={form} onSubmit={sendEmail}>
                                    <input type="hidden" value="Contact" name="dzToDo" />
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="name" type="text" required className="form-control" placeholder="Your Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="email" type="email" className="form-control" required placeholder="Your Email Id" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <textarea name="message" rows="4" className="form-control" required placeholder="Your Message..."></textarea>
                                                </div>
                                            </div>
                                        </div>
										{ /*  <div className="col-lg-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                    <input className="form-control d-none" data-recaptcha="true" data-error="Please complete the Captcha" />
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="col-lg-12">
                                            <button name="submit" type="submit" value="Submit" className="site-button "> <span>Submit</span> </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 d-lg-flex m-b30">
                            <GoogleMaps
                                bootstrapURLKeys={"AIzaSyDPNnnZkIiUEXX-u1ZAGy8GHurDBM1XvaA"}
                                style={{ height: "500px", width: "100%" }}
                                zoom={6}
                                center={{ lat: 37.4224764, lng: -122.0842499 }}
                                markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
    
}
export default Contacts;