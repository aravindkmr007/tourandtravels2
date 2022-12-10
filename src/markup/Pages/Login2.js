import React from 'react';
// import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Slick3 from './Slick3';



const Login2 = () => {	
	const submitHandler = (e) => {
		e.preventDefault();		  
	};
    

	return (
		<div>
			<div className="page-content dlab-login font-roboto">
				<div className="container-fluid p-lr0">
					<div className="row m-lr0 login-form-box">
						<div className="col-lg-4 p-lr0">
							<div className="login-form">
								<div className="logo logo-header">
								<Link to={'./'}>
									{/* <img src={require('./../../images/logo-2.png')} alt="" /> */}
									</Link>
								</div>
								<div id="login" className="tab-pane">
									<form className="dlab-form" onSubmit={(e) => e.preventDefault(submitHandler)} >
										<div className="form-head">
											<h3 className="form-title m-t0">We Are <span className="text-primary">Triper</span></h3>
											<p className="title-text">Welcome back, please login<br /> to your account</p>
										</div>
										<div className="form-group-bx">
											<div className="form-group input-form">
												<label>Email Address</label>
												<input name="dzName" required="" className="form-control" placeholder="info123@example.com" type="text" />
											</div>
											<div className="form-group input-form">
												<label>Password</label>
												<input name="dzName" required="" className="form-control " placeholder="Type Password" type="password" value="123456789" />
											</div>
										</div>
										<div className="form-group field-btn text-left">
											<div className="input-block">
												<input id="check1" type="checkbox" />
												<label for="check1">Remember me</label>
											</div>
											<Link to={'./forgot'} className="btn-link forgot-password"> Forgot Password</Link>
										</div>
										<div className="form-group">
											<button type="submit" className="site-button black m-r10" onClick={() => submitHandler}>login</button>
											<Link to={'./register'} className="site-button outline">Sign Up</Link>
										</div>
									</form>
								</div>


							</div>
						</div>
						<div className="col-lg-8 p-lr0">
							<Slick3 />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
    
}
export default Login2;