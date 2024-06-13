'use client'
import CountriesSlider from '@/components/slider/CountriesSlider'
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
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Countries Overview">
                {/* countries section */}
                <section className="countries-style-four sec-pad">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-48.png)' }}></div>
                <div className="auto-container">
                    <div className="sec-title centred mb_60">
                    <span className="sub-title">Countries We Offer</span>
                    <h2>Immigration Officials approvals for foreign <br />citizens can vary by country.</h2>
                    </div>
                    <div className="content-box">
                        {/*Theme Carousel*/}
                        <CountriesSlider />                        
                    </div>
                </div>
                </section>
                {/*countries details end*/}
                {/* countries section */}
                <section className="countries-style-three alternat-2 sec-pad">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-63.png)' }}></div>
            <div className="auto-container">
                <div className="sec-title mb_60 centred">
                    <span className="sub-title">Countries We Offer</span>
                    <h2>Immigration Officials approvals for foreign <br />citizens can vary by country.</h2>
                </div>
                <div className="tabs-box">
                    <div className="tab-btn-box mb_50">
                        <div className="tab-btns tab-buttons" role="tablist">
                        <div className="row clearfix">
                                    <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                                        <div  className="nav-link" onClick={() => handleOnClick(4)}>
                                            <div className={activeIndex == 4 ? "tab-btn active" : "tab-btn"}><h3><i className="icon-33"></i>Education</h3></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                                        <div className="nav-item" onClick={() => handleOnClick(5)}>
                                            <div className={activeIndex == 5 ? "tab-btn active" : "tab-btn"}><h3><i className="icon-34"></i>Immigration</h3></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                                        <div className="nav-item" onClick={() => handleOnClick(6)}>
                                            <div className={activeIndex == 6 ? "tab-btn active" : "tab-btn"}><h3><i className="icon-14"></i>Business</h3></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                                        <div className="nav-item" onClick={() => handleOnClick(7)}>
                                            <div className={activeIndex == 7 ? "tab-btn active" : "tab-btn"}><h3><i className="icon-17"></i>Tourist</h3></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                            <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-13.png" alt="" /></div>
                                            <h3><Link href="index-3">United Kingdom</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Working Visa, Job Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-14.png" alt="" /></div>
                                            <h3><Link href="index-3">Bahamas</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Eudcation Visa, Only System</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-15.png" alt="" /></div>
                                            <h3><Link href="index-3">Canada</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Resident Visa Job Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-16.png" alt="" /></div>
                                            <h3><Link href="index-3">Brazil</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Student Visa & Admission, Visitor Visa</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex == 5 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-14.png" alt="" /></div>
                                            <h3><Link href="index-3">Bahamas</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Eudcation Visa, Only System</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-13.png" alt="" /></div>
                                            <h3><Link href="index-3">United Kingdom</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Working Visa, Job Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-15.png" alt="" /></div>
                                            <h3><Link href="index-3">Canada</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Resident Visa Job Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-16.png" alt="" /></div>
                                            <h3><Link href="index-3">Brazil</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Student Visa & Admission, Visitor Visa</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex == 6 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-15.png" alt="" /></div>
                                            <h3><Link href="index-3">Canada</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Resident Visa Job Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-13.png" alt="" /></div>
                                            <h3><Link href="index-3">United Kingdom</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Working Visa, Job Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-14.png" alt="" /></div>
                                            <h3><Link href="index-3">Bahamas</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Eudcation Visa, Only System</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-16.png" alt="" /></div>
                                            <h3><Link href="index-3">Brazil</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Student Visa & Admission, Visitor Visa</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex == 7 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-13.png" alt="" /></div>
                                            <h3><Link href="index-3">United Kingdom</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Working Visa, Job Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-16.png" alt="" /></div>
                                            <h3><Link href="index-3">Brazil</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Student Visa & Admission, Visitor Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-14.png" alt="" /></div>
                                            <h3><Link href="index-3">Bahamas</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Eudcation Visa, Only System</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-15.png" alt="" /></div>
                                            <h3><Link href="index-3">Canada</Link></h3>
                                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
                                            <div className="text">Visa Type :</div>
                                            <span className="designation">Resident Visa Job Visa</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                 </section>
                 {/*countries details end*/}
                {/* countries section */}
                <section className="countries-style-five countries-page p_relative mb_140">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-61.png)' }}></div>
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-62.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title mb_60 light">
                    <span className="sub-title">Countries We Offer</span>
                    <h2>Apply For Quick Visa</h2>
                    </div>
                    <div className="row clearfix">
                    {/* Repeat the following block for each country */}
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                        <div className="countries-block-five wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                            <figure className="image"><img src="assets/images/resource/countries-9.jpg" alt="" /></figure>
                            <div className="flag"><img src="assets/images/icons/flag-3.png" alt="" /></div>
                            </div>
                            <div className="lower-content">
                            <h5><Link href="index-4">China <span>Visa</span></Link></h5>
                            <span className="text">Avenue, Jersey</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                        <div className="countries-block-five wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/countries-10.jpg" alt="" /></figure>
                                    <div className="flag"><img src="assets/images/icons/flag-5.png" alt="" /></div>
                                </div>
                                <div className="lower-content">
                                    <h5><Link href="index-4">United Kingdom <span>Visa</span></Link></h5>
                                    <span className="text">Asheville</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                        <div className="countries-block-five wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/countries-11.jpg" alt="" /></figure>
                                    <div className="flag"><img src="assets/images/icons/flag-8.png" alt="" /></div>
                                </div>
                                <div className="lower-content">
                                    <h5><Link href="index-4">Brazil <span>Visa</span></Link></h5>
                                    <span className="text">Amsterdam</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                        <div className="countries-block-five wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/countries-12.jpg" alt="" /></figure>
                                    <div className="flag"><img src="assets/images/icons/flag-4.png" alt="" /></div>
                                </div>
                                <div className="lower-content">
                                    <h5><Link href="index-4">Australia <span>Visa</span></Link></h5>
                                    <span className="text">Queensland</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                 {/*countries details end*/}
                                

                            </Layout>
        </>
    )
}


