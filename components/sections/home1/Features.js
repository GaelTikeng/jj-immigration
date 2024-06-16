"use client";
import Link from "next/link";
import React from "react";
export default function Feature() {
  return (
    <section className="feature-section">
      <div className="auto-container">
        <div className="inner-container">
          <div
            className="shape"
            style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}
          ></div>
          <div className="row clearfix">
            {/* Repeat this block structure for each feature */}
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-17"></i>
                  </div>
                  <h3>
                    <Link href="/">Visa</Link>
                  </h3>
                  <p>
                    Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit
                    amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-19"></i>
                  </div>
                  <h3>
                    <Link href="/">Immigration</Link>
                  </h3>
                  <p>
                    Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit
                    amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-20"></i>
                  </div>
                  <h3>
                    <Link href="/">Translation</Link>
                  </h3>
                  <p>
                    Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit
                    amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
