import React from 'react'
import { Link } from 'react-router-dom'

export default function ApplyNow() {
  return (
    <div className='main-content'>  
     <div className="rs-breadcrumbs breadcrumbs-overlay">
        <div className="breadcrumbs-img">
          <img src="assets/images/breadcrumbs/2.jpg" alt="Breadcrumbs Image" />
        </div>
        <div className="breadcrumbs-text white-color">
          <h1 className="page-title">Apply Now</h1>
          <ul>
            <li>
              <a className="active" href="index.html">
                Home
              </a>
            </li>
            <li>Apply Now</li>
          </ul>
        </div>
      </div> 
    <div id="rs-blog" className="rs-blog home9-style event2-bg pt-94 pb-100 md-pt-64 md-pb-70">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 lg-pl-0">
                <div className="sec-title3 mb-50 md-mb-30">
                    <div className="sub-title yellow-color">Apply Today</div>
                    <h2 className="title black-color">Apply Today</h2>
                </div>
                <Link to ="/register-as-student">
                <div className="events-short-top mb-30 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="2000ms"> 
                    <div className="content-part">
                        <div className="categorie">
                            <a href="/register-as-student">Student</a>
                        </div>
                        <h3 className="title"><a href="#">Become a Student of our college</a></h3>
                        <p className="txt">Educavo Events Description Lorem ipsum dolor sit amet, consectetuer...</p>
                    </div>
                </div> 
                </Link>
            </div>
            <div className="col-lg-6 lg-pl-0">
               <Link to = "/register-as-teacher">
               <div className="sec-title3 mb-135 md-mb-30"> 
                </div>
                <div className="events-short-top mb-30 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="2000ms"> 
                    <div className="content-part">
                        <div className="categorie">
                            <a href="/register-as-teacher">Teacher</a>
                        </div>
                        <h3 className="title"><a href="#">Become a hounourable Teacher of our college</a></h3>
                        <p className="txt">Educavo Events Description Lorem ipsum dolor sit amet, consectetuer...</p>
                    </div>
                </div> 
                
               </Link>
            </div>
        </div>
    </div>
</div></div>
  )
}
