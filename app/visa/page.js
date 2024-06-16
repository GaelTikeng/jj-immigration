'use client'
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react'
import TestmonialSlider1 from '../../components/slider/TestmonialSlider1'
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}
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
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Visa Overview">
                {/* about section */}
                <section className="about-style-five p_relative">
                    <div className="auto-container">
                        <div className="row clearfix">
                        <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                            <figure className="image-box"><img src="assets/images/resource/about-8.jpg" alt="" /></figure>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                            <h3>Morente reiterates rule on proper wearing of uniform</h3>
                            <p>In a memorandum issued on Wednesday, Morente stated that the BI has been receiving complaints about officials and employees who are not wearing their complete uniform during their tour of duty.</p>
                            <p>“+Our immigration officers and employees are expected to be in their complete uniform, with their nameplates and IDs,” said Morente. “We have a BI CARES project that reinforces our commitment to better public service,” he added. The BI CARES project</p>
                            <p>stands for courtesy, accountability, responsibility, efficiency and service. “It is high time that law enforcement be professionalized,” said Morente. “We can implement our laws and policies, but as public servants, we are also expected to be courteous and responsible,” he added.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                 {/*about details end*/}
                {/* coaching section */}
                <section className="coaching-style-two visa-page p_relative pt_140 pb_140 centred">
                    <div className="auto-container">
                        <div className="sec-title centred mb_50">
                        <span className="sub-title">OUR COACHING</span>
                        <h2>Excel's successful Instructing <br />Center is migrate.</h2>
                        </div>
                        <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
                            <div className="coaching-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                <div className="icon"><img src="assets/images/icons/icon-9.png" alt="" /></div>
                                <span className="count-text">01</span>
                                </div>
                                <h3><Link href="coaching-details.html">TOEFL Coaching</Link></h3>
                                <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
                            <div className="coaching-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                <div className="icon"><img src="assets/images/icons/icon-10.png" alt="" /></div>
                                <span className="count-text">02</span>
                                </div>
                                <h3><Link href="coaching-details.html">Graduate Re-Exam</Link></h3>
                                <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
                            <div className="coaching-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                <div className="icon"><img src="assets/images/icons/icon-11.png" alt="" /></div>
                                <span className="count-text">03</span>
                                </div>
                                <h3><Link href="coaching-details.html">Scholastic Apti</Link></h3>
                                <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
                            <div className="coaching-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                <div className="icon"><img src="assets/images/icons/icon-12.png" alt="" /></div>
                                <span className="count-text">04</span>
                                </div>
                                <h3><Link href="coaching-details.html">Management Test</Link></h3>
                                <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="more-content">
                        <h5>Assisting with visa preparation for <Link href="index-2.html">eligibility exams</Link> is a service offered.</h5>
                        <div className="btn-box">
                            <Link href="index-2.html" className="theme-btn btn-one"><span>More Details</span></Link>
                        </div>
                        </div>
                    </div>
                    </section>
                 {/*coaching details end*/}
                {/* visa section */}
                <section className="visa-style-two pb_130">
                    <div className="auto-container">
                        <div className="sec-title centred mb_50">
                        <span className="sub-title">Visa Categories</span>
                        <h2>Translation Services Inc. offers comprehensive <br />immigration services.</h2>
                        </div>
                        <Swiper {...swiperOptions} className="three-item-carousel owl-carousel owl-theme owl-nav-none">
                        <SwiperSlide className="slide-item p_relative">
                        <div className="visa-block-two">
                            <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                                <h3><Link href="visa-details-4">Student Visa</Link></h3>
                                <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                <div className="link-box">
                                    <Link href="visa-details-4">Read More</Link>
                                </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                                <h3><Link href="visa-details-4">Student Visa</Link></h3>
                                <div className="link-box">
                                    <Link href="visa-details-4">Read More</Link>
                                </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-8.jpg" alt="" /></figure>
                            </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item p_relative">
                        <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt="" /></div>
                                    <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details-3">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-5.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt="" /></div>
                                    <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details-3">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-9.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                    <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                    <h3><Link href="visa-details">Business Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-6.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                    <h3><Link href="visa-details">Business Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-10.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                    <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                    <h3><Link href="visa-details-6">Tourist Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details-6">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-7.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                    <h3><Link href="visa-details-6">Tourist Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details-6">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-11.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                        <SwiperSlide className="slide-item p_relative">
                        <div className="visa-block-two">
                            <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                                <h3><Link href="visa-details-4">Student Visa</Link></h3>
                                <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                <div className="link-box">
                                    <Link href="visa-details-4">Read More</Link>
                                </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                                <h3><Link href="visa-details-4">Student Visa</Link></h3>
                                <div className="link-box">
                                    <Link href="visa-details-4">Read More</Link>
                                </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-8.jpg" alt="" /></figure>
                            </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item p_relative">
                        <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt="" /></div>
                                    <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details-3">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-5.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt="" /></div>
                                    <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details-3">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-9.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                    <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                    <h3><Link href="visa-details">Business Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-6.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                    <h3><Link href="visa-details">Business Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-10.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                    <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                    <h3><Link href="visa-details-6">Tourist Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details-6">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-7.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                    <h3><Link href="visa-details-6">Tourist Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details-6">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-11.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                        <SwiperSlide className="slide-item p_relative">
                        <div className="visa-block-two">
                            <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                                <h3><Link href="visa-details-4">Student Visa</Link></h3>
                                <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                <div className="link-box">
                                    <Link href="visa-details-4">Read More</Link>
                                </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                                <h3><Link href="visa-details-4">Student Visa</Link></h3>
                                <div className="link-box">
                                    <Link href="visa-details-4">Read More</Link>
                                </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-8.jpg" alt="" /></figure>
                            </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item p_relative">
                        <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt="" /></div>
                                    <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details-3">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-5.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt="" /></div>
                                    <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details-3">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-9.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                    <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                    <h3><Link href="visa-details">Business Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-6.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                    <h3><Link href="visa-details">Business Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-10.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                    <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                    <h3><Link href="visa-details-6">Tourist Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details-6">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-7.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                    <h3><Link href="visa-details-6">Tourist Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details-6">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-11.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                        </Swiper>
                        </div>
                    </section>
                 {/*visa   end*/}
                 <section className="testimonial-style-two pb_150">
                    <div className="auto-container">
                        <div className="sec-title centred mb_60">
                        <span className="sub-title">Testimonial</span>
                        <h2>What people say <br />about us</h2>
                        </div>
                        <div className="content-box">
                        {/*Theme Carousel*/}
                        <TestmonialSlider1 />                        
                    </div>
                        </div>
                    </section>
                                                

                            </Layout>
        </>
    )
}


