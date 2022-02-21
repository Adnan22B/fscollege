import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
export default function Signup() {
  const [userFullName, setuserFullName] = useState("");
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  const handleClick =async (e) => {
      e.preventDefault()
    // userFullName != null || userFullName != "" &&
    await Axios.post("http://localhost:5000/adminSignup",{
        fullName: userFullName,
        userName: userName,
        userEmail: userEmail,
        password: userPassword,
        confirmPassword: confirmPassword
    })
      .then((response) => console.log("response", response))
      .catch((err) => console.log("err", err))

    };
  return (
    <>
      <div className="main-content">
        <div className="rs-breadcrumbs breadcrumbs-overlay">
          <div className="breadcrumbs-img">
            <img
              src="assets/images/breadcrumbs/2.jpg"
              alt="Breadcrumbs Image"
            />
          </div>
          <div className="breadcrumbs-text white-color">
            <h1 className="page-title">Register</h1>
            <ul>
              <li>
                <Link className="active" tp="index.html">
                  Home
                </Link>
              </li>
              <li>Register</li>
            </ul>
          </div>
        </div>
        <section className="register-section pt-100 pb-100">
          <div className="container">
            <div className="register-box">
              <div className="sec-title text-center mb-30">
                <h2 className="title mb-10">Create New Account</h2>
              </div>
              <div className="styled-form">
                <div id="form-messages"></div>
                <form
                  id="contact-form" 
                >
                  <div className="row clearfix">
                    <div className="form-group col-lg-12 mb-25">
                      <input
                        type="text"
                        id="Name"
                        name="Full Name"
                        onChange={(e) => setuserFullName(e.target.value)}
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e) => setuserEmail(e.target.value)}
                        placeholder="Email address "
                        required
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <input
                        type="text"
                        id="user"
                        name="phone_number"
                        onChange={(e) => setuserName(e.target.value)}
                        placeholder="Username"
                        required
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <input
                        type="text"
                        id="puser"
                        name="Password"
                        onChange={(e) => setuserPassword(e.target.value)}
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <input
                        type="text"
                        id="Confirm"
                        name="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        required
                      />
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <div className="row clearfix">
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                          <div className="radio-box">
                            <input
                              type="radio"
                              name="remember-password"
                              id="type-1"
                            />
                          </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                          <div className="radio-box">
                            <input
                              type="radio"
                              name="remember-password"
                              id="type-2"
                            />
                          </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                          <div className="radio-box">
                            <input
                              type="radio"
                              name="remember-password"
                              id="type-3"
                            />
                          </div>
                        </div>
                        <div className="column col-lg-12 col-md-12 col-sm-12">
                          <div className="check-box">
                            <input
                              type="checkbox"
                              name="remember-password"
                              id="type-4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group col-lg-12 col-md-12 col-sm-12 text-center">
                      <button
                        className="readon register-btn"
                        onClick={(e) =>  handleClick(e)}
                      >
                        <span className="txt">Sign Up</span>
                      </button>
                    </div>

                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <div className="users">
                        Already have an account?{" "}
                        <Link t0="login.html">Sign In</Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>{" "}
    </>
  );
}
