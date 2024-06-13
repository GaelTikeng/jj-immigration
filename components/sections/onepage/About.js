import Link from 'next/link';
import React from 'react';

export default function about() {
  return (
    <section className="about-section p_relative" id="about">
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-6.png)' }}></div>
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_one">
              <div className="image-box p_relative d_block">
                <figure className="image image-1"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                <figure className="image image-2"><img src="assets/images/resource/about-2.jpg" alt="" /></figure>
                <figure className="certificate-box"><img src="assets/images/icons/certificate-1.png" alt="" /></figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box p_relative ml_110">
                <div className="sec-title mb_30">
                  <span className="sub-title">We are looking for</span>
                  <h2>We became an exam preparation authority.</h2>
                </div>
                <div className="text mb_30">
                  <p>Quisque dignissim enim diam, eget pulvinar ex viverra id. Nulla a lobortis lectus, id volutpat magna. Morbi consequat porttitor fermentum. Nulla vestibulum tincidunt viverra. Vestibulum accumsan molestie lorem, non laoreet massa. Duis at dui sem. Vivamus ut gravida libero. Proin porttitor viverra aliquet.</p>
                </div>
                <div className="list-inner mb_50 p_relative">
                  <ul className="list-style-one clearfix">
                    <li>Nulla nulla erat, gravida at leo</li>
                    <li>Amet minim mollit no duis deserut</li>
                    <li>dolor do amet sint Velit officia</li>
                  </ul>
                  <ul className="list-style-one clearfix">
                    <li>Scelerisque eleifend magna sit</li>
                    <li>Pellentesque pretium elit augue</li>
                    <li>Aenean in ipsum vel quam</li>
                  </ul>
                </div>
                <div className="btn-box">
                  <Link href="about" className="theme-btn btn-one"><span>More Details</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
