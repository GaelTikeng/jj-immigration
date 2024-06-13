import TestmonialSlider from '@/components/slider/TestmonialSlider';
import React from 'react';

export default function Testmonial() {
  return (
    <section className="testimonial-section p_relative centred">
    <div className="pattern-layer">
      <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-35.png)" }}></div>
      <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-36.png)" }}></div>
    </div>
    <div className="thumb-box">
      <div className="thumb thumb-1"><img src="assets/images/resource/thumb-1.png" alt="" /></div>
      <div className="thumb thumb-2"><img src="assets/images/resource/thumb-2.png" alt="" /></div>
      <div className="thumb thumb-3"><img src="assets/images/resource/thumb-3.png" alt="" /></div>
      <div className="thumb thumb-4"><img src="assets/images/resource/thumb-4.png" alt="" /></div>
    </div>
    <div className="auto-container">
                    <div className="content-box">
                        {/*Theme Carousel*/}
                        <TestmonialSlider />                        
                    </div>
            </div>
            </section>
        );
        };

