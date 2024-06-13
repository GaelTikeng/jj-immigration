"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Blog Grid">
        <div>
          {/*sidebar */}
          <section className="sidebar-page-container blog-standard p_relative">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="blog-standard-content">
                    {/* Repeat for each blog post */}
                    <div className="news-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <Link href="blog-details">
                            <img src="assets/images/news/news-7.jpg" alt="" />
                          </Link>
                        </figure>
                        <div className="lower-content">
                          <ul className="post-info clearfix">
                            <li>
                              <i className="icon-27"></i>
                              <Link href="blog-details">Admin</Link>
                            </li>
                            <li>
                              <i className="icon-56"></i>Feb 6, 2022{" "}
                            </li>
                            <li>
                              <i className="icon-57"></i>
                              <Link href="blog-details">03 Comments</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link href="blog-details">
                              Project Concepts or Related Queries Should be
                            </Link>
                          </h3>
                          <p>
                            Nemo ipsam egestas volute turpis dolores and aliquam
                            quaerat in which toil and pain procure him some
                            great foresee the pain and trouble that are bound
                            not know how to pursue pleasure rationally.
                          </p>
                          <div className="link-btn">
                            <Link href="blog-details">
                              <span>Read More</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="news-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <Link href="blog-details">
                            <img src="assets/images/news/news-8.jpg" alt="" />
                          </Link>
                        </figure>
                        <div className="lower-content">
                          <ul className="post-info clearfix">
                            <li>
                              <i className="icon-27"></i>
                              <Link href="blog-details">Admin</Link>
                            </li>
                            <li>
                              <i className="icon-56"></i>Feb 5, 2022{" "}
                            </li>
                            <li>
                              <i className="icon-57"></i>
                              <Link href="blog-details">08 Comments</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link href="blog-details">
                              Customers Applying for Priority Visas.
                            </Link>
                          </h3>
                          <p>
                            Nemo ipsam egestas volute turpis dolores and aliquam
                            quaerat in which toil and pain procure him some
                            great foresee the pain and trouble that are bound
                            not know how to pursue pleasure rationally.
                          </p>
                          <div className="link-btn">
                            <Link href="blog-details">
                              <span>Read More</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="news-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <Link href="blog-details">
                            <img src="assets/images/news/news-9.jpg" alt="" />
                          </Link>
                        </figure>
                        <div className="lower-content">
                          <ul className="post-info clearfix">
                            <li>
                              <i className="icon-27"></i>
                              <Link href="blog-details">Admin</Link>
                            </li>
                            <li>
                              <i className="icon-56"></i>Feb 4, 2022{" "}
                            </li>
                            <li>
                              <i className="icon-57"></i>
                              <Link href="blog-details">02 Comments</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link href="blog-details">
                              Travelling to Australia for Tourism or Business?
                            </Link>
                          </h3>
                          <p>
                            Nemo ipsam egestas volute turpis dolores and aliquam
                            quaerat in which toil and pain procure him some
                            great foresee the pain and trouble that are bound
                            not know how to pursue pleasure rationally.
                          </p>
                          <div className="link-btn">
                            <Link href="blog-details">
                              <span>Read More</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pagination-wrapper pt_40">
                      <ul className="pagination">
                        <li>
                          <Link href="blog" className="current">
                            1
                          </Link>
                        </li>
                        <li>
                          <Link href="blog">2</Link>
                        </li>
                        <li>
                          <Link href="blog">3</Link>
                        </li>
                        <li>
                          <Link href="blog">
                            <i className="icon-58"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="blog">5</Link>
                        </li>
                        <li>
                          <Link href="blog">
                            <i className="icon-59"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="default-sidebar blog-sidebar ml_10">
                    {/* Sidebar widgets */}
                    {/* Search widget */}
                    <div className="sidebar-widget search-widget">
                      <div className="widget-title">
                        <h3>Search</h3>
                      </div>
                      <div className="search-form">
                        <form action="blog" method="post">
                          <div className="form-group">
                            <input
                              type="search"
                              name="search-field"
                              placeholder="Keyword ..."
                              required
                            />
                            <button type="submit">
                              <i className="icon-8"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* Category widget */}
                    <div className="sidebar-widget category-widget">
                      <div className="widget-title">
                        <h3>Search</h3>
                      </div>
                      <div className="widget-content">
                        <ul className="category-list-two clearfix">
                          <li>
                            <Link href="blog-details">Immigration</Link>
                          </li>
                          <li>
                            <Link href="blog-details">Application</Link>
                          </li>
                          <li>
                            <Link href="blog-details">Business Visa</Link>
                          </li>
                          <li>
                            <Link href="blog-details">Spouse/Family Visas</Link>
                          </li>
                          <li>
                            <Link href="blog-details">Working Visas</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Popular Post widget */}
                    <div className="sidebar-widget post-widget">
                      <div className="widget-title">
                        <h3>Popular Post</h3>
                      </div>
                      <div className="post-inner">
                        <div className="post">
                          <figure className="post-thumb">
                            <Link href="blog-details">
                              <img src="assets/images/news/post-1.jpg" alt="" />
                            </Link>
                          </figure>
                          <h5>
                            <Link href="blog-details">
                              Kickstart Your Visa ApprovalWith 4 Easy Steps
                            </Link>
                          </h5>
                          <span className="post-date">December 30, 2020</span>
                        </div>
                        <div className="post">
                          <figure className="post-thumb">
                            <Link href="blog-details">
                              <img src="assets/images/news/post-2.jpg" alt="" />
                            </Link>
                          </figure>
                          <h5>
                            <Link href="blog-details">
                              Customers Applying for Priority Visas.
                            </Link>
                          </h5>
                          <span className="post-date">December 25, 2020</span>
                        </div>
                        <div className="post">
                          <figure className="post-thumb">
                            <Link href="blog-details">
                              <img src="assets/images/news/post-3.jpg" alt="" />
                            </Link>
                          </figure>
                          <h5>
                            <Link href="blog-details">
                              Travelling to Australia for Tourism or Business?
                            </Link>
                          </h5>
                          <span className="post-date">December 22, 2020</span>
                        </div>
                      </div>
                    </div>
                    {/* Gallery widget */}
                    <div className="sidebar-widget gallery-widget">
                      <div className="widget-title">
                        <h3>Our Gallery</h3>
                      </div>
                      <div className="widget-content p_relative">
                        <ul className="image-list clearfix">
                          {/* Repeat for each gallery image */}
                          <li>
                            <figure className="image-box">
                              <Link
                                href="assets/images/news/gallery-1.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/images/news/gallery-1.jpg"
                                  alt=""
                                />
                              </Link>
                            </figure>
                          </li>
                          <li>
                            <figure className="image-box">
                              <Link
                                href="assets/images/news/gallery-2.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/images/news/gallery-2.jpg"
                                  alt=""
                                />
                              </Link>
                            </figure>
                          </li>
                          <li>
                            <figure className="image-box">
                              <Link
                                href="assets/images/news/gallery-3.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/images/news/gallery-3.jpg"
                                  alt=""
                                />
                              </Link>
                            </figure>
                          </li>
                          <li>
                            <figure className="image-box">
                              <Link
                                href="assets/images/news/gallery-4.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/images/news/gallery-4.jpg"
                                  alt=""
                                />
                              </Link>
                            </figure>
                          </li>
                          <li>
                            <figure className="image-box">
                              <Link
                                href="assets/images/news/gallery-5.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/images/news/gallery-5.jpg"
                                  alt=""
                                />
                              </Link>
                            </figure>
                          </li>
                          <li>
                            <figure className="image-box">
                              <Link
                                href="assets/images/news/gallery-6.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/images/news/gallery-6.jpg"
                                  alt=""
                                />
                              </Link>
                            </figure>
                          </li>
                          <li>
                            <figure className="image-box">
                              <Link
                                href="assets/images/news/gallery-7.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/images/news/gallery-7.jpg"
                                  alt=""
                                />
                              </Link>
                            </figure>
                          </li>
                          <li>
                            <figure className="image-box">
                              <Link
                                href="assets/images/news/gallery-8.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/images/news/gallery-8.jpg"
                                  alt=""
                                />
                              </Link>
                            </figure>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Travel widget */}
                    <div className="sidebar-widget travel-widget">
                      <div className="widget-content p_relative">
                        <figure className="image-box">
                          <img
                            src="assets/images/resource/travel-1.jpg"
                            alt=""
                          />
                        </figure>
                        <div className="content-box">
                          <h3>Travel Pass</h3>
                          <ul className="list-item clearfix">
                            <li>Application Form</li>
                            <li>Checklist</li>
                            <li>Guidelines</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Tags widget */}
                    <div className="sidebar-widget tags-widget">
                      <div className="widget-title">
                        <h3>Popular Tags</h3>
                      </div>
                      <div className="widget-content">
                        <ul className="tags-list clearfix">
                          <li>
                            <Link href="blog-details"># Agents</Link>
                          </li>
                          <li>
                            <Link href="blog-details"># Business</Link>
                          </li>
                          <li>
                            <Link href="blog-details"># Career</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* sidebar end */}
        </div>
      </Layout>
    </>
  );
}
