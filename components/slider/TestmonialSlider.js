"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnMaven_Proaction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
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
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
  },
};
export default function TestmonialSlider() {
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one"
      >
        <SwiperSlide className="slide-item">
          <div className="testimonial-content">
            <div className="icon-box">
              <img src="assets/images/icons/quote-1.png" alt="" />
            </div>
            <figure className="thumb-box">
              <img src="assets/images/resource/testimonial-1.jpg" alt="" />
            </figure>
            <ul className="rating clearfix">
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
            </ul>
            <h2>Thank you for immigr...</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet
              fringilla nulla in pulvinar orci sagittis est. Non a, convallis
              odio est, sollicitudin sagittis nullam sit. Sed id pellentesque
              viverra scelerisque id eu. Orci elementum amet.
            </p>
            <h5>
              Jemmy Catter / <span>CEO Founder</span>
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-content">
            <div className="icon-box">
              <img src="assets/images/icons/quote-1.png" alt="" />
            </div>
            <figure className="thumb-box">
              <img src="assets/images/resource/testimonial-1.jpg" alt="" />
            </figure>
            <ul className="rating clearfix">
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
            </ul>
            <h2>Thank you for immigr...</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet
              fringilla nulla in pulvinar orci sagittis est. Non a, convallis
              odio est, sollicitudin sagittis nullam sit. Sed id pellentesque
              viverra scelerisque id eu. Orci elementum amet.
            </p>
            <h5>
              Jemmy Catter / <span>CEO Founder</span>
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-content">
            <div className="icon-box">
              <img src="assets/images/icons/quote-1.png" alt="" />
            </div>
            <figure className="thumb-box">
              <img src="assets/images/resource/testimonial-1.jpg" alt="" />
            </figure>
            <ul className="rating clearfix">
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
            </ul>
            <h2>Thank you for immigr...</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet
              fringilla nulla in pulvinar orci sagittis est. Non a, convallis
              odio est, sollicitudin sagittis nullam sit. Sed id pellentesque
              viverra scelerisque id eu. Orci elementum amet.
            </p>
            <h5>
              Jemmy Catter / <span>CEO Founder</span>
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-content">
            <div className="icon-box">
              <img src="assets/images/icons/quote-1.png" alt="" />
            </div>
            <figure className="thumb-box">
              <img src="assets/images/resource/testimonial-1.jpg" alt="" />
            </figure>
            <ul className="rating clearfix">
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
            </ul>
            <h2>Thank you for immigr...</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet
              fringilla nulla in pulvinar orci sagittis est. Non a, convallis
              odio est, sollicitudin sagittis nullam sit. Sed id pellentesque
              viverra scelerisque id eu. Orci elementum amet.
            </p>
            <h5>
              Jemmy Catter / <span>CEO Founder</span>
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-content">
            <div className="icon-box">
              <img src="assets/images/icons/quote-1.png" alt="" />
            </div>
            <figure className="thumb-box">
              <img src="assets/images/resource/testimonial-1.jpg" alt="" />
            </figure>
            <ul className="rating clearfix">
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
            </ul>
            <h2>Thank you for immigr...</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet
              fringilla nulla in pulvinar orci sagittis est. Non a, convallis
              odio est, sollicitudin sagittis nullam sit. Sed id pellentesque
              viverra scelerisque id eu. Orci elementum amet.
            </p>
            <h5>
              Jemmy Catter / <span>CEO Founder</span>
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-content">
            <div className="icon-box">
              <img src="assets/images/icons/quote-1.png" alt="" />
            </div>
            <figure className="thumb-box">
              <img src="assets/images/resource/testimonial-1.jpg" alt="" />
            </figure>
            <ul className="rating clearfix">
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
              <li>
                <i className="icon-15"></i>
              </li>
            </ul>
            <h2>Thank you for immigr...</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet
              fringilla nulla in pulvinar orci sagittis est. Non a, convallis
              odio est, sollicitudin sagittis nullam sit. Sed id pellentesque
              viverra scelerisque id eu. Orci elementum amet.
            </p>
            <h5>
              Jemmy Catter / <span>CEO Founder</span>
            </h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
