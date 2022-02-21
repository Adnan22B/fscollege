import React, {useState} from "react";

export default function PersonalInfo(props) {
 
  return (
    
        <section className="register-section pt-100 pb-20">
          <div className="container">
            <div className="register-box">
              <div className="sec-title text-center mb-30">
                <h2 className="title mb-10">Student Personal Info</h2>
              </div>
              <div className="styled-form">
                <div id="form-messages"></div>
                <form
                  id="contact-form"
                  method="post"
                  action="https://keenitsolutions.com/products/html/educavo/mailer.php"
                >
                  <div className="row clearfix">
                    <div className="form-group col-lg-12 mb-25">
                      <input
                        type="text"
                        value={props.studName}
                        name="StudentName"
                        placeholder="Full Name"
                        onChange={(e) => props.setStudName(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <input
                        type="text"
                        value={props.parentName}
                        name="parentName"
                        placeholder="Guardian Name"
                        onChange={(e) => props.setParentName(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <input
                        type="number"
                        value={props.phoneNo}
                        name="personalPhone"
                        placeholder="Mobile No:"
                        onChange={(e) => props.setPhoneNo(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <input
                        type="number"
                        value={props.homePhone}
                        name="HomePhone"
                        placeholder="Home Phone"
                        onChange={(e) => props.setHomePhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <input
                        type="email"
                        value={props.studEmail}
                        name="studentEmail"
                        placeholder="Email address "
                        onChange={(e) => props.setStudEmail(e.target.value)} 
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <textarea
                        type="email"
                        value={props.studAddress}
                        name="studentEmail"
                        placeholder="Complete  Address ... " 
                        onChange={(e) => props.setStudAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
       
  );
}
