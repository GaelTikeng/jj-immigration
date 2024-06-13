import Link from 'next/link';
import React from 'react';

export default function Coaching() {
  return (
    <section className="coaching-style-two p_relative sec-pad centred">
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-12.png)' }}></div>
      <div className="auto-container">
        <div className="sec-title centred mb_50">
          <span className="sub-title">OUR COACHING</span>
          <h2>Excel's successful Instructing <br />Center is migrate.</h2>
        </div>
        <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
                        <div className="coaching-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <div className="icon"><img src="assets/images/icons/icon-9.png" alt="" /></div>
                                    <span className="count-text">01</span>
                                </div>
                                <h3><Link href="coaching-details">TOEFL Coaching</Link></h3>
                                <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
                        <div className="coaching-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <div className="icon"><img src="assets/images/icons/icon-10.png" alt="" /></div>
                                    <span className="count-text">02</span>
                                </div>
                                <h3><Link href="coaching-details">Graduate Re-Exam</Link></h3>
                                <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
                        <div className="coaching-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <div className="icon"><img src="assets/images/icons/icon-11.png" alt="" /></div>
                                    <span className="count-text">03</span>
                                </div>
                                <h3><Link href="coaching-details">Scholastic Apti</Link></h3>
                                <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
                        <div className="coaching-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <div className="icon"><img src="assets/images/icons/icon-12.png" alt="" /></div>
                                    <span className="count-text">04</span>
                                </div>
                                <h3><Link href="coaching-details">Management Test</Link></h3>
                                <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-content">
                    <h5>Assisting with visa preparation for <Link href="index-2">eligibility exams</Link> is a service offered.</h5>
                    <div className="btn-box">
                        <Link href="index-2" className="theme-btn btn-one"><span>More Details</span></Link>
                    </div>
                </div>
      </div>
    </section>
  );
};

