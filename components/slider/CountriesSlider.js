'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
    }
}
export default function CountriesSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="four-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
            <div className="inner-box">
              <div className="flag"><img src="assets/images/icons/flag-13.png" alt="" /></div>
              <h3><Link href="index-3">United Kingdom</Link></h3>
              <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
              <div className="text">Visa Type :</div>
              <span className="designation">Working Visa, Job Visa</span>
            </div>
            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
            <div className="inner-box">
              <div className="flag"><img src="assets/images/icons/flag-14.png" alt="" /></div>
              <h3><Link href="index-3">Bahamas</Link></h3>
              <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
              <div className="text">Visa Type :</div>
              <span className="designation">Education Visa, Only System</span>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
            <div className="inner-box">
              <div className="flag"><img src="assets/images/icons/flag-15.png" alt="" /></div>
              <h3><Link href="index-3">Canada</Link></h3>
              <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
              <div className="text">Visa Type :</div>
              <span className="designation">Resident Visa Job Visa</span>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
            <div className="inner-box">
              <div className="flag"><img src="assets/images/icons/flag-16.png" alt="" /></div>
              <h3><Link href="index-3">Brazil</Link></h3>
              <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
              <div className="text">Visa Type :</div>
              <span className="designation">Student Visa & Admission, Visitor Visa</span>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
            <div className="inner-box">
              <div className="flag"><img src="assets/images/icons/flag-13.png" alt="" /></div>
              <h3><Link href="index-3">United Kingdom</Link></h3>
              <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
              <div className="text">Visa Type :</div>
              <span className="designation">Working Visa, Job Visa</span>
            </div>
            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
            <div className="inner-box">
              <div className="flag"><img src="assets/images/icons/flag-14.png" alt="" /></div>
              <h3><Link href="index-3">Bahamas</Link></h3>
              <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
              <div className="text">Visa Type :</div>
              <span className="designation">Education Visa, Only System</span>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
            <div className="inner-box">
              <div className="flag"><img src="assets/images/icons/flag-15.png" alt="" /></div>
              <h3><Link href="index-3">Canada</Link></h3>
              <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
              <div className="text">Visa Type :</div>
              <span className="designation">Resident Visa Job Visa</span>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
            <div className="inner-box">
              <div className="flag"><img src="assets/images/icons/flag-16.png" alt="" /></div>
              <h3><Link href="index-3">Brazil</Link></h3>
              <p>Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget</p>
              <div className="text">Visa Type :</div>
              <span className="designation">Student Visa & Admission, Visitor Visa</span>
            </div>
          </div>
                </SwiperSlide>
                <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                        <span className="icon-10"></span>
                        </button>
                        <button type="button" className="owl-next h1n">
                        <span className="icon-11"></span>
                        </button>
                    </div>
            </Swiper>
        </>
    )
}
