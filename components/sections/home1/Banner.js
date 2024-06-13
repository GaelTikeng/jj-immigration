
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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

export default function Banner() {
    return (
        <>
           <section className="banner-section p_relative">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}></div>
        <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
        <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
        <div className="pattern-4" style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}></div>
      </div>
                <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-dots-none">                    
                    <SwiperSlide className="slide-item p_relative">
                    <figure className="image-layer"><img src="assets/images/banner/banner-img-1.png" alt="" /></figure>
                  <div className="auto-container">
                    <div className="content-box">
                    <div className="experience-inner">
                                <figure className="logo-imgag"><img src="assets/images/icons/logo-1.png" alt="" /></figure>
                                <div className="text">30 Years</div>
                                <span>Experience</span>
                            </div>
                            <h2>Study In <span>Recognized</span> Universities!...</h2>
                            <p>MCS has been recruiting and prepping talented professionals for over twenty years. We provide a unique value proposition to both.</p>
                            <div className="btn-box">
                                <Link href="/" className="theme-btn btn-one"><span>More Details</span></Link>
                            </div>
                    </div>
                  </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                    <figure className="image-layer"><img src="assets/images/banner/banner-img-1.png" alt="" /></figure>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="experience-inner">
                                <figure className="logo-imgag"><img src="assets/images/icons/logo-1.png" alt="" /></figure>
                                <div className="text">30 Years</div>
                                <span>Experience</span>
                            </div>
                            <h2>Study In <span>Recognized</span> Universities!...</h2>
                            <p>MCS has been recruiting and prepping talented professionals for over twenty years. We provide a unique value proposition to both.</p>
                            <div className="btn-box">
                                <Link href="/" className="theme-btn btn-one"><span>More Details</span></Link>
                            </div>
                        </div> 
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                    <figure className="image-layer"><img src="assets/images/banner/banner-img-1.png" alt="" /></figure>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="experience-inner">
                                <figure className="logo-imgag"><img src="assets/images/icons/logo-1.png" alt="" /></figure>
                                <div className="text">30 Years</div>
                                <span>Experience</span>
                            </div>
                            <h2>Study In <span>Recognized</span> Universities!...</h2>
                            <p>MCS has been recruiting and prepping talented professionals for over twenty years. We provide a unique value proposition to both.</p>
                            <div className="btn-box">
                                <Link href="/" className="theme-btn btn-one"><span>More Details</span></Link>
                            </div>
                        </div> 
                    </div>
                    </SwiperSlide>
                </Swiper>
                <ul className="social-links clearfix">
                        <li><Link href="/">facebook</Link></li>
                        <li><Link href="/">Twitter</Link></li>
                        <li><Link href="/">Instagram</Link></li>
                    </ul>
                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                        <span className="icon-10"></span>
                        </button>
                        <button type="button" className="owl-next h1n">
                        <span className="icon-11"></span>
                        </button>
                    </div>
                  
            </section>
        </>
    )
}