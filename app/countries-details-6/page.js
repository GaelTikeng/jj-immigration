'use client'
import Link from "next/link";
import Layout from "../../components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react'
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
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Australia">
                {/* countries section */}
                <section className="countries-details p_relative">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="countries-sidebar default-sidebar">
                            <div className="sidebar-widget category-widget">
                                <ul className="category-list clearfix">
                                    <li><Link href="countries-details">United States</Link></li>
                                    <li><Link href="countries-details-2">United Kingdom</Link></li>
                                    <li><Link href="countries-details-3">Canada</Link></li>
                                    <li><Link href="countries-details-4">China</Link></li>
                                    <li><Link href="countries-details-5">Bahamas</Link></li>
                                    <li><Link href="countries-details-6" className="current">Australia</Link></li>
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
                                            <Link href="coaching-details">
                                                <i className="icon-50"></i>
                                                <p>Application Form</p>
                                                <span>450kb</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="coaching-details">
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
                        <div className="countries-details-content">
                            <div className="tabs-box">
                                <div className="tab-btn-box pb_60">
                                <ul className="tab-btns tab-buttons clearfix" role="tablist">
                                <li className="nav-link" onClick={() => handleOnClick(1)}>
                                    <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}><h5><i className="icon-52"></i>Immigration</h5></a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(2)}>
                                    <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}><h5><i className="icon-53"></i>Visitor visas</h5></a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(3)}>
                                    <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}><h5><i className="icon-54"></i>Education</h5></a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(4)}>
                                    <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}><h5><i className="icon-55"></i>Tourist</h5></a>
                                </li>
                            </ul>
                                </div>
                                <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                            <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="content-box">
                                            <div className="content-one mb_30">
                                                <div className="upper-text mb_30">
                                                    <h2>Immigrate to United States</h2>
                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum.Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor tempus feugiat dolor and lacinia.Vivamus ac ultricies ex. Donec lacinia lacus libero.</p>
                                                </div>
                                                <div className="two-column mb_30">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                            <figure className="image-box"><img src="assets/images/resource/countries-13.jpg" alt="" /></figure>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                            <div className="text">
                                                                <h3>Morente reiterates rule on proper wearing of uniform</h3>
                                                                <p>In a memorandum issued on Wednesday, Morente stated that the BI has been receiving complaints about officials and employees who are not wearing their complete uniform during their tour of duty.</p>
                                                                <p>stands for courtesy, accountability, responsibility, efficiency and service. “It is high time that law enforcement be professionalized,” said Morente. “We can implement our laws and policies, but as public servants, we are also expected to be courteous and responsible,” he added.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <p>Are you interested in immigrating to the United States or want to sponsor someone? The United States provides for immigrant visas based on family ties, employment, adoption, special immigrant categories, and the diversity visa. Click on the icons below to learn more.</p>
                                                </div>
                                            </div>
                                            <Swiper {...swiperOptions} className="three-item-carousel-two owl-carousel owl-theme owl-nav-none">
                                            <div className="content-two mb_50">                    
                                             <SwiperSlide className="slide-item p_relative">
                                                    <div className="visa-block-two">
                                                        <div className="inner-box">
                                                            <div className="static-content">
                                                                <div className="content-box">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                                                                    <h3><Link href="visa-details-4">Student Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Residence Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-14.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Tourist Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
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
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Residence Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-14.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Tourist Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
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
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Residence Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-14.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Tourist Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </SwiperSlide>
                                                    </div>
                                            </Swiper>
                                           
                                            <div className="content-three">
                                                <div className="row clearfix">
                                                    <div className="col-lg-5 col-md-6 col-sm-12 list-column">
                                                        <ul className="list-item clearfix mr_40">
                                                            <li>
                                                                <h5>Free Consultation</h5>
                                                                <span>Will do passively.</span>
                                                            </li>
                                                            <li>
                                                                <h5>Admission process</h5>
                                                                <span>Will do passively.</span>
                                                            </li>
                                                            <li>
                                                                <h5>Coaching Classes</h5>
                                                                <span>Conduct it yourself.</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-7 col-md-6 col-sm-12 inner-column">
                                                        <div className="inner-box">
                                                            <h3>Free Consultation</h3>
                                                            <p>stands for courtesy, accountability, responsibility, efficiency and service. “It is high time that law enforcement be professionalized,” said Morente. “We can implement our laws and policies, but as public servants, we are also expected to be courteous and responsible,” he added.</p>
                                                            <figure className="image-box"><img src="assets/images/resource/countries-16.jpg" alt="" /></figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="content-box">
                                            <div className="content-one mb_30">
                                                <div className="upper-text mb_30">
                                                    <h2>Visitor visas For United States</h2>
                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum.Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor tempus feugiat dolor and lacinia.Vivamus ac ultricies ex. Donec lacinia lacus libero.</p>
                                                </div>
                                                <div className="two-column mb_30">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                            <figure className="image-box"><img src="assets/images/resource/countries-13.jpg" alt="" /></figure>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                            <div className="text">
                                                                <h3>Morente reiterates rule on proper wearing of uniform</h3>
                                                                <p>In a memorandum issued on Wednesday, Morente stated that the BI has been receiving complaints about officials and employees who are not wearing their complete uniform during their tour of duty.</p>
                                                                <p>stands for courtesy, accountability, responsibility, efficiency and service. “It is high time that law enforcement be professionalized,” said Morente. “We can implement our laws and policies, but as public servants, we are also expected to be courteous and responsible,” he added.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <p>Are you interested in immigrating to the United States or want to sponsor someone? The United States provides for immigrant visas based on family ties, employment, adoption, special immigrant categories, and the diversity visa. Click on the icons below to learn more.</p>
                                                </div>
                                            </div>
                                            <Swiper {...swiperOptions} className="three-item-carousel-two owl-carousel owl-theme owl-nav-none">
                                            <div className="content-two mb_50">                    
                                             <SwiperSlide className="slide-item p_relative">
                                                    <div className="visa-block-two">
                                                        <div className="inner-box">
                                                            <div className="static-content">
                                                                <div className="content-box">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                                                                    <h3><Link href="visa-details-4">Student Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Residence Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-14.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Tourist Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
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
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Residence Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-14.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Tourist Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
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
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Residence Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-14.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Tourist Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </SwiperSlide>
                                                </div>
                                            </Swiper>
                                            <div className="content-three">
                                                <div className="row clearfix">
                                                    <div className="col-lg-5 col-md-6 col-sm-12 list-column">
                                                        <ul className="list-item clearfix mr_40">
                                                            <li>
                                                                <h5>Free Consultation</h5>
                                                                <span>Will do passively.</span>
                                                            </li>
                                                            <li>
                                                                <h5>Admission process</h5>
                                                                <span>Will do passively.</span>
                                                            </li>
                                                            <li>
                                                                <h5>Coaching Classes</h5>
                                                                <span>Conduct it yourself.</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-7 col-md-6 col-sm-12 inner-column">
                                                        <div className="inner-box">
                                                            <h3>Free Consultation</h3>
                                                            <p>stands for courtesy, accountability, responsibility, efficiency and service. “It is high time that law enforcement be professionalized,” said Morente. “We can implement our laws and policies, but as public servants, we are also expected to be courteous and responsible,” he added.</p>
                                                            <figure className="image-box"><img src="assets/images/resource/countries-16.jpg" alt="" /></figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="content-box">
                                            <div className="content-one mb_30">
                                                <div className="upper-text mb_30">
                                                    <h2>Education to United States</h2>
                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum.Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor tempus feugiat dolor and lacinia.Vivamus ac ultricies ex. Donec lacinia lacus libero.</p>
                                                </div>
                                                <div className="two-column mb_30">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                            <figure className="image-box"><img src="assets/images/resource/countries-13.jpg" alt="" /></figure>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                            <div className="text">
                                                                <h3>Morente reiterates rule on proper wearing of uniform</h3>
                                                                <p>In a memorandum issued on Wednesday, Morente stated that the BI has been receiving complaints about officials and employees who are not wearing their complete uniform during their tour of duty.</p>
                                                                <p>stands for courtesy, accountability, responsibility, efficiency and service. “It is high time that law enforcement be professionalized,” said Morente. “We can implement our laws and policies, but as public servants, we are also expected to be courteous and responsible,” he added.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <p>Are you interested in immigrating to the United States or want to sponsor someone? The United States provides for immigrant visas based on family ties, employment, adoption, special immigrant categories, and the diversity visa. Click on the icons below to learn more.</p>
                                                </div>
                                            </div>
                                            <Swiper {...swiperOptions} className="three-item-carousel-two owl-carousel owl-theme owl-nav-none">
                                            <div className="content-two mb_50">                    
                                             <SwiperSlide className="slide-item p_relative">
                                                    <div className="visa-block-two">
                                                        <div className="inner-box">
                                                            <div className="static-content">
                                                                <div className="content-box">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                                                                    <h3><Link href="visa-details-4">Student Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Residence Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-14.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Tourist Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
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
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Residence Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-14.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Tourist Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
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
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Residence Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-14.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Tourist Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </SwiperSlide>
                                                </div>
                                            </Swiper>
                                            <div className="content-three">
                                                <div className="row clearfix">
                                                    <div className="col-lg-5 col-md-6 col-sm-12 list-column">
                                                        <ul className="list-item clearfix mr_40">
                                                            <li>
                                                                <h5>Free Consultation</h5>
                                                                <span>Will do passively.</span>
                                                            </li>
                                                            <li>
                                                                <h5>Admission process</h5>
                                                                <span>Will do passively.</span>
                                                            </li>
                                                            <li>
                                                                <h5>Coaching Classes</h5>
                                                                <span>Conduct it yourself.</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-7 col-md-6 col-sm-12 inner-column">
                                                        <div className="inner-box">
                                                            <h3>Free Consultation</h3>
                                                            <p>stands for courtesy, accountability, responsibility, efficiency and service. “It is high time that law enforcement be professionalized,” said Morente. “We can implement our laws and policies, but as public servants, we are also expected to be courteous and responsible,” he added.</p>
                                                            <figure className="image-box"><img src="assets/images/resource/countries-16.jpg" alt="" /></figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="content-box">
                                            <div className="content-one mb_30">
                                                <div className="upper-text mb_30">
                                                    <h2>Tourist to United States</h2>
                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum.Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor tempus feugiat dolor and lacinia.Vivamus ac ultricies ex. Donec lacinia lacus libero.</p>
                                                </div>
                                                <div className="two-column mb_30">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                            <figure className="image-box"><img src="assets/images/resource/countries-13.jpg" alt="" /></figure>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                            <div className="text">
                                                                <h3>Morente reiterates rule on proper wearing of uniform</h3>
                                                                <p>In a memorandum issued on Wednesday, Morente stated that the BI has been receiving complaints about officials and employees who are not wearing their complete uniform during their tour of duty.</p>
                                                                <p>stands for courtesy, accountability, responsibility, efficiency and service. “It is high time that law enforcement be professionalized,” said Morente. “We can implement our laws and policies, but as public servants, we are also expected to be courteous and responsible,” he added.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <p>Are you interested in immigrating to the United States or want to sponsor someone? The United States provides for immigrant visas based on family ties, employment, adoption, special immigrant categories, and the diversity visa. Click on the icons below to learn more.</p>
                                                </div>
                                            </div>
                                            <Swiper {...swiperOptions} className="three-item-carousel-two owl-carousel owl-theme owl-nav-none">
                                            <div className="content-two mb_50">                    
                                             <SwiperSlide className="slide-item p_relative">
                                                    <div className="visa-block-two">
                                                        <div className="inner-box">
                                                            <div className="static-content">
                                                                <div className="content-box">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                                                                    <h3><Link href="visa-details-4">Student Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Residence Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-14.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Tourist Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
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
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Residence Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-14.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Tourist Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
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
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Residence Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-14.jpg" alt="" /></figure>
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
                                                                    <h3><Link href="visa-details-4">Tourist Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </SwiperSlide>
                                                </div>
                                            </Swiper>
                                            <div className="content-three">
                                                <div className="row clearfix">
                                                    <div className="col-lg-5 col-md-6 col-sm-12 list-column">
                                                        <ul className="list-item clearfix mr_40">
                                                            <li>
                                                                <h5>Free Consultation</h5>
                                                                <span>Will do passively.</span>
                                                            </li>
                                                            <li>
                                                                <h5>Admission process</h5>
                                                                <span>Will do passively.</span>
                                                            </li>
                                                            <li>
                                                                <h5>Coaching Classes</h5>
                                                                <span>Conduct it yourself.</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-7 col-md-6 col-sm-12 inner-column">
                                                        <div className="inner-box">
                                                            <h3>Free Consultation</h3>
                                                            <p>stands for courtesy, accountability, responsibility, efficiency and service. “It is high time that law enforcement be professionalized,” said Morente. “We can implement our laws and policies, but as public servants, we are also expected to be courteous and responsible,” he added.</p>
                                                            <figure className="image-box"><img src="assets/images/resource/countries-16.jpg" alt="" /></figure>
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
                 {/*countries details end*/}
                                

                            </Layout>
        </>
    )
}


