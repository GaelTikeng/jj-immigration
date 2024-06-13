import Link from 'next/link';
import React from 'react';

const CountryBlock = ({ imageUrl, countryName }) => (
  <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
    <div className="countries-block-two">
      <div className="inner-box">
        <figure className="image-box"><img src={imageUrl} alt={`Image of ${countryName} Visa`} /></figure>
        <div className="text">
          <h3><Link href="index-2">{countryName} Visa</Link></h3>
        </div>
      </div>
    </div>
  </div>
);

export default function Countries() {
    return(
  <section className="countries-style-two centred p_relative">
    <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/countries-bg.jpg)' }}></div>
    <div className="auto-container">
      <div className="sec-title centred mb_50 light">
        <span className="sub-title">COUNTRIES WE OFFER SUPPORT</span>
        <h2>Apply For Quick Visa</h2>
      </div>
      <div className="row clearfix">
        <CountryBlock imageUrl="assets/images/resource/countries-5.jpg" countryName="Brazil" />
        <CountryBlock imageUrl="assets/images/resource/countries-6.jpg" countryName="China" />
        <CountryBlock imageUrl="assets/images/resource/countries-7.jpg" countryName="Vietnam" />
        <CountryBlock imageUrl="assets/images/resource/countries-8.jpg" countryName="India" />
      </div>
    </div>
  </section>
);
}