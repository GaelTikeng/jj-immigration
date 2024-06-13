import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <section className="about-style-four p_relative">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-59.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-60.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_two">
              <div className="image-box">
                <div className="image-shape"></div>
                <figure className="image image-1"><img src="assets/images/resource/about-6.jpg" alt="" /></figure>
                <figure className="image image-2"><img src="assets/images/resource/about-7.jpg" alt="" /></figure>
                <div className="text-box">
                  <h2>20 <span>+</span></h2>
                  <h3>Years Experience</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_seven">
              <div className="content-box">
                <div className="sec-title mb_30">
                  <span className="sub-title">Who we are?</span>
                  <h2>Leading firm for immigration services.</h2>
                </div>
                <div className="text mb_45">
                  <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum. Porta semper lacus cursus. Cras molestie, tortor iddet sollicitudin tristique, dui dolor laoreet neque, tempus tristique mauris est sit ametstat ligula. Nunc dignissim elementum posuere. Praesent id ante sit amet neque blandituni posuere vitae id ipsum. Proin rutrum est enim, vel aliquam sapien vulputate sit amet. Integer sit amet finibus ex, nec mattis felis. In volutpat rutrum pellentesque. Maecenas ut orci pulvinar, malesuada ligula ac, facilisis eros.</p>
                </div>
                <div className="inner-box mb_45">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                      <div className="single-item">
                        <div className="icon-box"><img src="assets/images/icons/icon-13.png" alt="" /></div>
                        <h5>Overseas education and study visa consultants.</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                      <div className="single-item">
                        <div className="icon-box"><img src="assets/images/icons/icon-14.png" alt="" /></div>
                        <h5>Top-ranked universities admissions.</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-box">
                  <Link href="index-4" className="theme-btn btn-two"><span>More Details</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

