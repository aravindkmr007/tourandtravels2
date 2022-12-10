import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css';

import Slick2 from './Slick2';
import HomeBlog from './../Element/HomeBlog';
import { Link } from 'react-router-dom';
import HomeTwoSlider from './../components/HomeTwoSlider';
import Footer from './../Layout/Footer';
import Tab2 from './../Pages/Tab2';
import Header from '../Layout/Header';

var bg1 = require('./../../images/background/bg1.jpg');


function Homepage2(){
    const [isOpen, setOpen] = useState(false)	
    return (
        <div>

            <Header />				
            <HomeTwoSlider />
            <div className="content-block" id="page_content">
                <Tab2 />

                <div className="section-full bg-white content-inner-2">
                    <div className="container">
                        <div className="section-head style1 text-black text-center">
                            <h2>Popular Destinations</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="featured-bx style2">
                                    <div className="featured-media">
                                        <img src={require('./../../images/featured/pic1.jpg')} alt="" />
                                        <div className="featured-tag">5 Days</div>
                                    </div>
                                    <div className="featured-content text-white">
                                        <div>
                                            <h2 className="title"><Link to={'packages'}>Westorn Europe</Link></h2>
                                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                            <Link to={'packages'} className="site-button outline white">View All Tours</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="featured-bx style2">
                                    <div className="featured-media">
                                        <img src={require('./../../images/featured/pic2.jpg')} alt="" />
                                        <div className="featured-tag">7 Days</div>
                                    </div>
                                    <div className="featured-content text-white">
                                        <div>
                                            <h2 className="title"><Link to={'packages'}>Philippines</Link></h2>
                                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                            <Link to={'packages'} className="site-button outline white">View All Tours</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="featured-bx style2">
                                    <div className="featured-media">
                                        <img src={require('./../../images/featured/pic3.jpg')} alt="" />
                                        <div className="featured-tag">3 Days</div>
                                    </div>
                                    <div className="featured-content text-white">
                                        <div>
                                            <h2 className="title"><Link to={'packages'}>Friendly Santorini</Link></h2>
                                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                            <Link to={'packages'} className="site-button outline white">View All Tours</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="featured-bx style2">
                                    <div className="featured-media">
                                        <img src={require('./../../images/featured/pic4.jpg')} alt="" />
                                        <div className="featured-tag">2 Days</div>
                                    </div>
                                    <div className="featured-content text-white">
                                        <div>
                                            <h2 className="title"><Link to={'packages'}>Australia</Link></h2>
                                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                            <Link to={'packages'} className="site-button outline white">View All Tours</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="featured-bx style2">
                                    <div className="featured-media">
                                        <img src={require('./../../images/featured/pic5.jpg')} alt="" />
                                        <div className="featured-tag">6 Days</div>
                                    </div>
                                    <div className="featured-content text-white">
                                        <div>
                                            <h2 className="title"><Link to={'packages'}>South America </Link></h2>
                                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                            <Link to={'packages'} className="site-button outline white">View All Tours</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="section-full content-inner bg-img-fix overlay-black-middle" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                    <div className="container">
                        <div className="video-banner-box">
                            <div>
                                {/* <Link to={'https://www.youtube.com/watch?v=Dj6CKxQue7U'} className=""></Link> */}
                                <Link to={"#"} className="popup-youtube video play-btn" onClick={()=> setOpen(true)} ><i className="fa fa-play"></i></Link>
                                <h2 className="title">Traveling Highlight</h2>
                                <h4 className="sub-title">Your New Traveling Idea</h4>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-full content-inner bg-gray">
                    <div className="container">
                        <div className="section-head style1 text-black text-left text-center">
                            <h2>Best Holiday Packages</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="dlab-box packages-bx">
                                    <div className="dlab-media">
                                        <Link to={'listing'}><img src={require('./../../images/gallery/img5.jpg')} alt="" /></Link>
                                        <span className="tag yellow">Best Seller</span>
                                    </div>
                                    <div className="dlab-info">
                                        <div className="head-title">
                                            <span className="time">2 Days 3 Night</span>
                                            <h4 className="dlab-title"><Link to={'listing'}>Weekdays in South America</Link></h4>
                                            <span className="location">Peelamedu, Cbe, South America</span>
                                        </div>
                                        <div className="package-content">
                                            <div className="review-bx">
                                                <ul className="rating-star">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                                <span>(5 Review)</span>
                                            </div>
                                            <div className="price-bx">
                                                <del className="price-del">$700</del>
                                                <span className="price-main">$550</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><div className="col-lg-6">
                                <div className="dlab-box packages-bx">
                                    <div className="dlab-media">
                                        <Link to={'listing'}><img src={require('./../../images/gallery/img2.jpg')} alt="" /></Link>
                                        <span className="tag yellow">Best Seller</span>
                                    </div>
                                    <div className="dlab-info">
                                        <div className="head-title">
                                            <span className="time">8 Days 7 Night</span>
                                            <h4 className="dlab-title"><Link to={'listing'}>Weekdays in India</Link></h4>
                                            <span className="location">Peelamedu, Cbe, India</span>
                                        </div>
                                        <div className="package-content">
                                            <div className="review-bx">
                                                <ul className="rating-star">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                                <span>(4 Review)</span>
                                            </div>
                                            <div className="price-bx">
                                                <del className="price-del">$457</del>
                                                <span className="price-main">$350</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="dlab-box packages-bx">
                                    <div className="dlab-media">
                                        <Link to={'listing'}><img src={require('./../../images/gallery/img3.jpg')} alt="" /></Link>
                                        <span className="tag yellow">Best Seller</span>
                                    </div>
                                    <div className="dlab-info">
                                        <div className="head-title">
                                            <span className="time">8 Days 7 Night</span>
                                            <h4 className="dlab-title"><Link to={'listing'}>Weekdays in Australia</Link></h4>
                                            <span className="location">Peelamedu, Cbe, Australia</span>
                                        </div>
                                        <div className="package-content">
                                            <div className="review-bx">
                                                <ul className="rating-star">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                                <span>(2 Review)</span>
                                            </div>
                                            <div className="price-bx">
                                                <del className="price-del">$250</del>
                                                <span className="price-main">$200</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="dlab-box packages-bx">
                                    <div className="dlab-media">
                                        <Link to={'listing'}><img src={require('./../../images/gallery/img4.jpg')} alt="" /></Link>
                                        <span className="tag yellow">Best Seller</span>
                                    </div>
                                    <div className="dlab-info">
                                        <div className="head-title">
                                            <span className="time">8 Days 7 Night</span>
                                            <h4 className="dlab-title"><Link to={'listing'}>Weekdays in Philippines</Link></h4>
                                            <span className="location">Weekdays in Philippines</span>
                                        </div>
                                        <div className="package-content">
                                            <div className="review-bx">
                                                <ul className="rating-star">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                                <span>(8 Review)</span>
                                            </div>
                                            <div className="price-bx">
                                                <del className="price-del">$840</del>
                                                <span className="price-main">$710</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Slick2 />
                <HomeBlog />
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Dj6CKxQue7U" onClose={() => setOpen(false)} />
            <Footer />
        </div>
    )
    
}
export default Homepage2;