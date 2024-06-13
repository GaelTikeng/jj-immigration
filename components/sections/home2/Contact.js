import React from 'react';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-37.png)' }}></div>
      <div className="auto-container">
        <div className="inner-container clearfix">
          <div className="content-box">
            <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/resource/contact-1.jpg)' }}></div>
            <div className="sec-title mb_30">
              <span className="sub-title">Let’s Connect</span>
              <h2>Get a Call From Experts</h2>
            </div>
            <div className="form-inner">
              <form action="index-2" method="post">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input type="text" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input type="email" name="email" placeholder="Email Address" required />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <input type="text" name="phone" placeholder="Phone Number" required />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <div className="message-btn">
                      <button type="submit" className="theme-btn btn-one"><span>Submit</span></button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="map-inner p_relative d_block">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
        </div>
      </div>
    </section>
  );
};

