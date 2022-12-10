import React from 'react';
import {Nav, Tab} from 'react-bootstrap';
//import { TabContent, TabPane, } from 'reactstrap';
//import classnames from 'classnames';
import { Link } from 'react-router-dom';

const Popupss = (props) => {
    return (
        <Tab.Container defaultActiveKey="London">
            <div tabs>
                <div className="site-filters style1 clearfix center">
                    <Nav as="ul" className="filters">
                        <Nav.Item as="li">                            
                            <Nav.Link eventKey="London"><span>London</span></Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">                           
                            <Nav.Link eventKey="Berlin" ><span>Berlin</span></Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">                           
                            <Nav.Link eventKey="Dubai" ><span>Dubai</span></Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">                           
                            <Nav.Link eventKey="Rome"><span>Rome</span></Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">                           
                            <Nav.Link eventKey="Cuba"><span>Cuba</span></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
            <Tab.Content>
                <Tab.Pane eventKey="London">
                    <div className="row">
                        <div className="web design card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <img src={require('./../../images/gallery/pic1.jpg')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="advertising branding photography card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect ">
                                    <Link to={'#'}> <img src={require('./../../images/gallery/pic2.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="branding design photography card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link to={'#'}> <img src={require('./../../images/gallery/pic3.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="web design card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link to={'#'}> <img src={require('./../../images/gallery/pic4.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="web branding card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link to={'#'}> <img src={require('./../../images/gallery/pic5.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="Berlin">
                    <div className="row">
                        <div className="web design card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link to={'#'}> <img src={require('./../../images/gallery/pic2.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="advertising branding photography card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect ">
                                    <Link to={'#'}> <img src={require('./../../images/gallery/pic3.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="Dubai">
                    <div className="row">
                        <div className="web photography card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link to={'#'}> <img src={require('./../../images/gallery/pic9.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="advertising branding card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link to={'#'}> <img src={require('./../../images/gallery/pic1.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="Rome">
                    <div className="row">
                        <div className="advertising design photography card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect ">
                                    <Link to={'#'}> <img src={require('./../../images/gallery/pic6.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="web branding card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link to={'#'}> <img src={require('./../../images/gallery/pic7.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="advertising design photography card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect ">
                                    <Link to={'#'}> <img src={require('./../../images/gallery/pic8.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="Cuba">
                    <div className="row">
                        <div className="branding design photography card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link to={'#'}> <img src={require('./../../images/gallery/pic3.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="web design card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link to={'#'}> <img src={require('./../../images/gallery/pic4.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="web branding card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link to={'#'}> <img src={require('./../../images/gallery/pic5.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
    );
}

export default Popupss;