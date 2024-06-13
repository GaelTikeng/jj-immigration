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
  <section className="skills-section sec-pad">
    <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-32.png)' }}></div>
    <figure className="image-layer"><img src="assets/images/resource/travel-1.png" alt="" /></figure>
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
          <ProgressBar label="Student Visa" percent={90} />
          <ProgressBar label="Business Visa" percent={70} />
          <ProgressBar label="Residence Visa" percent={80} />
          </div>
          <div className="btn-box">
            <Link href="index-2" className="theme-btn btn-one"><span>More Details</span></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

