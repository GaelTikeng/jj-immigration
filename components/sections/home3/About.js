import Link from "next/link"
import React from 'react';

export default function About() {
    return (
        <>
           <section className="about-style-three p_relative">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-42.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-43.png)' }}></div>
      </div>
      <figure className="image-layer"><img src="assets/images/resource/men-2.png" alt="" /></figure>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-4 col-md-12 col-sm-12 content-column offset-lg-3">
            <div className="content_block_six">
              <div className="content-box mr_20">
                <div className="sec-title mb_20">
                  <span className="sub-title">Who we are?</span>
                  <h2>Leading firm for immigration services.</h2>
                </div>
                <div className="text mb_30">
                  <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum.Porta semper lacus cursus.</p>
                </div>
                <div className="inner-box mb_40">
                  <div className="single-item">
                    <div className="icon-box"><img src="assets/images/icons/icon-13.png" alt="" /></div>
                    <h5>Overseas education and study visa consultants.</h5>
                  </div>
                  <div className="single-item">
                    <div className="icon-box"><img src="assets/images/icons/icon-14.png" alt="" /></div>
                    <h5>Top-ranked universities guarantee admissions.</h5>
                  </div>
                </div>
                <div className="btn-box">
                  <Link href="about" className="theme-btn btn-two"><span>More Details</span></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 image-column">
            <div className="image-inner clearfix">
              <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-44.png)' }}></div>
              <div className="image-box">
                <figure className="image"><img src="assets/images/resource/about-3.jpg" alt="" /></figure>
              </div>
              <div className="image-box">
                <figure className="image"><img src="assets/images/resource/about-4.jpg" alt="" /></figure>
                <figure className="image"><img src="assets/images/resource/about-5.jpg" alt="" /></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
