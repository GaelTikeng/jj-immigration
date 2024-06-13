import Link from 'next/link';
import React from 'react';

export default function Team() {
  return (
    <section className="team-section home_4 p_relative centred">
      <div className="pattern-layer">
        <div className="pattern-4" style={{ backgroundImage: 'url(assets/images/shape/shape-64.png)' }}></div>
        <div className="pattern-5" style={{ backgroundImage: 'url(assets/images/shape/shape-65.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <span className="sub-title">Expert Team Members</span>
          <h2>Our Team at Your Service</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 team-block">
          <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/team/team-1.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <div className="share-box">
                                        <div className="share-icon"><i className="icon-26"></i></div>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/"><i className="icon-7"></i></Link></li>
                                            <li><Link href="/"><i className="icon-6"></i></Link></li>
                                            <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        </ul>
                                    </div>
                                    <h3><Link href="team-details">Roman Frederick</Link></h3>
                                    <span className="designation">Regional Manager</span>
                                </div>
                            </div>
                        </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 team-block">
          <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/team/team-2.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <div className="share-box">
                                        <div className="share-icon"><i className="icon-26"></i></div>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/"><i className="icon-7"></i></Link></li>
                                            <li><Link href="/"><i className="icon-6"></i></Link></li>
                                            <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        </ul>
                                    </div>
                                    <h3><Link href="team-details">Jane Cooper</Link></h3>
                                    <span className="designation">Medical Assistant</span>
                                </div>
                            </div>
                        </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 team-block">
          <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/team/team-3.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <div className="share-box">
                                        <div className="share-icon"><i className="icon-26"></i></div>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/"><i className="icon-7"></i></Link></li>
                                            <li><Link href="/"><i className="icon-6"></i></Link></li>
                                            <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        </ul>
                                    </div>
                                    <h3><Link href="team-details">Esther Howard</Link></h3>
                                    <span className="designation">President of Sales</span>
                                </div>
                            </div>
                        </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 team-block">
          <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/team/team-4.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <div className="share-box">
                                        <div className="share-icon"><i className="icon-26"></i></div>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/"><i className="icon-7"></i></Link></li>
                                            <li><Link href="/"><i className="icon-6"></i></Link></li>
                                            <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        </ul>
                                    </div>
                                    <h3><Link href="team-details">Jenny Wilson</Link></h3>
                                    <span className="designation">Marketing Coordinator</span>
                                </div>
                            </div>
                        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

