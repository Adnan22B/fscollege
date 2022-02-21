import React, { useState } from "react";
import AcademicInfo from "./AcademicInfo";
import PersonalInfo from "./PersonalInfo";

export default function Registration() {
  const [step, setstep] = useState(1);
  const forwardStep = () => {
    setstep(step + 1);
  };

  const backwardStep = () => {
    return setstep(step - 1);
  }; 

  const validate = () => {
    const inputFields = document.getElementsByTagName('input');

  }
  const formsSteps = [PersonalInfo, AcademicInfo];
  return (
    <div className="main-content">
      <form onSubmit={(e) => e.preventDefault()}>
      <div className="rs-breadcrumbs breadcrumbs-overlay">
        <div className="breadcrumbs-img">
          <img src="assets/images/breadcrumbs/2.jpg" alt="Breadcrumbs Image" />
        </div>
        <div className="breadcrumbs-text white-color">
          <h1 className="page-title">Register</h1>
          <ul>
            <li>
              <a className="active" href="index.html">
                Home
              </a>
            </li>
            <li>Register</li>
          </ul>
        </div>
      </div> 
      {step === 1 ? <PersonalInfo /> : step === 2 ?  <AcademicInfo /> : undefined  }
      

      <div className="row  d-flex align-items-center justify-content-center w-100 ">
        <div className="form-group col-lg-5 col-md-5 col-xs-12 text-center">
         {step ===1 ?  
         <button 
         type="button" 
         onClick={forwardStep}
            className="mr-5 ml-5 readon register-btn"
          >
            <span className="txt">Next</span>
          </button>
         :<div>
             <button 
         onClick={backwardStep}
         className="mr-5 ml-5 readon register-btn"
       >
         <span className="txt">Back</span>
       </button> 

       <button  
         className="mr-5 ml-5 readon register-btn"
       >
         <span className="txt">Submit</span>
       </button>
            </div> }


        </div>
      </div>
      {console.log('step is :', step)}
      </form>
    </div>
  );
}
