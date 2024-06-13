import Link from 'next/link';
import React from 'react';

export default function Help() {
  return (
    <section className="help-section p_relative">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-45.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-46.png)' }}></div>
        <div className="pattern-3" style={{ backgroundImage: 'url(assets/images/shape/shape-47.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="sec-title light mb_60">
          <span className="sub-title">HOW WE HELP CLIENTS</span>
          <h2>Follow the steps on the website <br />to apply for the visa online.</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon mb_18"><i className="icon-42"></i></div>
                  <span className="count-text">01</span>
                </div>
                <h3><Link href="index-3">Fill In The <br />Required Form</Link></h3>
                <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="count-text">02</span>
                  <div className="icon mt_18"><i className="icon-43"></i></div>
                </div>
                <h3><Link href="index-3">Submit All Your <br />Attested Documents</Link></h3>
                <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon mb_13"><i className="icon-44"></i></div>
                  <span className="count-text">03</span>
                </div>
                <h3><Link href="index-3">Get Ready To <br />Receive your Visa</Link></h3>
                <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

