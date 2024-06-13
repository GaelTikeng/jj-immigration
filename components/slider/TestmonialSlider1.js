'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnMaven_Proaction: false,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function TestmonialSlider1() {
    return (
        <>
             <Swiper {...swiperOptions} className="two-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                        <SwiperSlide className="slide-item p_relative">
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/testimonial-2.jpg" alt="" /></figure>
                            <div className="content-box">
                                <ul className="rating mb_15 clearfix">
                                <li><i className="icon-15"></i></li>
                                <li><i className="icon-15"></i></li>
                                <li><i className="icon-15"></i></li>
                                <li><i className="icon-15"></i></li>
                                <li><i className="icon-15"></i></li>
                                </ul>
                                <h3>Thank you for immigr...</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet fringilla nulla in pulvinar orci sagittis est. Non a, convallis odio est.</p>
                                <h5>Jemmy Catter / <span>CEO Founder</span></h5>
                            </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item p_relative">
                        <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/testimonial-3.jpg" alt="" /></figure>
                            <div className="content-box">
                                <ul className="rating mb_15 clearfix">
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                </ul>
                                <h3>Thank you for immigr...</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet fringilla nulla in pulvinar orci sagittis est. Non a, convallis odio est.</p>
                                <h5>Carwl William / <span>CTO</span></h5>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                        <SwiperSlide className="slide-item p_relative">
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/testimonial-2.jpg" alt="" /></figure>
                            <div className="content-box">
                                <ul className="rating mb_15 clearfix">
                                <li><i className="icon-15"></i></li>
                                <li><i className="icon-15"></i></li>
                                <li><i className="icon-15"></i></li>
                                <li><i className="icon-15"></i></li>
                                <li><i className="icon-15"></i></li>
                                </ul>
                                <h3>Thank you for immigr...</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet fringilla nulla in pulvinar orci sagittis est. Non a, convallis odio est.</p>
                                <h5>Jemmy Catter / <span>CEO Founder</span></h5>
                            </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item p_relative">
                        <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/testimonial-3.jpg" alt="" /></figure>
                            <div className="content-box">
                                <ul className="rating mb_15 clearfix">
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                </ul>
                                <h3>Thank you for immigr...</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet fringilla nulla in pulvinar orci sagittis est. Non a, convallis odio est.</p>
                                <h5>Carwl William / <span>CTO</span></h5>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                        <SwiperSlide className="slide-item p_relative">
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/testimonial-2.jpg" alt="" /></figure>
                            <div className="content-box">
                                <ul className="rating mb_15 clearfix">
                                <li><i className="icon-15"></i></li>
                                <li><i className="icon-15"></i></li>
                                <li><i className="icon-15"></i></li>
                                <li><i className="icon-15"></i></li>
                                <li><i className="icon-15"></i></li>
                                </ul>
                                <h3>Thank you for immigr...</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet fringilla nulla in pulvinar orci sagittis est. Non a, convallis odio est.</p>
                                <h5>Jemmy Catter / <span>CEO Founder</span></h5>
                            </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item p_relative">
                        <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/testimonial-3.jpg" alt="" /></figure>
                            <div className="content-box">
                                <ul className="rating mb_15 clearfix">
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                </ul>
                                <h3>Thank you for immigr...</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet fringilla nulla in pulvinar orci sagittis est. Non a, convallis odio est.</p>
                                <h5>Carwl William / <span>CTO</span></h5>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                        </Swiper>
        </>
    )
}
