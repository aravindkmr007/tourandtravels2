import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  componentDidMount() {
    // sidebar open/close

    var btn = document.querySelector(".navicon");
    var aaa = document.querySelector(".myNavbar ");

    function toggleFunc() {
      return aaa.classList.toggle("show");
    }

    btn.addEventListener("click", toggleFunc);

    // Sidenav li open close
    var navUl = [].slice.call(document.querySelectorAll(".navbar-nav > li"));
    for (var y = 0; y < navUl.length; y++) {
      navUl[y].addEventListener("click", function () {
        checkLi(this);
      });
    }

    function checkLi(current) {
      navUl.forEach((el) => el.classList.remove("open"));
      current.classList.add("open");
    }
  }
  render() {
    return (
      <header className="site-header mo-left header">
        <div className="sticky-header  navbar-expand-lg">
          <div className=" bg-black  clearfix onepage">
            <div className="container  clearfix">
              <div className="logo-header mostion">
                <Link to={"./"}>
                  {/* <img src={require('./../../images/logo.png')} alt="" /> */}
                </Link>
              </div>
              <button
                className="navbar-toggler collapsed navicon justify-content-end"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div
                className="header-nav navbar-collapse collapse navbar myNavbar justify-content-end"
                id="navbarNavDropdown"
              >
                <ul className="nav navbar-nav">
                  <li>
                    <Link to={"#"}>
                      Home <i className="fa fa-chevron-down"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to={"./"} className="dez-page">
                          Home 1
                        </Link>
                      </li>
                      <li>
                        <Link to={"./index-2"} className="dez-page">
                          Home 2 <span className="new-page menu-new">New</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"#"}>
                      {" "}
                      Pages <i className="fa fa-chevron-down"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to={"./about"} className="dez-page">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to={"./listing"} className="dez-page">
                          Listing <span className="new-page menu-new">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"./hotel"}>Hotels</Link>
                      </li>
                      <li>
                        <Link to={"./booking"}>Booking Details</Link>
                      </li>
                      <li>
                        <Link to={"./place"}>Places</Link>
                      </li>
                      <li>
                        <Link to={"./packages"}>Packages</Link>
                      </li>
                      <li>
                        <Link to={"./error"} className="dez-page">
                          Error 404
                        </Link>
                      </li>
                      <li>
                        <Link to={"./login"} className="dez-page">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to={"./register"} className="dez-page">
                          Register
                        </Link>
                      </li>
                      <li>
                        <Link to={"./register2"} className="dez-page">
                          Register{" "}
                          <span className="new-page menu-new">New</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"#"}>
                      Hotels <i className="fa fa-chevron-down"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to={"./hotel"} className="dez-page">
                          Hotel
                        </Link>
                      </li>
                      <li>
                        <Link to={"./hotelbooking"} className="dez-page">
                          Hotel Booking
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"#"}>
                      Blog <i className="fa fa-chevron-down"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to={"./blogclassic"} className="dez-page">
                          Classic
                        </Link>
                      </li>
                      <li>
                        <Link to={"./blogclassicsidebar"} className="dez-page">
                          Classic Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to={"./bloggrid"} className="dez-page">
                          Detailed Grid
                        </Link>
                      </li>
                      <li>
                        <Link to={"./bloggridsidebar"} className="dez-page">
                          Detailed Grid Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to={"./blogleftsidebar"} className="dez-page">
                          Left Image Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to={"./blogdetails"} className="dez-page">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"#"}>
                      Our Portfolio <i className="fa fa-chevron-down"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to={"./portfolio2"} className="dez-page">
                          Portfolio Grid 2{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to={"portfolio-grid-3"} className="dez-page">
                          Portfolio Grid 3{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to={"portfolio-grid-4"} className="dez-page">
                          Portfolio Grid 4{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"./contact"} className="dez-page">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
