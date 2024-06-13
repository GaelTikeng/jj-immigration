'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"

import { useState } from 'react'
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(4)
  const handleOnClick = (index) => {
      setActiveIndex(index)
  }
    const [isOpen, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="GRE Coaching">
                {/* coaching details section */}
                <section className="coaching-details p_relative">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="coaching-sidebar default-sidebar">
                            <div className="sidebar-widget category-widget">
                                <ul className="category-list clearfix">
                                    <li><Link href="coaching-details">IELTS Coaching</Link></li>
                                    <li><Link href="coaching-details-2">PTE Coaching</Link></li>
                                    <li><Link href="coaching-details-3">OET Coaching</Link></li>
                                    <li><Link href="coaching-details-4" className="current">GRE Coaching</Link></li>
                                    <li><Link href="coaching-details-5">GMAT Coaching</Link></li>
                                    <li><Link href="coaching-details-6">SAT Coaching</Link></li>
                                </ul>
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
                            <div className="sidebar-widget download-widget">
                                <div className="widget-content">
                                    <div className="icon-shape"><img src="assets/images/icons/icon-15.png" alt="" /></div>
                                    <h3>Annual Report / <br />Online Appointment</h3>
                                    <ul className="download-list clearfix">
                                        <li>
                                            <Link href="coaching-details-4">
                                                <i className="icon-50"></i>
                                                <p>Application Form</p>
                                                <span>450kb</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="coaching-details-4">
                                                <i className="icon-50"></i>
                                                <p>Application Form</p>
                                                <span>450kb</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="coaching-details-content">
                            <div className="upper-box mb_40">
                                <h2>GRE Coaching</h2>
                                <div className="text-box mb_40">
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum.Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor tempus feugiat dolor and lacinia.Vivamus ac ultricies ex. Donec lacinia lacus libero.</p>
                                    <ul className="clearfix">
                                        <li><Link href="coaching-details-4"><span>1</span>Immigrate</Link></li>
                                        <li><Link href="coaching-details-4"><span>2</span>Work</Link></li>
                                        <li><Link href="coaching-details-4"><span>3</span>Study</Link></li>
                                        <li><Link href="coaching-details-4"><span>4</span>Citizenship</Link></li>
                                    </ul>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/coaching-18.jpg" alt="" /></figure>
                            </div>
                            <div className="tabs-box">
                                <div className="tab-btn-box mb_40">
                                <ul className="tab-btns tab-buttons clearfix" role="tablist">
                                <li className="nav-link" onClick={() => handleOnClick(1)}>
                                    <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}><span>Education</span></a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(2)}>
                                    <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}><span>Immigration</span></a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(3)}>
                                    <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}><span>Business</span></a>
                                </li>
                            </ul>
                                </div>
                                <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                            <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="content-box">
                                            <div className="content-one mb_40">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-7 col-md-6 col-sm-12 text-column">
                                                        <div className="text">
                                                            <h3>Morente reiterates rule on proper wearing of uniform</h3>
                                                            <p>In a memorandum issued on Wednesday, Morente stated that the BI has been receiving complaints about officials and employees who are not wearing their complete uniform during their tour of duty.</p>
                                                            <p>“+Our immigration officers and employees are expected to be in their complete uniform, <br />with their nameplates and IDs,” said Morente. “We have a BI CARES project that reinforces our commitment to better public service,” he added. The BI CARES project</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="" /></figure>
                                                    </div>
                                                </div>
                                                <div className="text mt_20">
                                                    <p>stands for courtesy, accountability, responsibility, efficiency and service. “It is high time that law enforcement be professionalized,” said Morente. “We can implement our laws and policies, but as public servants, we are also expected to be courteous and responsible,” he added.</p>
                                                </div>
                                            </div>
                                            <div className="content-two pb_30">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-13.jpg" alt="" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>Individual</h3>
                                                                    <p>stands for courtesy, accountability</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>Course Type</h5>
                                                                        <span>Will do passively.</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>Delivering Mode</h5>
                                                                        <span>Will do passively.</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>Learning Mode</h5>
                                                                        <span>Conduct it yourself.</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="coaching-details-4"><span className="price">$105.99</span><span className="text">Get Started</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-14.jpg" alt="" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>Shared Class</h3>
                                                                    <p>stands for courtesy, accountability</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>Course Type</h5>
                                                                        <span>Will do passively.</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>Delivering Mode</h5>
                                                                        <span>Will do passively.</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>Learning Mode</h5>
                                                                        <span>Conduct it yourself.</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="coaching-details-4"><span className="price">$105.99</span><span className="text">Get Started</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-three">
                                                <div className="row clearfix">
                                                    <div className="col-lg-7 col-md-6 col-sm-12 map-column">
                                                        <div className="map-inner p_relative d_block">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                                               
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 content-column">
                                                        <div className="content-inner">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-15.jpg" alt="" /></figure>
                                                            <div className="text">
                                                                <h5>Santa Monica</h5>
                                                                <span>No: 3213 Libby Street. 90401</span>
                                                                <p>In a memorandum issued on Wednesday, Morente stated that the BI has been receiving complaints about officials and employees who are not wearing their complete uniform during their tour of duty.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="content-box">
                                            <div className="content-one mb_40">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-7 col-md-6 col-sm-12 text-column">
                                                        <div className="text">
                                                            <h3>Morente reiterates rule on proper wearing of uniform</h3>
                                                            <p>In a memorandum issued on Wednesday, Morente stated that the BI has been receiving complaints about officials and employees who are not wearing their complete uniform during their tour of duty.</p>
                                                            <p>“+Our immigration officers and employees are expected to be in their complete uniform, <br />with their nameplates and IDs,” said Morente. “We have a BI CARES project that reinforces our commitment to better public service,” he added. The BI CARES project</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="" /></figure>
                                                    </div>
                                                </div>
                                                <div className="text mt_20">
                                                    <p>stands for courtesy, accountability, responsibility, efficiency and service. “It is high time that law enforcement be professionalized,” said Morente. “We can implement our laws and policies, but as public servants, we are also expected to be courteous and responsible,” he added.</p>
                                                </div>
                                            </div>
                                            <div className="content-two pb_30">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-13.jpg" alt="" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>Individual</h3>
                                                                    <p>stands for courtesy, accountability</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>Course Type</h5>
                                                                        <span>Will do passively.</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>Delivering Mode</h5>
                                                                        <span>Will do passively.</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>Learning Mode</h5>
                                                                        <span>Conduct it yourself.</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="coaching-details-4"><span className="price">$105.99</span><span className="text">Get Started</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-14.jpg" alt="" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>Shared Class</h3>
                                                                    <p>stands for courtesy, accountability</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>Course Type</h5>
                                                                        <span>Will do passively.</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>Delivering Mode</h5>
                                                                        <span>Will do passively.</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>Learning Mode</h5>
                                                                        <span>Conduct it yourself.</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="coaching-details-4"><span className="price">$105.99</span><span className="text">Get Started</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-three">
                                                <div className="row clearfix">
                                                    <div className="col-lg-7 col-md-6 col-sm-12 map-column">
                                                        <div className="map-inner p_relative d_block">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                                               
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 content-column">
                                                        <div className="content-inner">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-15.jpg" alt="" /></figure>
                                                            <div className="text">
                                                                <h5>Santa Monica</h5>
                                                                <span>No: 3213 Libby Street. 90401</span>
                                                                <p>In a memorandum issued on Wednesday, Morente stated that the BI has been receiving complaints about officials and employees who are not wearing their complete uniform during their tour of duty.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="content-box">
                                            <div className="content-one mb_40">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-7 col-md-6 col-sm-12 text-column">
                                                        <div className="text">
                                                            <h3>Morente reiterates rule on proper wearing of uniform</h3>
                                                            <p>In a memorandum issued on Wednesday, Morente stated that the BI has been receiving complaints about officials and employees who are not wearing their complete uniform during their tour of duty.</p>
                                                            <p>“+Our immigration officers and employees are expected to be in their complete uniform, <br />with their nameplates and IDs,” said Morente. “We have a BI CARES project that reinforces our commitment to better public service,” he added. The BI CARES project</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="" /></figure>
                                                    </div>
                                                </div>
                                                <div className="text mt_20">
                                                    <p>stands for courtesy, accountability, responsibility, efficiency and service. “It is high time that law enforcement be professionalized,” said Morente. “We can implement our laws and policies, but as public servants, we are also expected to be courteous and responsible,” he added.</p>
                                                </div>
                                            </div>
                                            <div className="content-two pb_30">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-13.jpg" alt="" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>Individual</h3>
                                                                    <p>stands for courtesy, accountability</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>Course Type</h5>
                                                                        <span>Will do passively.</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>Delivering Mode</h5>
                                                                        <span>Will do passively.</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>Learning Mode</h5>
                                                                        <span>Conduct it yourself.</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="coaching-details-4"><span className="price">$105.99</span><span className="text">Get Started</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-14.jpg" alt="" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>Shared Class</h3>
                                                                    <p>stands for courtesy, accountability</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>Course Type</h5>
                                                                        <span>Will do passively.</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>Delivering Mode</h5>
                                                                        <span>Will do passively.</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>Learning Mode</h5>
                                                                        <span>Conduct it yourself.</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="coaching-details-4"><span className="price">$105.99</span><span className="text">Get Started</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-three">
                                                <div className="row clearfix">
                                                    <div className="col-lg-7 col-md-6 col-sm-12 map-column">
                                                        <div className="map-inner p_relative d_block">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                                               
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 content-column">
                                                        <div className="content-inner">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-15.jpg" alt="" /></figure>
                                                            <div className="text">
                                                                <h5>Santa Monica</h5>
                                                                <span>No: 3213 Libby Street. 90401</span>
                                                                <p>In a memorandum issued on Wednesday, Morente stated that the BI has been receiving complaints about officials and employees who are not wearing their complete uniform during their tour of duty.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                                    {/*coaching details end*/}
                                

                            </Layout>
        </>
    )
}


