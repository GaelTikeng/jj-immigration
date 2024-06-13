import Link from 'next/link';
import React from 'react';

export default function News() {
  return (
    <section className="news-section sec-pad" id="news">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-23.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-24.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="sec-title centred mb_50">
          <span className="sub-title">Article</span>
          <h2>World Immigration News & Updates</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-1.jpg" alt="" /></Link></figure>
                <div className="lower-content">
                  <ul className="post-info clearfix">
                    <li><i className="icon-27"></i><Link href="blog-details">By author</Link></li>
                    <li><i className="icon-28"></i>Feb 6, 2022 </li>
                  </ul>
                  <h3><Link href="blog-details">Unsatiable Entreaties May Collecting Power.</Link></h3>
                  <p>Where did this incorrect belief that everyone dislikes praising happiness come from.</p>
                  <div className="link-btn">
                    <Link href="blog-details"><span>Read More</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-2.jpg" alt="" /></Link></figure>
                <div className="lower-content">
                  <ul className="post-info clearfix">
                    <li><i className="icon-27"></i><Link href="blog-details">By author</Link></li>
                    <li><i className="icon-28"></i>Feb 5, 2022 </li>
                  </ul>
                  <h3><Link href="blog-details">Why You Should Plan Your 2022 Trip Abroad</Link></h3>
                  <p>Where did this incorrect belief that everyone dislikes praising happiness come from.</p>
                  <div className="link-btn">
                    <Link href="blog-details"><span>Read More</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-3.jpg" alt="" /></Link></figure>
                <div className="lower-content">
                  <ul className="post-info clearfix">
                    <li><i className="icon-27"></i><Link href="blog-details">By author</Link></li>
                    <li><i className="icon-28"></i>Feb 4, 2022 </li>
                  </ul>
                  <h3><Link href="blog-details">Going Digital Key to Small Business Success</Link></h3>
                  <p>Where did this incorrect belief that everyone dislikes praising happiness come from.</p>
                  <div className="link-btn">
                    <Link href="blog-details"><span>Read More</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

