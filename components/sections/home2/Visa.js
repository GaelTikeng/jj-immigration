import VisaSlider1 from "../../../components/slider/VisaSlider1";
import Link from "next/link";
import React from "react";

export default function Visa() {
  return (
    <section className="visa-style-two pt_140 pb_80">
      <div className="auto-container">
        <div className="sec-title centred mb_50">
          <span className="sub-title">Visa Categories</span>
          <h2>
            Translation Services Inc. offers comprehensive <br />
            immigration services.
          </h2>
        </div>
        <div className="content-box">
          {/*Theme Carousel*/}
          <VisaSlider1 />
        </div>
      </div>
    </section>
  );
}
