import React from 'react';
import Link from 'next/link';
export default function Chooseus() {
  return (
    <section className="chooseus-section p_relative">
      <div className="auto-container">
        <div className="sec-title centred mb_60">
          <span className="sub-title">Why Choose Us</span>
          <h2>Offer custom-made services that <br />our customer needs.</h2>
        </div>
        <div className="row clearfix">
          {/* Repeat this block structure for each chooseus block */}
          <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
            <div className="chooseus-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="icon-box"><img src="assets/images/icons/icon-1.png" alt="" /></div>
                <h3><Link href="/">Direct Interviews</Link></h3>
                <p>Where did this incorrect belief that everyone dislikes praising happiness come from?</p>
                <div className="link-btn">
                  <Link href="/"><span>Read More</span><i className="icon-9"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                        <div className="chooseus-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-2.png" alt="" /></div>
                                <h3><Link href="/">Faster Processing</Link></h3>
                                <p>Where did this incorrect belief that everyone dislikes praising happiness come from?</p>
                                <div className="link-btn">
                                    <Link href="/"><span>Read More</span><i className="icon-9"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                        <div className="chooseus-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt="" /></div>
                                <h3><Link href="/">Visa Assistance</Link></h3>
                                <p>Where did this incorrect belief that everyone dislikes praising happiness come from?</p>
                                <div className="link-btn">
                                    <Link href="/"><span>Read More</span><i className="icon-9"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                        <div className="chooseus-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-4.png" alt="" /></div>
                                <h3><Link href="/">Cost-Effective</Link></h3>
                                <p>Where did this incorrect belief that everyone dislikes praising happiness come from?</p>
                                <div className="link-btn">
                                    <Link href="/"><span>Read More</span><i className="icon-9"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
      </div>
    </section>
  );
};

