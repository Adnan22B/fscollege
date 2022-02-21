import React, {useState} from "react";

export default function AcademicInfo() {
  const classes = ["Bsc", "MS", "Phd"];
  const bachelorGrades = ["9th","10th"];
  const masterGrades = ["1st Year","2nd Year"]; 
  const phdGrades = ["1st Year","2nd Year"]; 

const [checkClass, setCheckClass] = useState("")





  return (
    <section className="register-section pt-100 pb-20">
    <div className="container">
      <div className="register-box">
        <div className="sec-title text-center mb-30">
          <h2 className="title mb-10">Academic Info</h2>
        </div>
        <div className="styled-form">
          <div id="form-messages"></div>
          <form
            id="contact-form"
            method="post" 
          >
            <div className="row clearfix"> 
              <div className="form-group col-lg-6"> 
                <select className="form-control"  onChange ={(e) => setCheckClass(e.target.value)}>
                  <option value={"Not Selected"}>select Degree</option>
                  {classes.map((item) => 
                    <option  className = "form-control" >{item}</option>
                  )}
                </select>
              </div>
              <div className="form-group col-lg-6"> 
                <select className="form-control">
                  {console.log("The Class is ", checkClass)}
                  <option  value={"Not Selected"}>Specialization</option>
                  {checkClass == "Matric" || "Bsc" ? bachelorGrades.map((item) => 
                    <option value={item} >{item}</option>
                  ) : checkClass == "Fsc" ? bachelorGrades.map((item) => 
                  <option value={item} className = "form-control" >{item}</option>
                ) : false}
                </select>
              </div>
              <div className="form-group col-lg-12">
                <input
                  type="number"
                  id="parentPhone"
                  name="HomePhone"
                  placeholder="Total Marks"
                  required
                />
              </div>
              <div className="form-group col-lg-12">
                <input
                  type="number"
                  id="obt-marks"
                  name="studentEmail"
                  placeholder="Obtained Marks"
                  required
                />
              </div>
              <div className="form-group col-lg-12">
                <input
                  type="number"
                  id="obt-marks"
                  name="studentEmail"
                  placeholder="Experience in Years  "
                  required
                />
              </div>

              <div className="form-group col-lg-12">
                <textarea
                  type="number"
                  id="obt-marks"
                  name="studentEmail"
                  placeholder="About Your Self .."
                  required
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
