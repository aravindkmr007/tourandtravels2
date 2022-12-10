import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import BlogSidebar from './../components/BlogSidebar';

const gridBlog = [
    {
        image: require('./../../images/blog/grid/pic1.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic2.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic3.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic4.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic1.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic2.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic3.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic4.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic1.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic2.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
]


var bg3 = require('./../../images/banner/bnr1.jpg');
class BlogGridSidebar extends Component {

    render() {
        return (
            <div>
                <Header2 />
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Blog Detailed Grid Sidebar</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link to={'#'}>Home</Link></li>
                                    <li>Blog Detailed Grid Sidebar</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-full content-inner-2 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-7 col-sm-12">
                                <div id="masonry" className="dlab-blog-grid-3 row">
                                    {gridBlog.map((item, index) => (
                                        <div className="post card-container col-lg-6 col-md-6 col-sm-6" key={index}>
                                            <div className="blog-post blog-grid blog-style-1">
                                                <div className="dlab-post-media dlab-img-effect radius-sm">
                                                    <Link to={'#'}><img src={item.image} alt="" /></Link>
                                                </div>
                                                <div className="dlab-info">
                                                    <div className="dlab-post-meta">
                                                        <ul className="d-flex align-items-center">
                                                            <li className="post-date">{item.date}</li>
                                                            <li className="post-comment"><Link to={'#'}>{item.comment}</Link> </li>
                                                        </ul>
                                                    </div>
                                                    <div className="dlab-post-title ">
                                                        <h5 className="post-title font-20"><Link to={'./blogdetails'}>{item.title}</Link></h5>
                                                    </div>
                                                    <div className="dlab-post-readmore blog-share">
                                                        <Link to={'./blogdetails'} title="READ MORE" rel="bookmark" className="site-button-link border-link black">READ MORE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="pagination-bx clearfix text-center">
                                    <ul className="pagination">
                                        <li className="previous"><Link to={'#'}><i className="ti-arrow-left"></i> Prev</Link></li>
                                        <li className="active"><Link to={'#'}>1</Link></li>
                                        <li><Link to={'#'}>2</Link></li>
                                        <li><Link to={'#'}>3</Link></li>
                                        <li className="next"><Link to={'#'}>Next <i className="ti-arrow-right"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12 sticky-top">
                                <aside className="side-bar">
                                    <BlogSidebar />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default BlogGridSidebar;