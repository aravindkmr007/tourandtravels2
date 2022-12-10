import React from 'react';
import {Nav, Tab} from 'react-bootstrap';


import pic1 from './../../images/gallery/pic1.jpg';
import pic2 from './../../images/gallery/pic2.jpg';
import pic3 from './../../images/gallery/pic3.jpg';
import pic4 from './../../images/gallery/pic4.jpg';
import pic5 from './../../images/gallery/pic5.jpg';
import pic6 from './../../images/gallery/pic6.jpg';
import pic7 from './../../images/gallery/pic7.jpg';
import pic8 from './../../images/gallery/pic8.jpg';
import pic9 from './../../images/gallery/pic9.jpg';

const portfolioBlog1 = [
	{image: pic1 },
	{image: pic2 },
	{image: pic3 },
	{image: pic4 },
	{image: pic5 },
	{image: pic6 },
	{image: pic7 },
	{image: pic8 },
	{image: pic9 },
	{image: pic1 },
	{image: pic2 },
	{image: pic3 },
];
const portfolioBlog2 = [	
	{image: pic3 },
	{image: pic4 },
	{image: pic5 },
	{image: pic6 },
	{image: pic7 },
	{image: pic8 },
];
const portfolioBlog3 = [
	{image: pic1 },
	{image: pic2 },
	{image: pic6 },
	{image: pic8 },
	{image: pic9 },
	
];
const portfolioBlog4 = [
	{image: pic1 },
	{image: pic3 },
	{image: pic4 },
	{image: pic5 },
	{image: pic6 },
	{image: pic7 },	
];
const portfolioBlog5 = [
	{image: pic2 },	
	{image: pic6 },
	{image: pic7 },
	{image: pic8 },
	{image: pic1 },
	{image: pic3 },
];
const portfolioBlog6 = [
	{image: pic4 },
	{image: pic5 },
	{image: pic6 },
];

const PortFolio4Tab = (props) => {
    return (
        <Tab.Container defaultActiveKey="All">
            <div tabs>
                <div className="site-filters style1 clearfix center">
                    <Nav as="ul" className="filters">
                        <Nav.Item as="li">                            
                            <Nav.Link eventKey="All"><span>All</span></Nav.Link>
                        </Nav.Item>
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
				<Tab.Pane eventKey="All">
                    <div className="row">
						{portfolioBlog1.map((data, index)=>(
							<div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
								<div className="dlab-box dlab-gallery-box">
									<div className="dlab-media dlab-img-overlay1 dlab-img-effect">
										<img src={data.image} alt="" />
									</div>
								</div>
							</div>
						))}
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="London">
                    <div className="row">
						{portfolioBlog2.map((data, index)=>(
							<div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
								<div className="dlab-box dlab-gallery-box">
									<div className="dlab-media dlab-img-overlay1 dlab-img-effect">
										<img src={data.image} alt="" />
									</div>
								</div>
							</div>
						))}
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="Berlin">
                    <div className="row">
                       {portfolioBlog3.map((data, index)=>(
							<div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
								<div className="dlab-box dlab-gallery-box">
									<div className="dlab-media dlab-img-overlay1 dlab-img-effect">
										<img src={data.image} alt="" />
									</div>
								</div>
							</div>
						))}
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="Dubai">
                    <div className="row">
                        {portfolioBlog4.map((data, index)=>(
							<div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
								<div className="dlab-box dlab-gallery-box">
									<div className="dlab-media dlab-img-overlay1 dlab-img-effect">
										<img src={data.image} alt="" />
									</div>
								</div>
							</div>
						))}
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="Rome">
                    <div className="row">
                        {portfolioBlog5.map((data, index)=>(
							<div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
								<div className="dlab-box dlab-gallery-box">
									<div className="dlab-media dlab-img-overlay1 dlab-img-effect">
										<img src={data.image} alt="" />
									</div>
								</div>
							</div>
						))}
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="Cuba">
                    <div className="row">
                        {portfolioBlog6.map((data, index)=>(
							<div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
								<div className="dlab-box dlab-gallery-box">
									<div className="dlab-media dlab-img-overlay1 dlab-img-effect">
										<img src={data.image} alt="" />
									</div>
								</div>
							</div>
						))}
                    </div>
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
    );
}

export default PortFolio4Tab;