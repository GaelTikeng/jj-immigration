'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Team Details">
                {/* sidebar-page-container */}
                <section className="sidebar-page-container blog-standard p_relative">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-8 col-md-12 col-sm-12 content-side">
          <div className="blog-details-content">
                            <div className="content-one mb_40">
                                <figure className="image-box"><img src="assets/images/news/news-10.jpg" alt="" /></figure>
                                <ul className="post-info clearfix">
                                    <li><i className="icon-27"></i><Link href="blog-details">Admin</Link></li>
                                    <li><i className="icon-56"></i>Feb 6, 2022 </li>
                                    <li><i className="icon-57"></i><Link href="blog-details">03 Comments</Link></li>
                                </ul>
                                <div className="text">
                                    <p> Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget. Vivamus venenatis turpis lacinia, congue massa in, accumsan orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vestibulum id risus sit amet faucibus. Vestibulum sodales lacus eros, sed maximus sapien mollis ultrices. In odio mi, scelerisque a libero et, pulvinar pulvinar enim. Etiam at volutpat augue, eu hendrerit nunc. Sed eleifend risus diam, quis iaculis elit imperdiet sit amet. Suspendisse scelerisque eros odio, sed malesuada felis semper eu. Fusce laoreet justo ac risus feugiat venenatis. Curabitur imperdiet efficitur feugiat. Curabitur lacinia rhoncus sapien sit amet pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ut velit ut enim porta pellentesque vel vel ex. Pellentesque sollicitudin ac tortor vel euismod.</p>
                                    <p>Donec eu volutpat dolor. Ut aliquam nisi tincidunt urna sollicitudin ornare. Etiam sagittis faucibus eros imperdiet tincidunt. Sed interdum posuere gravida. Sed at aliquet sapien.  nec, auctor in odio.</p>
                                    <h3>Semper lacus cursus porta, feugiat primis</h3>
                                    <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget. Vivamus venenatis turpis lacinia, congue massa in, accumsan orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vestibulum id risus sit amet faucibus. Vestibulum sodales lacus eros, sed maximus sapien mollis ultrices. In odio mi, scelerisque a libero et, pulvinar pulvinar enim. . </p>
                                    <ul className="list-item clearfix">
                                        <li>Phasellus tempor sapien eu velit porta egestas posuere a turpis.</li>
                                        <li>Aliquam blandit tellus lobortis mollis faucibus.</li>
                                        <li>Integer mollis sapien vitae magna pellentesque, in placerat odio tempor.</li>
                                        <li>Etiam dignissim turpis a lorem finibus pellentesque.</li>
                                        <li>Aenean convallis leo et magna egestas, ut tincidunt nunc suscipit.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content-two mb_40">
                                <figure className="image-box"><img src="assets/images/news/news-11.jpg" alt="" /></figure>
                                <div className="text">
                                    <h3>Requirements for Citizenship</h3>
                                    <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget. Vivamus venenatis turpis lacinia, congue massa in, accumsan orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vestibulum id risus sit amet faucibus. Vestibulum sodales lacus eros, sed maximus sapien mollis ultrices. In odio mi, scelerisque a libero et, pulvinar pulvinar enim. . </p>
                                </div>
                            </div>
                            <div className="post-share-option mb_65">
                                <ul className="post-tags clearfix">
                                    <li><h5>Tags :</h5></li>
                                    <li><Link href="blog-details">#Agent</Link>,</li>
                                    <li><Link href="blog-details">#Business</Link>,</li>
                                    <li><Link href="blog-details">#Career</Link></li>
                                </ul>
                                <ul className="share-links clearfix">
                                    <li><Link href="/l"><i className="icon-4"></i></Link></li>
                                    <li><Link href="/"><i className="icon-5"></i></Link></li>
                                    <li><Link href="/"><i className="icon-6"></i></Link></li>
                                    <li><Link href="/"><i className="icon-7"></i></Link></li>
                                </ul>
                            </div>
                            <div className="comments-box mb_60">
                                <div className="group-title pb_40">
                                    <h3>Comments(02)</h3>
                                </div>
                                <div className="comment-inner">
                                    <div className="comment">
                                        <figure className="comment-thumb"><img src="assets/images/news/comment-1.jpg" alt="" /></figure>
                                        <h5>Farrel Collins <span>March 19, 2022</span></h5>
                                        <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget. Vivamus venenatis turpis lacinia, congue massa in, accumsan orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vestibulum id risus sit amet faucibus. </p>
                                        <Link href="blog-details" className="reply-btn"><img src="assets/images/icons/icon-16.png" alt="" /></Link>
                                    </div>
                                    <div className="comment replay-comment">
                                        <figure className="comment-thumb"><img src="assets/images/news/comment-2.jpg" alt="" /></figure>
                                        <h5>Haris Gulati <span>March 19, 2022</span></h5>
                                        <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget. Vivamus venenatis turpis lacinia, congue massa in, accumsan orci. Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                                        <Link href="blog-details" className="reply-btn"><img src="assets/images/icons/icon-16.png" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="comments-form-area">
                                <div className="group-title pb_20">
                                    <h3>Leave a Reply</h3>
                                </div>
                                <div className="form-inner">
                                    <form action="blog-details" method="post">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="name" placeholder="Name" required="" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Email" required="" />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <input type="text" name="name" placeholder="Website" required="" />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <textarea name="message" placeholder="Your Text Here"></textarea>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <div className="custom-controls-stacked pb_20">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">Save my name, email, and website in this browser for the next time I comment.</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                <button type="submit" className="theme-btn btn-two"><span>Post Comment</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
          
          <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
            <div className="default-sidebar blog-sidebar ml_10">
            <div className="sidebar-widget search-widget">
                                <div className="widget-title">
                                    <h3>Search</h3>
                                </div>
                                <div className="search-form">
                                    <form action="blog" method="post">
                                        <div className="form-group">
                                            <input type="search" name="search-field" placeholder="Keyword ..." required />
                                            <button type="submit"><i className="icon-8"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="sidebar-widget category-widget">
                                <div className="widget-title">
                                    <h3>Search</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="category-list-two clearfix">
                                        <li><Link href="blog-details">Immigration</Link></li>
                                        <li><Link href="blog-details">Application</Link></li>
                                        <li><Link href="blog-details">Business Visa</Link></li>
                                        <li><Link href="blog-details">Spouse/Family Visas</Link></li>
                                        <li><Link href="blog-details">Working Visas</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-widget post-widget">
                                <div className="widget-title">
                                    <h3>Popular Post</h3>
                                </div>
                                <div className="post-inner">
                                    <div className="post">
                                        <figure className="post-thumb"><Link href="blog-details"><img src="assets/images/news/post-1.jpg" alt="" /></Link></figure>
                                        <h5><Link href="blog-details">Kickstart Your Visa ApprovalWith 4 Easy Steps</Link></h5>
                                        <span className="post-date">December 30, 2020</span>
                                    </div>
                                    <div className="post">
                                        <figure className="post-thumb"><Link href="blog-details"><img src="assets/images/news/post-2.jpg" alt="" /></Link></figure>
                                        <h5><Link href="blog-details">Customers Applying for Priority Visas.</Link></h5>
                                        <span className="post-date">December 25, 2020</span>
                                    </div>
                                    <div className="post">
                                        <figure className="post-thumb"><Link href="blog-details"><img src="assets/images/news/post-3.jpg" alt="" /></Link></figure>
                                        <h5><Link href="blog-details">Travelling to Australia for Tourism or Business?</Link></h5>
                                        <span className="post-date">December 22, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-widget gallery-widget">
                                <div className="widget-title">
                                    <h3>Our Gallery</h3>
                                </div>
                                <div className="widget-content p_relative">
                                    <ul className="image-list clearfix">
                                        <li>
                                            <figure className="image-box"><Link href="assets/images/news/gallery-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-1.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image-box"><Link href="assets/images/news/gallery-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-2.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image-box"><Link href="assets/images/news/gallery-3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-3.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image-box"><Link href="assets/images/news/gallery-4.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-4.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image-box"><Link href="assets/images/news/gallery-5.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-5.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image-box"><Link href="assets/images/news/gallery-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-6.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image-box"><Link href="assets/images/news/gallery-7.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-7.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image-box"><Link href="assets/images/news/gallery-8.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-8.jpg" alt="" /></Link></figure>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-widget travel-widget">
                                <div className="widget-content p_relative">
                                    <figure className="image-box"><img src="assets/images/resource/travel-1.jpg" alt="" /></figure>
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
                            <div className="sidebar-widget tags-widget">
                                <div className="widget-title">
                                    <h3>Popular Tags</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="tags-list clearfix">
                                        <li><Link href="blog-details"># Agents</Link></li>
                                        <li><Link href="blog-details"># Business</Link></li>
                                        <li><Link href="blog-details"># Career</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                {/* sidebar-page-container end */}

            </Layout>
        </>
    )
}
