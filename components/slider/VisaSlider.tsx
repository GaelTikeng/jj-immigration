"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// import VisaCart from "../molecules/visaCart";
import dynamic from 'next/dynamic';

const VisaCart = dynamic(() => import('../molecules/visaCart'), {
  ssr: false,
});

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
  },
};

const visaCartDetails = [
  {
    imgSrc: "assets/images/resource/businessvisa.png",
    visaType: "Student Visa",
    smallDescription:
      "Angula Sed gravida nisl a porta tincidunt. Integertheoo aliquam nisi",
    visaOption: [
      "Nulla nulla erat, gravida at leo",
      "Amet minim mollit no duis deserut",
      "Amet minim mollit no duis desert from sahara",
    ],
    detailRef: "visa-details-4",
  },
  {
    imgSrc: "assets/images/resource/businessvisa.png",
    visaType: "Residence Visa",
    smallDescription:
      "Nextjs Sed gravida nisl a porta tincidunt. Integertheoo aliquam nis",
    visaOption: [
      "Nulla nulla erat, gravida at leo",
      "Amet minim mollit no duis deserut",
      "Amet minim mollit no duis desert from sahara",
    ],
    detailRef: "visa-details-3",
  },
  {
    imgSrc: "assets/images/resource/bvisa.png",
    visaType: "Business Visa",
    smallDescription:
      "Nestjs Sed gravida nisl a porta tincidunt. Integertheoo aliquam nis",
    visaOption: [
      "Nulla nulla erat, gravida at leo",
      "Amet minim mollit no duis deserut",
      "Amet minim mollit no duis desert from sahara",
    ],
    detailRef: "visa-details",
  },
  // {
  //   imgSrc: "assets/images/resource/visa-1.jpg",
  //   visaType: "Student Visa",
  //   smallDescription:
  //     "Reactjs Sed gravida nisl a porta tincidunt. Integertheoo aliquam nis",
  //   visaOption: [
  //     "Nulla nulla erat, gravida at leo",
  //     "Amet minim mollit no duis deserut",
  //     "Amet minim mollit no duis desert from sahara",
  //   ],
  //   detailRef: "visa-details-4",
  // },
];

export default function VisaSlider() {
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one"
      >
        {visaCartDetails?.map((item, indx) => (
          <SwiperSlide key={indx} className="slide-item">
            <VisaCart
              imgSrc={item.imgSrc}
              visaType={item.visaType}
              smallDescription={item.smallDescription}
              visaOptions={item.visaOption}
              detailRef={item.detailRef}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
