import VisaSlider from '@/components/slider/VisaSlider'
import Link from 'next/link';
import React from 'react';

export default function Visa() {
  return (
    <section className="visa-section sec-pad">
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-5.png)' }}></div>
      <div className="auto-container">
        <div className="sec-title centred mb_50">
          <span className="sub-title">Visa Categories</span>
          <h2>Assisting you in fulfilling your eligibility <br />for immigrant registration.</h2>
        </div>
                    <div className="content-box">
                        {/*Theme Carousel*/}
                        <VisaSlider />                        
                    </div>
            </div>
            </section>
        );
        };

