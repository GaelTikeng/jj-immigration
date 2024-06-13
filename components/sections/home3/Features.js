import React from 'react';
import Link from 'next/link';
export default function Features() {
    return (
        <section className="feature-section alternat-3">
      <div className="auto-container">
        <div className="inner-container">
          <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-41.png)' }}></div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-17"></i></div>
                  <h3><Link href="/">Visa</Link></h3>
                  <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-18"></i></div>
                  <h3><Link href="/">Passport</Link></h3>
                  <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-19"></i></div>
                  <h3><Link href="/">Immigration</Link></h3>
                  <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-20"></i></div>
                  <h3><Link href="/">Translation</Link></h3>
                  <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

