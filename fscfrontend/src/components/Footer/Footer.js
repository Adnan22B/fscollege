import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className="rs-newsletter style1 event2-bg yellow-color mb--90 sm-mb-0 sm-pb-70">
                <div className="container">
                    <div className="newsletter-wrap">
                      <div className="row y-middle">
                          <div className="col-lg-6 col-md-12 md-mb-30">
                            <div className="content-part">
                                <div className="sec-title">
                                    <div className="title-icon md-mb-15">
                                        <img src="assets/images/newsletter2.png" alt="images"/>
                                    </div>
                                    <h2 className="title mb-0 white-color">Subscribe to Newsletter</h2>
                                </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                              <form className="newsletter-form">
                                  <input type="email" name="email" placeholder="Enter Your Email" required="" />
                                  <button type="submit">Submit</button>
                              </form>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
            <footer id="rs-footer" className="rs-footer home9-style">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
                            <h3 className="widget-title">About</h3>
                              <div className="textwidget white-color pr-60 md-pr-15">
                                  <p>Boys and Girls come join us on this exciting journey of knowledge and self discovery basing on our motto “ Know Thy Self” I wish you a rewarding time at FS-College</p>
                              </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
                            <h3 className="widget-title">Address</h3>
                            <ul className="address-widget">
                                <li>
                                    <i className="flaticon-location"></i>
                                    <div className="desc">F-783 6th Rd, Block F New Katarian Satellite Town, Rawalpindi</div>
                                </li>
                                <li>
                                    <i className="flaticon-call"></i>
                                    <div className="desc">
                                       <a href="tel:(+880)155-69569">(+92)300-123 45 67</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-email"></i>
                                    <div className="desc">
                                        <a href="mailto:support@rstheme.com">support@fscollege.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 pl-50 md-pl-15 footer-widget md-mb-50">
                            <h3 className="widget-title">Courses</h3>
                            <ul className="site-map">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about-us">About</a></li>
                                <li><a href="/register-as-student">Register</a></li>
                                <li><a href="/404">FAQ's</a></li>
                                <li><a href="/all-posts">Blogs</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
                            <h3 className="widget-title">Recent Posts</h3>
                            <div className="recent-post mb-20">
                                <div className="post-img">
                                    <img src="assets/images/footer/1.jpg" alt=""/>
                                </div>
                                <div className="post-item">
                                    <div className="post-desc">
                                        <a href="#">University while the lovely valley team work</a>
                                    </div>
                                    <span className="post-date">
                                        <i className="fa fa-calendar"></i>
                                        September 20, 2020
                                    </span>
                                </div>
                            </div> 
                            <div className="recent-post mb-20 md-pb-0">
                                <div className="post-img">
                                    <img src="assets/images/footer/2.jpg" alt=""/>
                                </div>
                                <div className="post-item">
                                    <div className="post-desc">
                                        <a href="#">High school program starting soon 2021</a>
                                    </div>
                                    <span className="post-date">
                                       <i className="fa fa-calendar-check-o"></i>
                                        September 14, 2020
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">                    
                    <div className="row y-middle">
                        <div className="col-lg-4 md-mb-20">
                            <div className="footer-logo md-text-center">
                                <a href="index.html"><img src="assets/images/logo-yellow.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 md-mb-20">
                            <div className="copyright text-center md-text-left">
                                <p>&copy; 2020 All Rights Reserved by . Developed By <a href="http://Fsccollege.com/">Fscollege</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 text-right md-text-left">
                            <ul className="footer-social">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


        <div id="scrollUp" className="yellow-color">
            <i className="fa fa-angle-up"></i>
        </div> 
        <div aria-hidden="true" className="modal fade search-modal" role="dialog" >
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span className="flaticon-cross"></span>
            </button>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="search-block clearfix">
                        <form>
                            <div className="form-group">
                                <input className="form-control" placeholder="Search Here..." type="text" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div id="scrollUp" className="orange-color">
            <i className="fa fa-angle-up"></i>
        </div>

    </div>
  )
}
