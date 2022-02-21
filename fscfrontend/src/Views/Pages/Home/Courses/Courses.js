import React from 'react'
import {Link} from "react-router-dom"
export default function Courses() {
  return (
    <> <div id="rs-categories" className="rs-categories home9-style event-bg pt-100 pb-100 md-pt-70 md-pb-70">
    <div className="container">
        <div className="sec-title3 text-center mb-45">
            <div className="sub-title yellow-color">Choose Your Path</div>
            <h2 className="title black-color">Study With Us</h2>
        </div>
        <div className="row">
            <div className="col-lg-4 md-mb-40">
                <div className="categories-items">
                    <div className="images-part">
                        <Link to="/register-as-student"><img src="assets/images/categories/home9/1.jpg" alt=""/></Link>
                    </div>
                    <div className="image-content">
                       <div className="effect-icon">
                           <i className="fa fa-graduation-cap"></i>
                       </div>
                       <div className="title">
                           <Link to="/register-as-student">Matric Stream</Link>
                       </div>
                       <div className="description">
                           <p>Arts, business, health, science and more, begin your journey with a program educavo.</p>
                       </div>
                        <div className="button-bottom">
                            <div className="button-effect">
                                <Link to="/register-as-student">Join Program</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="col-lg-4 md-mb-40">
                <div className="categories-items">
                    <div className="images-part">
                        <Link to="/register-as-student"><img src="assets/images/categories/home9/2.jpg" alt=""/></Link>
                    </div>
                    <div className="image-content">
                       <div className="effect-icon">
                           <i className="fa fa-graduation-cap"></i>
                       </div>
                       <div className="title">
                           <Link to="/register-as-student">Cambridge Stream</Link>
                       </div>
                       <div className="description">
                           <p>Arts, business, health, science and more, begin your journey with a program educavo.</p>
                       </div>
                        <div className="button-bottom">
                            <div className="button-effect">
                                <Link to="/register-as-student">Join Program</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="col-lg-4">
                <div className="categories-items">
                    <div className="images-part">
                        <Link to="/register-as-student"><img src="assets/images/categories/home9/3.jpg" alt="" /></Link>
                    </div>
                    <div className="image-content">
                       <div className="effect-icon">
                           <i className="fa fa-graduation-cap"></i>
                       </div>
                       <div className="title">
                           <Link to="/register-as-student">ISSB</Link>
                       </div>
                       <div className="description">
                           <p>Arts, business, health, science and more, begin your journey with a program educavo.</p>
                       </div>
                        <div className="button-bottom">
                            <div className="button-effect">
                                <Link to="/register-as-student">Join Program</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></>
  )
}
