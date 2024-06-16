"use client";
import Link from "next/link";
import Layout from "../../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Contuct Us">
        <div>
          {/* Contact  Section  */}
          <section className="contact-style-two p_relative">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <div className="sec-title mb_30">
                      <span className="sub-title">Quick Contact</span>
                      <h2>
                        Have Questions? <br />
                        Don't Hesitate to Contact Us
                      </h2>
                    </div>
                    <div className="text mb_30">
                      <p>
                        Sed gravida nisl a porta tincidunt. Integer aliquam nisi
                        sit amet magna suscipit, fermentum mattis erat
                        rutrum.Porta semper lacus cursus, feugiat primis ultrice
                        and ligula risus auctor tempus feugiat dolor and lacinia
                      </p>
                    </div>
                    <div className="location-box pb_40 mb_110">
                      <div className="icon-box">
                        <i className="icon-61"></i>
                      </div>
                      <h3>Location</h3>
                      <p>
                        141, First Floor, 12 St Roots Terrace, Los Angeles 90010
                        Unitd States of America.
                      </p>
                    </div>
                    <div className="inner-box">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="icon-62"></i>
                            </div>
                            <h3>Quick Contact</h3>
                            <ul className="info-list clearfix">
                              <li>
                                <h5>Phone:</h5>
                                <p>
                                  <Link href="tel:18963648018">
                                    +1 89-636-48018
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <h5>Email:</h5>
                                <p>
                                  <Link href="mailto:yourmail@info.com">
                                    yourmail@info.com
                                  </Link>
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="icon-63"></i>
                            </div>
                            <h3>Opening Hrs</h3>
                            <ul className="info-list clearfix">
                              <li>
                                <h5>Mon - Friday:</h5>
                                <p>09.00 am to 07.00 pm</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                  <div className="form-inner">
                    <div className="sec-title mb_40">
                      <span className="sub-title">Let’s Connect</span>
                      <h2>Send Your Message</h2>
                      <p>
                        Sed gravida nisl a porta tincidunt. Integer aliquam nisi
                        sit amet magna suscipit, fermentum mattis erat
                        rutrum.Porta semper.
                      </p>
                    </div>
                    <form
                      method="post"
                      action="sendemail.php"
                      id="contact-form"
                    >
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="username"
                            placeholder="Name"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required=""
                          />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea
                            name="message"
                            placeholder="Your message here"
                          ></textarea>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <div className="custom-controls-stacked pb_20">
                            <label className="custom-control material-checkbox">
                              <input
                                type="checkbox"
                                className="material-control-input"
                              />
                              <span className="material-control-indicator"></span>
                              <span className="description">
                                Save my name, email, and website in this browser
                                for the next time I comment.
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button
                            type="submit"
                            className="theme-btn btn-two"
                            name="submit-form"
                          >
                            <span>Message</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Contact  Section End */}
          {/* Google Map Section */}
          <section className="google-map-section p_relative">
            {/*Map Outer*/}
            <div className="auto-container">
              <div className="map-inner p_relative d_block">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s"
                  height={570}
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>
          {/* Google Map Section End */}
        </div>
      </Layout>
    </>
  );
}
