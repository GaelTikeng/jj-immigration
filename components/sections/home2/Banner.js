'use client'
import Link from "next/link";
import React from 'react';
export default function Banner() {
  return (
    <section className="banner-style-two p_relative">
    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-1.jpg)" }}></div>
    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-26.png)" }}></div>
    <div className="auto-container">
      <div className="content-box p_relative d_block">
        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}></div>
        <h2>Study In <span>Recognized</span> Universities!...</h2>
        <p>MCS has been recruiting and prepping talented professionals for over twenty years. We provide a unique value proposition to both experienced financial advisors, as well as beings who want to break into the industry.</p>
        <a href="index-2" className="theme-btn btn-one"><span>More Details</span></a>
      </div>
    </div>
  </section>
  );
};

