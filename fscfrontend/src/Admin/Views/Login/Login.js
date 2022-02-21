import Axios from "axios";
import React, { useState } from "react";
import BlogListing from "../Blogs/BlogListing/BlogListing";
export default function Login() {
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleClick = () => {
    Axios.get("http://localhost:5000/login/:email/:password", {
      email: userEmail,
      password: userPassword
    })
      .then((response) => console.log(response))
      .catch((err) => console.log("err", err));
  };
  return (
    <div>
      <div className="rs-login pt-100 pb-100 md-pt-70 md-pb-70">
        <div className="container">
          <div className="noticed">
            <div className="main-part">
              <div className="method-account">
                <h2 className="login">Login</h2>
                <form>
                  <input
                    type="email"
                    name="E-mail"
                    placeholder="E-mail"
                    required=""
                    onChange={(e) => setuserEmail(e.target.value)}

                  />
                  <input
                    type="text"
                    name="text"
                    placeholder="Password"
                    required=""
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                  <button
                    type="submit"
                    onClick={handleClick}
                    className="readon submit-btn"
                  >
                    login
                  </button>
                  <div className="last-password">
                    <p>
                      Not registered? <a href="#">Create an account</a>
                    </p>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
