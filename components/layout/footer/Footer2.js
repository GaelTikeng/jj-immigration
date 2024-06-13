'use client'
import Link from "next/link";
export default function Footer2() {
    return (
        <>           
            
            <footer className="main-footer style-two">
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
                        <div className="text">
                          <p>
                            Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum.Porta semper lacus cursus.
                          </p>
                          <Link href="index-2">Read More</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                      <div className="footer-widget links-widget">
                        <div className="widget-title">
                          <h3>Quick Links</h3>
                        </div>
                        <div className="widget-content">
                          <ul className="links-list clearfix">
                            <li>
                              <Link href="/">IELTS Coaching</Link>
                            </li>
                            <li>
                              <Link href="/">TOFEL Coaching</Link>
                            </li>
                            <li>
                              <Link href="/">PTE Coaching</Link>
                            </li>
                            <li>
                              <Link href="/">SAT Coaching</Link>
                            </li>
                            <li>
                              <Link href="/">GMAT Coaching</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                      <div className="footer-widget gallery-widget ml_30">
                        <div className="widget-title">
                          <h3>Recent Projects</h3>
                        </div>
                        <div className="widget-content">
                          <ul className="image-list clearfix">
                          <li>
                            <figure className="image-box">
                                <img src="assets/images/resource/footer-7.jpg" alt="" />
                                <Link href="assets/images/resource/footer-7.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-30"></i></Link>
                            </figure>
                        </li>
                        <li>
                            <figure className="image-box">
                                <img src="assets/images/resource/footer-8.jpg" alt="" />
                                <Link href="assets/images/resource/footer-8.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-30"></i></Link>
                            </figure>
                        </li>
                        <li>
                            <figure className="image-box">
                                <img src="assets/images/resource/footer-9.jpg" alt="" />
                                <Link href="assets/images/resource/footer-9.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-30"></i></Link>
                            </figure>
                        </li>
                        <li>
                            <figure className="image-box">
                                <img src="assets/images/resource/footer-10.jpg" alt="" />
                                <Link href="assets/images/resource/footer-10.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-30"></i></Link>
                            </figure>
                        </li>
                        <li>
                            <figure className="image-box">
                                <img src="assets/images/resource/footer-11.jpg" alt="" />
                                <Link href="assets/images/resource/footer-11.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-30"></i></Link>
                            </figure>
                        </li>
                        <li>
                            <figure className="image-box">
                                <img src="assets/images/resource/footer-12.jpg" alt="" />
                                <Link href="assets/images/resource/footer-12.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-30"></i></Link>
                            </figure>
                        </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                      <div className="footer-widget post-widget">
                        <div className="widget-title">
                          <h3>Trending Post</h3>
                        </div>
                        <div className="post-inner">
                          <div className="post">
                          <ul className="post-info clearfix">
                              <li><Link href="blog-details">Admin</Link></li>
                              <li>December 30, 2020</li>
                          </ul>
                          </div>
                          <div className="post">
                          <ul className="post-info clearfix">
                              <li><Link href="blog-details">Admin</Link></li>
                              <li>December 30, 2020</li>
                          </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-bottom">
                  <div className="copyright">
                    <p>
                      Copyright By &copy; <Link href="/">immigratie</Link> - 2024
                    </p>
                  </div>
                </div>
              </div>
            </footer>


        </>
    )
}
