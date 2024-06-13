import Link from 'next/link';
import React from 'react';

export default function Coaching() {
  return (
    <section className="coaching-section sec-pad">
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-12.png)' }}></div>
      <div className="auto-container">
        <div className="sec-title mb_50">
          <span className="sub-title">HOW WE HELP CLIENTS</span>
          <h2>Your immigration class New <br />Orleans Saints deserves you.</h2>
        </div>
        <div className="row clearfix">
          {/* Coaching Block 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
            <div className="coaching-block-one">
              <div className="inner-box">
                <div className="image-box clearfix">
                  <figure className="image"><img src="assets/images/resource/coaching-1.jpg" alt="" /></figure>
                  <figure className="image"><img src="assets/images/resource/coaching-2.jpg" alt="" /></figure>
                </div>
                <div className="static-content">
                  <h3>Oet <br />Coaching</h3>
                  <div className="link"><Link href="coaching-details-3"><i className="icon-9"></i></Link></div>
                </div>
                <div className="overlay-content">
                  <h3><Link href="coaching-details-3">Oet Coaching</Link></h3>
                  <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna.</p>
                  <div className="link"><Link href="coaching-details-3"><i className="icon-9"></i></Link></div>
                </div>
              </div>
            </div>
          </div>
          {/* Coaching Block 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
            <div className="coaching-block-one">
              <div className="inner-box">
                <div className="image-box clearfix">
                  <figure className="image"><img src="assets/images/resource/coaching-3.jpg" alt="" /></figure>
                  <figure className="image"><img src="assets/images/resource/coaching-4.jpg" alt="" /></figure>
                </div>
                <div className="static-content">
                  <h3>Pte <br />Coaching</h3>
                  <div className="link"><Link href="coaching-details-2"><i className="icon-9"></i></Link></div>
                </div>
                <div className="overlay-content">
                  <h3><Link href="coaching-details-2">Pte Coaching</Link></h3>
                  <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna.</p>
                  <div className="link"><Link href="coaching-details-2"><i className="icon-9"></i></Link></div>
                </div>
              </div>
            </div>
          </div>
          {/* Coaching Block 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
            <div className="coaching-block-one">
              <div className="inner-box">
                <div className="image-box clearfix">
                  <figure className="image"><img src="assets/images/resource/coaching-5.jpg" alt="" /></figure>
                  <figure className="image"><img src="assets/images/resource/coaching-6.jpg" alt="" /></figure>
                </div>
                <div className="static-content">
                  <h3>Gre <br />Coaching</h3>
                  <div className="link"><Link href="coaching-details-4"><i className="icon-9"></i></Link></div>
                </div>
                <div className="overlay-content">
                  <h3><Link href="coaching-details-4">Gre Coaching</Link></h3>
                  <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna.</p>
                  <div className="link"><Link href="coaching-details-4"><i className="icon-9"></i></Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

