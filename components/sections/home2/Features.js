import Link from 'next/link';
import React from 'react';

const FeatureBlock = ({ iconClass, title, description }) => (
  <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
    <div className="feature-block-one">
      <div className="inner-box">
        <div className="icon-box"><i className={iconClass}></i></div>
        <h3><Link href="/">{title}</Link></h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default function Feature() {
  return(
  <section className="feature-section alternat-2">
    <div className="auto-container">
      <div className="inner-container">
        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-7.png)' }}></div>
        <div className="row clearfix">
          <FeatureBlock iconClass="icon-17" title="Visa" description="Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet." />
          <FeatureBlock iconClass="icon-18" title="Passport" description="Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet." />
          <FeatureBlock iconClass="icon-19" title="Immigration" description="Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet." />
          <FeatureBlock iconClass="icon-20" title="Translation" description="Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet." />
        </div>
      </div>
    </div>
  </section>
);
}
