import React from 'react';
import { Link } from 'react-router-dom';
import Slick3 from './../Pages/Slick3';


const Register2 = () => {
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
								<div id="register" className="tab-pane">
									<form className="dlab-form" onSubmit={(e) => e.preventDefault(submitHandler)}>
										<div className="form-head">
											<h3 className="form-title m-t0">Create an account! It's free and<span className="text-primary">  always will be.</span></h3>
											<p className="title-text">Welcome back, please login<br /> to your account</p>
										</div>
										<div className="form-group-bx">
											<div className="form-group input-form">
												<label>User Name</label>
												<input name="dzName" required="" className="form-control" placeholder="Dummy Name" type="text" />
											</div>
											<div className="form-group input-form">
												<label>Email Id</label>
												<input name="dzName" required="" className="form-control" placeholder="info123@example.com" type="text" />
											</div>
											<div className="form-group input-form">
												<label>Password</label>
												<input name="dzName" required="" className="form-control" placeholder="Password" value="123456789" type="password" />
											</div>
										</div>
										<div className="form-group">
											<input type="checkbox" id="privacy-policy" />
											<label for="privacy-policy">I agree to the <Link to={'#'} className="btn-link">Terms of Service </Link>& <Link to={'#'} className="btn-link">Privacy Policy </Link></label>
										</div>
										<div className="form-group">
											<button type="submit" onClick={() => submitHandler} className="site-button black m-r10">Submit</button>
											<Link to={'./login'} className="site-button outline">Back</Link>
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
export default Register2;