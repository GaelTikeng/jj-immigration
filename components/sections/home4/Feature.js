'use client'
import Link from "next/link";
import React from 'react';
export default function Feature() {
    return (
        <section className="feature-style-two sec-pad centred">
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-57.png)' }}></div>
      <div className="auto-container">
        <div className="sec-title centred mb_60">
          <span className="sub-title">Featuret</span>
          <h2>Provide the Best Consulting in <br />This Industry</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-17"></i></div>
                <h3><Link href="index-4">Visa</Link></h3>
                <p>Sed gravida nisl a porta tincidunt. Integertheoo aliquam.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-18"></i></div>
                <h3><Link href="index-4">Passport</Link></h3>
                <p>Sed gravida nisl a porta tincidunt. Integertheoo aliquam.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-19"></i></div>
                <h3><Link href="index-4">Immigration</Link></h3>
                <p>Sed gravida nisl a porta tincidunt. Integertheoo aliquam.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-20"></i></div>
                <h3><Link href="index-4">Translation</Link></h3>
                <p>Sed gravida nisl a porta tincidunt. Integertheoo aliquam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

