import React from "react";
import {Link , Route } from "react-router-dom"
export default function Header() {
  return (
   <Route>
       <div className="full-width-header home8-style4 home9">
      <header id="rs-header" className="rs-header">
        <div className="topbar-area home9-topbar">
          <div className="container">
            <div className="row y-middle">
              <div className="col-md-7">
                <ul className="topbar-contact">
                  <li>
                    <i className="flaticon-email"></i>
                    <Link to="/">support@fscollege.com</Link>
                  </li>
                  <li>
                    <i className="flaticon-phone"></i>
                    0092 300 123 45 69
                  </li>
                </ul>
              </div>
              <div className="col-md-5 text-right">
                <ul className="topbar-right">
                  <li className="btn-part">
                    <Link className="apply-btn" to="/apply-now">
                      Apply Now
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-area menu-sticky">
          <div className="container">
            <div className="row y-middle">
              <div className="col-lg-2">
                <div className="logo-cat-wrap">
                  <div className="logo-part">
                    <Link to="/">
                      <img
                        className="normal-logo"
                        src="assets/images/logo-yellow.png"
                        alt=""
                      />
                      <img
                        className="sticky-logo"
                        src="assets/images/logo-yellow2.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 text-right">
                <div className="rs-menu-area">
                  <div className="main-menu">
                    <div className="mobile-menu">
                      <Link className="rs-menu-toggle" to ="/">
                        <i className="fa fa-bars"></i>
                      </Link>
                    </div>
                    <nav className="rs-menu">
                      <ul className="nav-menu">
                        <li className=" ">
                          {" "}
                          <Link to="/">Home</Link>
                        </li>
                        <li className=" ">
                          {" "}
                          <Link to="/about-us">About</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="/admin-sign-up">Register</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/register-as-teacher">As Teacher</Link>
                            </li>
                            <li className="menu-item-has-children">
                              <Link to="/register-as-student">As Student</Link> 
                            </li> 
                          </ul>
                        </li>
                        <li className=" ">
                          {" "}
                          <Link to="/all-posts">Blogs</Link>
                        </li>
                        <li className=" ">
                          {" "}
                          <Link to="/contact-us">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div> 
   </Route>
  );
}
