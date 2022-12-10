import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import BlogSidebar from './../components/BlogSidebar';

const classicBlog = [
    // {
    //     image: require('./../../images/blog/default/thum1.jpg'),
    //     date: 'September 10, 2017',
    //     author: 'Demongo',
    //     comment: '5k',
    //     title: 'WADA to investigate fresh Russian Olympic doping claims',
    //     desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.',

    // },
    // {
    //     image: require('./../../images/blog/default/thum2.jpg'),
    //     date: 'September 10, 2017',
    //     author: 'Demongo',
    //     comment: '5k',
    //     title: 'WADA to investigate fresh Russian Olympic doping claims',
    //     desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.',

    // },
    // {
    //     image: require('./../../images/blog/default/thum3.jpg'),
    //     date: 'September 10, 2017',
    //     author: 'Demongo',
    //     comment: '5k',
    //     title: 'WADA to investigate fresh Russian Olympic doping claims',
    //     desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.',

    // },
    // {
    //     image: require('./../../images/blog/default/thum4.jpg'),
    //     date: 'September 10, 2017',
    //     author: 'Demongo',
    //     comment: '5k',
    //     title: 'WADA to investigate fresh Russian Olympic doping claims',
    //     desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.',

    // },
]

var bg3 = require('./../../images/background/bg1.jpg');
// var bg3 = require('./../../images/banner/bnr1.jpg');
// 

class BlogClassicSidebar extends Component {

    render() {
        return (
            <div>
                <Header2 />
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Blog Classic Sidebar</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link to={'#'}>Home</Link></li>
                                    <li>Blog Classic Sidebar</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-full content-inner-2 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-7 col-sm-12">
                                {classicBlog.map((item, index) => (
                                    <div className="blog-post blog-lg blog-style-1" key={index}>
                                        <div className="dlab-post-media dlab-img-effect zoom-slow radius-sm">
                                            <Link to={'#'}><img src={item.image} alt="" /></Link>
                                        </div>
                                        <div className="dlab-info">
                                            <div className="dlab-post-meta">
                                                <ul className="d-flex align-items-center">
                                                    <li className="post-date">{item.date}</li>
                                                    <li className="post-author">By <Link to={'#'}>{item.author}</Link> </li>
                                                    <li className="post-comment"><Link to={'#'}>5k</Link> </li>
                                                </ul>
                                            </div>
                                            <div className="dlab-post-title ">
                                                <h4 className="post-title font-24"><Link to={'#'}>{item.title}</Link></h4>
                                            </div>
                                            <div className="dlab-post-text">
                                                <p>{item.desc}</p>
                                            </div>
                                            <div className="dlab-post-readmore blog-share">
                                                <Link to={'./blogdetails'} title="READ MORE" rel="bookmark" className="site-button-link border-link black">READ MORE</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
export default BlogClassicSidebar;