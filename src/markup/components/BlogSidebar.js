import React from 'react';
import {Link} from 'react-router-dom';
// import { SRLWrapper } from "simple-react-lightbox";

export default function BlogSidebar(){
	return(
		<>
			<div className="widget">
				<h6 className="widget-title style-1">Search</h6>
				<div className="search-bx style-1">
					<form role="search" method="post">
						<div className="input-group">
							<input name="text" className="form-control" placeholder="Enter your keywords..." type="text" />
							<span className="input-group-btn">
								<button type="submit" className="fa fa-search text-primary"></button>
							</span>
						</div>
					</form>
				</div>
			</div>
			<div className="widget recent-posts-entry">
				<h6 className="widget-title style-1">Recent Posts</h6>
				<div className="widget-post-bx">
					<div className="widget-post clearfix">
						<div className="dlab-post-media"> <img src={require('./../../images/blog/recent-blog/pic1.jpg')} width="200" height="143" alt="" /> </div>
						<div className="dlab-post-info">
							<div className="dlab-post-header">
								<h6 className="post-title"><Link to={"#"}>World’s largest Muslim group denounces Islamist extremism</Link></h6>
							</div>
							<div className="dlab-post-meta">
								<ul className="d-flex align-items-center">
									<li className="post-date">Sep 18, 2017</li>
									<li className="post-comment"><Link to={"#"}>5k</Link> </li>
								</ul>
							</div>
						</div>
					</div>
					<div className="widget-post clearfix">
						<div className="dlab-post-media"> <img src={require('./../../images/blog/recent-blog/pic2.jpg')} width="200" height="160" alt="" /> </div>
						<div className="dlab-post-info">
							<div className="dlab-post-header">
								<h6 className="post-title"><Link to={"#"}>Five Solomon islands swallowed by the sea</Link></h6>
							</div>
							<div className="dlab-post-meta">
								<ul className="d-flex align-items-center">
									<li className="post-date">Sep 18, 2017</li>
									<li className="post-comment"><Link to={"#"}>5k</Link> </li>
								</ul>
							</div>
						</div>
					</div>
					<div className="widget-post clearfix">
						<div className="dlab-post-media"> <img src={require('./../../images/blog/recent-blog/pic3.jpg')} width="200" height="160" alt="" /> </div>
						<div className="dlab-post-info">
							<div className="dlab-post-header">
								<h6 className="post-title"><Link to={"#"}>U.S. destroyer sails near disputed Chinese island</Link></h6>
							</div>
							<div className="dlab-post-meta">
								<ul className="d-flex align-items-center">
									<li className="post-date">Sep 18, 2017</li>
									<li className="post-comment"><Link to={"#"}>5k</Link> </li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="widget widget_gallery gallery-grid-3">
				<h6 className="widget-title style-1">Our services</h6>
				{/* <SRLWrapper> */}
					<ul>
						<li><div className="dlab-post-thum"><img src={require('./../../images/gallery/pic2.jpg')} alt="" /></div></li>
						<li><div className="dlab-post-thum"><img src={require('./../../images/gallery/pic1.jpg')} alt="" /></div></li>
						<li><div className="dlab-post-thum"><img src={require('./../../images/gallery/pic5.jpg')} alt="" /></div></li>
						<li><div className="dlab-post-thum"><img src={require('./../../images/gallery/pic7.jpg')} alt="" /></div></li>
						<li><div className="dlab-post-thum"><img src={require('./../../images/gallery/pic8.jpg')} alt="" /></div></li>
						<li><div className="dlab-post-thum"><img src={require('./../../images/gallery/pic9.jpg')} alt="" /></div></li>
					</ul>
				{/* </SRLWrapper>	 */}
			</div>

			<div className="widget widget_archive">
				<h6 className="widget-title style-1">Categories List</h6>
				<ul>
					<li><Link to={"#"}>aciform</Link></li>
					<li><Link to={"#"}>championship</Link></li>
					<li><Link to={"#"}>chastening</Link></li>
					<li><Link to={"#"}>clerkship</Link></li>
					<li><Link to={"#"}>disinclination</Link></li>
				</ul>
			</div>

			<div className="widget widget-newslatter">
				<h6 className="widget-title style-1">Newsletter</h6>
				<div className="news-box">
					<p>Enter your e-mail and subscribe to our newsletter.</p>
					<form className="dzSubscribe" action="script/mailchamp.php" method="post">
						<div className="dzSubscribeMsg"></div>
						<div className="input-group">
							<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email" />
							<button name="submit" value="Submit" type="submit" className="site-button btn-block radius-no">Subscribe Now</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
} 