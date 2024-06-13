'use client'
import Link from "next/link";
import TestmonialSlider from '@/components/slider/TestmonialSlider';
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
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Coaching Overview">
                {/* dream-section */}
                <section className="dream-style-three p_relative">
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_two">
                        <div className="content-box p_relative d_block">
                            <div className="sec-title mb_20">
                            <span className="sub-title">Reach Your Dream</span>
                            <h2>Get the Right Help</h2>
                            </div>
                            <div className="text mb_25">
                            <p>Where did this incorrect belief that everyone dislikes praising happiness come from? Explain to me how this erroneous theory ended up being devised.</p>
                            </div>
                            <ul className="list-item p_relative mb_40 clearfix">
                            <li><Link href="/">1. Entering & Leaving From Country <i className="icon-9"></i></Link></li>
                            <li><Link href="/">2. Help & Support <i className="icon-9"></i></Link></li>
                            <li><Link href="/">3. Country Citizenship <i className="icon-9"></i></Link></li>
                            </ul>
                            <div className="btn-box">
                            <Link href="coaching" className="theme-btn"><span>More Details</span></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box pl_3">
                        <figure className="image"><img src="assets/images/resource/dream-1.jpg" alt="" /></figure>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* dream-section end */}
                {/* coaching-section */}
                <section className="coaching-section pb_150">
                    <div className="auto-container">
                        <div className="title-box mb_70">
                        <div className="sec-title">
                            <span className="sub-title">HOW WE HELP CLIENTS</span>
                            <h2>Your immigration class New Orleans Saints deserves you.</h2>
                        </div>
                        <div className="text">
                            <p>Where did this incorrect belief that everyone dislikes praising happiness come from? Explain to me how this erroneous theory ended up being devised.</p>
                        </div>
                        </div>
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                            <div className="coaching-block-one">
                            <div className="inner-box">
                                <div className="image-box clearfix">
                                <figure className="image"><img src="assets/images/resource/coaching-1.jpg" alt="" /></figure>
                                <figure className="image"><img src="assets/images/resource/coaching-2.jpg" alt="" /></figure>
                                </div>
                                <div className="lower-content">
                                <h3><Link href="coaching-details-3">Get Coaching</Link></h3>
                                <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                <div className="link-box">
                                    <Link href="coaching-details-3"><span>Read More</span></Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                            <div className="coaching-block-one">
                            <div className="inner-box">
                                <div className="image-box clearfix">
                                <figure className="image"><img src="assets/images/resource/coaching-3.jpg" alt="" /></figure>
                                <figure className="image"><img src="assets/images/resource/coaching-4.jpg" alt="" /></figure>
                                </div>
                                <div className="lower-content">
                                <h3><Link href="coaching-details-2">Pte Coaching</Link></h3>
                                <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                <div className="link-box">
                                    <Link href="coaching-details-2"><span>Read More</span></Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                            <div className="coaching-block-one">
                            <div className="inner-box">
                                <div className="image-box clearfix">
                                <figure className="image"><img src="assets/images/resource/coaching-5.jpg" alt="" /></figure>
                                <figure className="image"><img src="assets/images/resource/coaching-6.jpg" alt="" /></figure>
                                </div>
                                <div className="lower-content">
                                <h3><Link href="coaching-details">Tofel Coaching</Link></h3>
                                <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                <div className="link-box">
                                    <Link href="coaching-details"><span>Read More</span></Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* coaching-section end */}
                {/* coaching-y*/}
                <section className="coaching-style-three">
                <div className="outer-container clearfix">
                    <div className="coaching-block-three">
                    <div className="inner-box">
                        <div className="static-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-7.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-38"></i></div>
                            <h3><Link href="coaching-details">TOEFL Coaching</Link></h3>
                            <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
                        </div>
                        </div>
                        <div className="overlay-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-7.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-38"></i></div>
                            <h3><Link href="coaching-details">TOEFL Coaching</Link></h3>
                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget. Vivamus venenatis turpis lacinia, congue massa in, accumsan orci.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="coaching-block-three">
                    <div className="inner-box">
                        <div className="static-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-8.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-39"></i></div>
                            <h3><Link href="coaching-details">Graduate Re-Exam</Link></h3>
                            <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
                        </div>
                        </div>
                        <div className="overlay-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-8.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-39"></i></div>
                            <h3><Link href="coaching-details">Graduate Re-Exam</Link></h3>
                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget. Vivamus venenatis turpis lacinia, congue massa in, accumsan orci.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="coaching-block-three">
                    <div className="inner-box">
                        <div className="static-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-9.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-40"></i></div>
                            <h3><Link href="coaching-details">Scholastic Apti</Link></h3>
                            <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
                        </div>
                        </div>
                        <div className="overlay-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-9.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-40"></i></div>
                            <h3><Link href="coaching-details">Scholastic Apti</Link></h3>
                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget. Vivamus venenatis turpis lacinia, congue massa in, accumsan orci.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="coaching-block-three">
                    <div className="inner-box">
                        <div className="static-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-10.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-41"></i></div>
                            <h3><Link href="coaching-details">Management Test</Link></h3>
                            <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
                        </div>
                        </div>
                        <div className="overlay-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-10.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-41"></i></div>
                            <h3><Link href="coaching-details">Management Test</Link></h3>
                            <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget. Vivamus venenatis turpis lacinia, congue massa in, accumsan orci.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                            {/* coaching-y end */}
                    {/* testmonial*/}
                    <section className="testimonial-section p_relative centred">
    <div className="pattern-layer">
      <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-35.png)" }}></div>
      <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-36.png)" }}></div>
    </div>
    <div className="thumb-box">
      <div className="thumb thumb-1"><img src="assets/images/resource/thumb-1.png" alt="" /></div>
      <div className="thumb thumb-2"><img src="assets/images/resource/thumb-2.png" alt="" /></div>
      <div className="thumb thumb-3"><img src="assets/images/resource/thumb-3.png" alt="" /></div>
      <div className="thumb thumb-4"><img src="assets/images/resource/thumb-4.png" alt="" /></div>
    </div>
    <div className="auto-container">
                    <div className="content-box">
                        {/*Theme Carousel*/}
                        <TestmonialSlider />                        
                    </div>
            </div>
            </section>
                    {/*testmonial end*/}
                 

            </Layout>
        </>
    )
}


