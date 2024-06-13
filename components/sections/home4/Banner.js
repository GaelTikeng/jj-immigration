'use client'
import React, { useState } from 'react';
import Link from "next/link"
import ModalVideo from 'react-modal-video'
export default function Banner()  {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <section className="banner-style-four p_relative">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-55.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-56.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box pr_50">
              <div className="sec-title">
                <span className="sub-title">Visa Categories</span>
                <h2>A modern immigration firm with a <span>principled</span> attitude.</h2>
              </div>
              <p>MCS has been recruiting and prepping talented professionals for over twenty years. We provide a unique value proposition to both experienced financial advisors, as well as beings who want to break into the industry.</p>
              <div className="btn-box">
                <Link href="index-4" className="theme-btn btn-two"><span>More Details</span></Link>
                <a onClick={() => setOpen(true)} className="video-btn lightbox-image"><i className="icon-36"></i>Watch The Video</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image-box">
              <figure className="image image-1"><img src="assets/images/banner/banner-img-1.jpg" alt="" /></figure>
              <figure className="image image-2 wow slideInRight animated" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="assets/images/banner/banner-img-3.png" alt="" /></figure>
              <div className="text-box">
                <div className="icon-box"><i className="icon-31"></i></div>
                <span>Any Questions? Call us</span>
                <h3><Link href="tel:12345678900">(+12) 34567 8900</Link></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="nfP5N9Yc72A" onClose={() => setOpen(false)} />
    </>
    );
};

