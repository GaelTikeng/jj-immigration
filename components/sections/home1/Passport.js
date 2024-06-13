import React from 'react';

export default function Passport() {
  return (
    <section className="passport-section centred p_relative">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-20.png)" }}></div>
        <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
        <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-22.png)" }}></div>
      </div>
      <div className="auto-container">
        <div className="inner-box p_relative">
          <figure className="image-box"><img src="assets/images/icons/passport-1.png" alt="" /></figure>
        </div>
      </div>
    </section>
  );
};

