import React from "react";
import { Link } from "react-router-dom";
import Features from "./Features/Features";

export default function Banner() {
  return (
    <>
      <div id="rs-banner" class="rs-banner style8">
        <div class="container">
          <div class="banner-content">
            <div
              class="sl-sub-title wow bounceInLeft"
              data-wow-delay="300ms"
              data-wow-duration="2000ms"
            >
              Country's Leading College
            </div>
            <h1
              class="sl-title wow fadeInRight"
              data-wow-delay="600ms"
              data-wow-duration="2000ms"
            >
              Forces Science College In Pakistan
            </h1>
            <div
              class="sl-btn wow fadeInUp"
              data-wow-delay="900ms"
              data-wow-duration="2000ms"
            >
              <Link class="readon yellow-btn" to="/register-as-student">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
}
