import CountriesSlider from "../../../components/slider/CountriesSlider";
import Link from "next/link";
import React from "react";

export default function Countries() {
  return (
    <section className="countries-style-four sec-pad">
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(assets/images/shape/shape-48.png)" }}
      ></div>
      <div className="auto-container">
        <div className="sec-title centred mb_60">
          <span className="sub-title">Countries We Offer</span>
          <h2>
            Immigration Officials approvals for foreign <br />
            citizens can vary by country.
          </h2>
        </div>
        <div className="content-box">
          {/*Theme Carousel*/}
          <CountriesSlider />
        </div>
      </div>
    </section>
  );
}
