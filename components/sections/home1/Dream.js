import Link from 'next/link';
import React from 'react';

export default function Dream() {
  return (
    <section className="dream-section p_relative">
      <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/dream-bg.jpg)' }}></div>
      <div className="pattern-layer-2" style={{ backgroundImage: 'url(assets/images/shape/shape-9.png)' }}></div>
      <figure className="image-layer"><img src="assets/images/resource/women-1.png" alt="" /></figure>
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-8.png)' }}></div>
      <div className="auto-container">
        <div className="content_block_two">
          <div className="content-box p_relative d_block">
            <div className="sec-title light mb_20">
              <span className="sub-title">Reach Your Dream</span>
              <h2>Get the Right Help</h2>
            </div>
            <div className="text mb_25">
              <p>Where did this incorrect belief that everyone dislikes praising happiness come from? Explain to me how this erroneous theory ended up being devised.</p>
            </div>
            <ul className="list-item p_relative clearfix">
              <li><Link href="/">1. Entering & Leaving From Country <i className="icon-9"></i></Link></li>
              <li><Link href="/">2. Help & Support <i className="icon-9"></i></Link></li>
              <li><Link href="/">3. Country Citizenship <i className="icon-9"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

