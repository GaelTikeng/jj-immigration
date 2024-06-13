'use client'
import Link from "next/link"
import { useState } from "react"

export default function Countries() {
    const [activeIndex, setActiveIndex] = useState(4)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>


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
  
        </>
    )
}

