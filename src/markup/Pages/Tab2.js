import React from 'react';
import {Tab, Nav} from 'react-bootstrap';


function SectionSelect(){
    return(
        <>
            <form className="row sp20">
                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                    <input type="text" className="form-control" placeholder="Keywords" />
                </div>
                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                    <select className="form-control">
                        <option>Activity</option>
                        <option>City Tours</option>
                        <option>Cultural &amp; Thematic Tours</option>
                        <option>Family Friendly Tours</option>
                        <option>Holiday &amp; Seasonal Tours</option>
                        <option>Indulgence &amp; Luxury Tours</option>
                        <option>Outdoor Activites</option>
                        <option>Relaxation Tours</option>
                        <option>Wild &amp; Adventure Tours</option>
                    </select>
                </div>
                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                    <select className="form-control">
                        <option>Destination</option>
                        <option>Africa</option>
                        <option>America</option>
                        <option>Asia</option>
                        <option>Eastern Europe</option>
                        <option>Europe</option>
                        <option>South America</option>
                    </select>
                </div>
                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                    <select className="form-control">
                        <option>Duration</option>
                        <option>1 Day Tour</option>
                        <option>2-4 Days Tour</option>
                        <option>5-7 Days Tour</option>
                        <option>7+ Days Tour</option>
                    </select>
                </div>
                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                    <input type="text" className="form-control" id='datetimepicker1' placeholder="Date" />
                </div>
                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                    <button type="button" className="site-button btn-block">SEARCH</button>
                </div>
            </form>
        </>
    )
}

const Tab2 = (props) => {
    

    return (
        <Tab.Container defaultActiveKey='Hotels'>
            <div className="section-full search-filter">
                <div className="container">
                    <Nav className="nav nav-pills" as='ul'>
                        <Nav.Item as='li'>
                            <Nav.Link eventKey='Hotels'>Hotels</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as='li'>
                            <Nav.Link eventKey='Packages'>Packages</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as='li'>
                            <Nav.Link eventKey='Places'>Places</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>

            <div className="search-form-bx">
                <div className="container">
                    <Tab.Content >
                        <Tab.Pane eventKey='Hotels'>
                            <SectionSelect />
                        </Tab.Pane>
                        <Tab.Pane eventKey='Packages'>
                            <SectionSelect /> 
                        </Tab.Pane>
                        <Tab.Pane eventKey='Places'>
                            <SectionSelect /> 
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </div>

        </Tab.Container>
    );
}

export default Tab2;