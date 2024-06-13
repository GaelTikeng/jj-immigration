"use client";
import Link from "next/link";
export default function Footer1() {
  return (
    <>
      <footer className="main-footer" id="footer">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}
        ></div>
        <div className="auto-container">
          <div className="widget-section">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link href="/">
                      <img src="assets/images/footer-logo.png" alt="" />
                    </Link>
                  </figure>
                  <div className="text mb_25">
                    <p>
                      Sed gravida nisl a porta tincidunt.
                    </p>
                  </div>
                  <ul className="info clearfix mb_30">
                    <li>
                      <i className="icon-29"></i>
                      <Link href="tel:+1 581-305-4090">+1 581-305-4090</Link>
                    </li>
                    <li>
                      <i className="icon-1"></i>
                      <Link href="mailto:jjinternationalservcice@gmail.com">
                        jjinternationalservcice@gmail.com
                      </Link>
                    </li>
                    <li>
                      <i className="icon-2"></i>152 rue Vallières Val-d'Or (Qc)
                      J9P 4L3
                    </li>
                  </ul>
                  <ul className="social-links clearfix">
                    <li>
                      <Link
                        target="_blanck"
                        href="https://www.facebook.com/profile.php?id=61557544078696&mibextid=ZbWKwL&_rdc=2&_rdr"
                      >
                        <i className="icon-4"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="icon-5"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="icon-6"></i>
                      </Link>
                    </li>
                    {/* <li><Link href="/"><i className="icon-7"></i></Link></li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Explore</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/">Employment & Jobs</Link>
                      </li>
                      <li>
                        <Link href="/">Government & Elections</Link>
                      </li>
                      <li>
                        <Link href="/">Real Estate & Buildings</Link>
                      </li>
                      <li>
                        <Link href="/">Health & Medical</Link>
                      </li>
                      <li>
                        <Link href="/">Transport & Traffic</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/">Administration</Link>
                      </li>
                      <li>
                        <Link href="/">Fire Services</Link>
                      </li>
                      <li>
                        <Link href="/">Business</Link>
                      </li>
                      <li>
                        <Link href="/">Taxation</Link>
                      </li>
                      <li>
                        <Link href="/">Circular’s And Go’s</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget gallery-widget">
                  <div className="widget-title">
                    <h3>Recent Projects</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="image-list clearfix">
                      <li>
                        <figure className="image-box">
                          <img
                            src="assets/images/resource/footer-1.jpg"
                            alt=""
                          />
                          <Link
                            href="assets/images/resource/footer-1.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <i className="icon-30"></i>
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <img
                            src="assets/images/resource/footer-2.jpg"
                            alt=""
                          />
                          <Link
                            href="assets/images/resource/footer-2.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <i className="icon-30"></i>
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <img
                            src="assets/images/resource/footer-3.jpg"
                            alt=""
                          />
                          <Link
                            href="assets/images/resource/footer-3.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <i className="icon-30"></i>
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <img
                            src="assets/images/resource/footer-4.jpg"
                            alt=""
                          />
                          <Link
                            href="assets/images/resource/footer-4.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <i className="icon-30"></i>
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <img
                            src="assets/images/resource/footer-5.jpg"
                            alt=""
                          />
                          <Link
                            href="assets/images/resource/footer-5.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <i className="icon-30"></i>
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <img
                            src="assets/images/resource/footer-6.jpg"
                            alt=""
                          />
                          <Link
                            href="assets/images/resource/footer-6.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <i className="icon-30"></i>
                          </Link>
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright">
              <p>
                Copyright By &copy; <Link href="/">Rebase dev</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
