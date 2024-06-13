'use client'
import Link from "next/link";
export default function Footer3() {
    return (
        <>           
            
            <footer className="main-footer style-five">
      <div className="auto-container">
        <div className="widget-section">
        <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget">
                                <figure className="footer-logo"><Link href="/"><img src="assets/images/footer-logo.png" alt="" /></Link></figure>
                                <div className="text">
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum.Porta semper lacus cursus.</p>
                                    <Link href="index-2">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget">
                                <div className="widget-title">
                                    <h3>Office Info</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="info-list clearfix">
                                        <li>
                                            <div className="icon-box"><i className="icon-29"></i></div>
                                            <p><Link href="tel:88123456987231">+88  12345   6987   231</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon-box"><i className="icon-1"></i></div>
                                            <p><Link href="mailto:info@example.com">info@example.com</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon-box"><i className="icon-2"></i></div>
                                            <p>380 St Kilda Road, Melbourne <br />VIC 3004, Australia</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>NewsLetter</h3>
                                </div>
                                <div className="widget-content">
                                    <div className="text mb_11">
                                        <p>Subscribe our newsletter to get our latest update & news</p>
                                    </div>
                                    <div className="form-inner mb_35">
                                        <form action="contact" method="post">
                                            <div className="form-group">
                                                <i className="icon-1"></i>
                                                <input type="email" name="email" placeholder="Enter your mail" required />
                                                <button type="submit" className="theme-btn">Subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget post-widget">
                                <div className="widget-title">
                                    <h3>Recent Post</h3>
                                </div>
                                <div className="post-inner">
                                    <div className="post">
                                        <figure className="post-thumb"><Link href="blog-details"><img src="assets/images/resource/footer-post-1.jpg" alt="" /></Link></figure>
                                        <ul className="post-info clearfix">
                                            <li><Link href="blog-details">Admin</Link></li>
                                            <li>December 30, 2020</li>
                                        </ul>
                                        <h4><Link href="blog-details">Make a proper salad with high proteins.</Link></h4>
                                    </div>
                                    <div className="post">
                                        <figure className="post-thumb"><Link href="blog-details"><img src="assets/images/resource/footer-post-2.jpg" alt="" /></Link></figure>
                                        <ul className="post-info clearfix">
                                            <li><Link href="blog-details">Admin</Link></li>
                                            <li>December 29, 2020</li>
                                        </ul>
                                        <h4><Link href="blog-details">Make a proper salad with high proteins.</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                <div className="copyright">
                    <p>Copyright By &copy; <Link href="/">immigratie</Link> - 2024</p>
                </div>
                </div>
            </div>
            </footer>


                </>
            )
        }
