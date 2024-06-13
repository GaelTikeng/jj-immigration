import Link from 'next/link';
import React from 'react';
const ProgressBar = ({ label, percent }) => (
    <div className="progress-box">
      <p>{label}</p>
      <div className="bar">
        <div className="bar-inner count-bar" style={{ width: `${percent}%` }}></div>
        <div className="count-text">{`${percent}%`}</div>
      </div>
    </div>
  );

export default function Skills() {
  return (
    <section className="skills-section alternat-2 pt_200 pb_150">
      <div className="pattern-layer-2" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
      <div className="pattern-layer-3" style={{ backgroundImage: 'url(assets/images/shape/shape-50.png)' }}></div>
      <figure className="image-layer"><img src="assets/images/resource/travel-2.png" alt="" /></figure>
      <div className="auto-container">
        <div className="content_block_five">
          <div className="content-box">
            <div className="sec-title mb_30">
              <span className="sub-title">Open house invitations & event registration.</span>
              <h2>Our competitive initiatives have impacted us.</h2>
            </div>
            <div className="text mb_30">
              <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum.</p>
            </div>
            <div className="progress-inner mb_65">
            <div className="progress-box mb_25">
          <ProgressBar label="Student Visa" percent={90} />
          <ProgressBar label="Business Visa" percent={70} />
          </div>
          <div className="progress-box">
          <ProgressBar label="Residence Visa" percent={80} />
          </div>
          </div>
            <div className="btn-box">
              <Link href="index-2" className="theme-btn btn-two"><span>More Details</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

