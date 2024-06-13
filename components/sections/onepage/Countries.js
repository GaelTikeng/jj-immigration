'use client'
import Link from "next/link"
import { useState } from "react"


export default function Countries() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>


<section className="countries-section p_relative centred" id="countries">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-10.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-11.png)' }}></div>
      </div>
      <div className="outer-container">
        <div className="sec-title mb_30 centred">
          <span className="sub-title">Countries We Offer</span>
          <h2>Best Countries to Travel</h2>
        </div>
                    <div className="tabs-box">
                        <div className="tab-btn-box mb_60">
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
                                <div className="row align-items-center">
                                <div className="content-box clearfix">
                                    <div className="countries-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/resource/countries-1.jpg" alt="" /></figure>
                                            <div className="text">
                                                <h3><Link href="/">India <br />Visa</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="countries-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/countries-2.jpg" alt="" /></figure>
                                        <div className="text">
                                            <h3><Link href="/">Brazil <br />Visa</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="countries-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/countries-3.jpg" alt="" /></figure>
                                        <div className="text">
                                            <h3><Link href="/">China <br />Visa</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="countries-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/countries-4.jpg" alt="" /></figure>
                                        <div className="text">
                                            <h3><Link href="/">Vietnam <br />Visa</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row align-items-center">
                                <div className="content-box clearfix">
                                <div className="countries-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/countries-1.jpg" alt="" /></figure>
                                        <div className="text">
                                            <h3><Link href="/">India <br />Visa</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="countries-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/countries-3.jpg" alt="" /></figure>
                                        <div className="text">
                                            <h3><Link href="/">China <br />Visa</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="countries-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/countries-4.jpg" alt="" /></figure>
                                        <div className="text">
                                            <h3><Link href="/">Vietnam <br />Visa</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="countries-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/countries-2.jpg" alt="" /></figure>
                                        <div className="text">
                                            <h3><Link href="/">Brazil <br />Visa</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                            <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row align-items-center">
                                <div className="content-box clearfix">
                                <div className="countries-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/countries-3.jpg" alt="" /></figure>
                                        <div className="text">
                                            <h3><Link href="/">China <br />Visa</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="countries-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/countries-4.jpg" alt="" /></figure>
                                        <div className="text">
                                            <h3><Link href="/">Vietnam <br />Visa</Link></h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="countries-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/countries-1.jpg" alt="" /></figure>
                                        <div className="text">
                                            <h3><Link href="/">India <br />Visa</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="countries-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/countries-2.jpg" alt="" /></figure>
                                        <div className="text">
                                            <h3><Link href="/">Brazil <br />Visa</Link></h3>
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
  
        </>
    )
}