'use client'
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link";
import React from 'react';
export default function About()  {
  return (
    <section className="about-style-two p_relative">
    <div className="pattern-layer">
      <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-28.png)' }}></div>
      <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-29.png)' }}></div>
    </div>
    <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <figure className="image-box"><img src="assets/images/resource/about-1.png" alt="" /></figure>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_four">
                            <div className="content-box">
                                <div className="sec-title mb_25">
                                    <span className="sub-title">About our Agency</span>
                                    <h2>Leading firm for immigration consulting services.</h2>
                                </div>
                                <div className="text mb_35">
                                    <h5>Since 1985, Reliable Service has been servicing its clients...</h5>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum.Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor tempus feugiat dolor and lacinia</p>
                                </div>
                                <div className="funfact-inner centred">
                                    <div className="funfact-block">
                                    <div className="count-outer count-box">
                                    <CounterUp end={25} /><span>+</span>
                                </div>
                                        <p>Offices Worldwide</p>
                                        <div className="link"><Link href="index-2"><i className="icon-9"></i></Link></div>
                                    </div>
                                    <div className="funfact-block">
                                    <div className="count-outer count-box">
                                    <CounterUp end={365} />
                                </div>
                                        <p>Team Members</p>
                                        <div className="link"><Link href="index-2"><i className="icon-9"></i></Link></div>
                                    </div>
                                    <div className="funfact-block">
                                    <div className="count-outer count-box">
                                    <CounterUp end={10} /><span>.1k</span>
                                </div>
                                        <p>Visa Processed</p>
                                        <div className="link"><Link href="index-2"><i className="icon-9"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  );
};

