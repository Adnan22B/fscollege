import React, {useState} from "react";

export default function PersonalInfo() {

  const [studName, setStudName] = useState("");
const [parentName, setParentName] = useState("");
const [phoneNo, setPhoneNo] = useState("");
const [homePhone, setHomePhone] = useState("");
const [studEmail, setStudEmail] = useState("");
const [studAddress, setStudAddress] = useState("");
  return (
    
        <section className="register-section pt-100 pb-20">
          <div className="container">
            <div className="register-box">
              <div className="sec-title text-center mb-30">
                <h2 className="title mb-10">Teacher Personal Info</h2>
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
                        id="Name"
                        name="StudentName"
                        placeholder="Full Name"
                        onChange={(e) => setStudName(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <input
                        type="text"
                        id="last"
                        name="parentName"
                        placeholder="Guardian Name"
                        onChange={(e) => setParentName(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <input
                        type="number"
                        id="personalPhone"
                        name="personalPhone"
                        placeholder="Mobile No:"
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <input
                        type="number"
                        id="parentPhone"
                        name="HomePhone"
                        placeholder="Home Phone"
                        onChange={(e) => setHomePhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <input
                        type="email"
                        id="email"
                        name="studentEmail"
                        placeholder="Email address "
                        onChange={(e) => setStudEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-group col-lg-12">
                      <textarea
                        type="email"
                        id="email"
                        name="studentEmail"
                        placeholder="Student Address ... "
                        onChange={(e) => setStudAddress(e.target.value)}
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
