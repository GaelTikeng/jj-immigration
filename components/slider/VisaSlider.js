'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}
export default function VisaSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                <SwiperSlide className="slide-item">
                <div className="visa-block-one">
            <div className="inner-box">
              <figure className="image-box"><img src="assets/images/resource/visa-1.jpg" alt="" /></figure>
              <div className="lower-content">
                <div className="icon-box"><i className="icon-12"></i></div>
                <h3><Link href="visa-details-4">Student Visa</Link></h3>
                <p>Sed gravida nisl a porta tincidunt. Integertheoo aliquam nisi sit amet.</p>
                <ul className="list-style-one clearfix">
                  <li>Nulla nulla erat, gravida at leo</li>
                  <li>Amet minim mollit no duis deserut</li>
                  <li>dolor do amet sint Velit officia</li>
                </ul>
                <div className="link-btn">
                  <Link href="visa-details-4"><span>Read More</span></Link>
                </div>
              </div>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-one">
              <div className="inner-box">
                  <figure className="image-box"><img src="assets/images/resource/visa-2.jpg" alt="" /></figure>
                  <div className="lower-content">
                      <div className="icon-box"><i className="icon-13"></i></div>
                      <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                      <p>Sed gravida nisl a porta tincidunt. Integertheoo aliquam nisi sit amet.</p>
                      <ul className="list-style-one clearfix">
                          <li>Quisque tincidunt porta libero</li>
                          <li>Donec magna sem, consectetur</li>
                          <li>Pellentesque consequat dignissim velit</li>
                      </ul>
                      <div className="link-btn">
                          <Link href="visa-details-3"><span>Read More</span></Link>
                      </div>
                  </div>
              </div>
            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/visa-3.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="icon-14"></i></div>
                                <h3><Link href="visa-details">Business Visa</Link></h3>
                                <p>Sed gravida nisl a porta tincidunt. Integertheoo aliquam nisi sit amet.</p>
                                <ul className="list-style-one clearfix">
                                    <li>Aliquam molestie risus sit amet ex</li>
                                    <li>vitae varius quam consequat</li>
                                    <li>Praesent in aliquam felis, vitae</li>
                                </ul>
                                <div className="link-btn">
                                    <Link href="visa-details"><span>Read More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-one">
            <div className="inner-box">
              <figure className="image-box"><img src="assets/images/resource/visa-1.jpg" alt="" /></figure>
              <div className="lower-content">
                <div className="icon-box"><i className="icon-12"></i></div>
                <h3><Link href="visa-details-4">Student Visa</Link></h3>
                <p>Sed gravida nisl a porta tincidunt. Integertheoo aliquam nisi sit amet.</p>
                <ul className="list-style-one clearfix">
                  <li>Nulla nulla erat, gravida at leo</li>
                  <li>Amet minim mollit no duis deserut</li>
                  <li>dolor do amet sint Velit officia</li>
                </ul>
                <div className="link-btn">
                  <Link href="visa-details-4"><span>Read More</span></Link>
                </div>
              </div>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-one">
              <div className="inner-box">
                  <figure className="image-box"><img src="assets/images/resource/visa-2.jpg" alt="" /></figure>
                  <div className="lower-content">
                      <div className="icon-box"><i className="icon-13"></i></div>
                      <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                      <p>Sed gravida nisl a porta tincidunt. Integertheoo aliquam nisi sit amet.</p>
                      <ul className="list-style-one clearfix">
                          <li>Quisque tincidunt porta libero</li>
                          <li>Donec magna sem, consectetur</li>
                          <li>Pellentesque consequat dignissim velit</li>
                      </ul>
                      <div className="link-btn">
                          <Link href="visa-details-3"><span>Read More</span></Link>
                      </div>
                  </div>
              </div>
            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/visa-3.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="icon-14"></i></div>
                                <h3><Link href="visa-details">Business Visa</Link></h3>
                                <p>Sed gravida nisl a porta tincidunt. Integertheoo aliquam nisi sit amet.</p>
                                <ul className="list-style-one clearfix">
                                    <li>Aliquam molestie risus sit amet ex</li>
                                    <li>vitae varius quam consequat</li>
                                    <li>Praesent in aliquam felis, vitae</li>
                                </ul>
                                <div className="link-btn">
                                    <Link href="visa-details"><span>Read More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
