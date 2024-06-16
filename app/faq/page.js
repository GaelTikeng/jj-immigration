'use client'
import Link from "next/link";
import Layout from "../../components/layout/Layout"
import { useState } from 'react'
export default function WhyChooseUs() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <> 
        <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Faq"> 

         {/* help-style */}
         <section className="help-section alternat-2 p_relative">
      <div className="auto-container">
        <div className="sec-title mb_60">
          <span className="sub-title">HOW WE HELP CLIENTS</span>
          <h2>Follow the steps on the website <br />to apply for the visa online.</h2>
        </div>
        <div className="row clearfix">
          {/* Step 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon mb_18"><i className="icon-42"></i></div>
                  <span className="count-text">01</span>
                </div>
                <h3><Link href="index-3">Fill In The <br />Required Form</Link></h3>
                <p>Equally blame belongs to those who fail in their duty through weak shrinking.</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="count-text">02</span>
                  <div className="icon mt_18"><i className="icon-43"></i></div>
                </div>
                <h3><Link href="index-3">Submit All Your <br />Attested Documents</Link></h3>
                <p>Equally blame belongs to those who fail in their duty through weak shrinking.</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon mb_13"><i className="icon-44"></i></div>
                  <span className="count-text">03</span>
                </div>
                <h3><Link href="index-3">Get Ready To <br />Receive your Visa</Link></h3>
                <p>Equally blame belongs to those who fail in their duty through weak shrinking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
            {/* help end */}        

            <section className="faq-section pb_150">
      <div className="auto-container">
        <div className="sec-title mb_60">
          <span className="sub-title">Expert Team Members</span>
          <h2>Get Every Able Answers</h2>
          <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum.Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor tempus feugiat dolor and lacinia</p>
        </div>
        <div className="row clearfix">
          {/* FAQ Column 1 */}
          <div className="col-lg-6 col-md-12 col-sm-12 faq-column">
            <div className="faq-content">
              <h3>General Questions</h3>
              <ul className="accordion-box">
                {/* FAQ Item 1 */}
                <li className="accordion block active-block">
                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                    <div className="icon-box"></div>
                    <h5>Flipper lives in a world brimming with amazement?</h5>
                  </div>
                  <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                      <p>Donec ornare sem at tincidunt pharetra. Nam viverra fringilla sem ac molestie. Sed varius scelerisque quam pellentesque porttitor. Suspendisse fermentum luctus dui, vitae cursus turpis. Etiam non tempus orci.</p>
                    </div>
                  </div>
                </li>
                {/* FAQ Item 2 */}
                <li className="accordion block">
                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-box"></div>
   
                    <h5>A break commando unit was shipped off jail?</h5>
                  </div>
                  <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                      <p>Donec ornare sem at tincidunt pharetra. Nam viverra fringilla sem ac molestie. Sed varius scelerisque quam pellentesque porttitor. Suspendisse fermentum luctus dui, vitae cursus turpis. Etiam non tempus orci.</p>
                    </div>
                  </div>
                </li>
                {/* FAQ Item 3 */}
                <li className="accordion block">
                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-box"></div>
      
                    <h5>Mauris ac tempor sem. Nullam et porta urna ?</h5>
                  </div>
                  <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                      <p>Donec ornare sem at tincidunt pharetra. Nam viverra fringilla sem ac molestie. Sed varius scelerisque quam pellentesque porttitor. Suspendisse fermentum luctus dui, vitae cursus turpis. Etiam non tempus orci.</p>
                    </div>
                  </div>
                </li>
                {/* FAQ Item 4 */}
                <li className="accordion block">
                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}><div className="icon-box"></div>
         
                    <h5>Nam congue a nisl non auctor Interdum  ?</h5>
                  </div>
                  <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                      <p>Donec ornare sem at tincidunt pharetra. Nam viverra fringilla sem ac molestie. Sed varius scelerisque quam pellentesque porttitor. Suspendisse fermentum luctus dui, vitae cursus turpis. Etiam non tempus orci.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Column 2 */}
          <div className="col-lg-6 col-md-12 col-sm-12 faq-column">
            <div className="faq-content">
              <h3>Tourist & Visitor Visa</h3>
              <ul className="accordion-box">
                {/* FAQ Item 1 */}
                <li className="accordion block">
                <div className={isActive.key == 5 ? "acc-btn" : "acc-btn"} onClick={() => handleToggle(5)}>
                    <div className="icon-box"></div>
                    <h5>Flipper lives in a world brimming with amazement?</h5>
                  </div>
                  <div className={isActive.key == 5 ? "acc-content" : "acc-content"}>
                    <div className="text">
                      <p>Donec ornare sem at tincidunt pharetra. Nam viverra fringilla sem ac molestie. Sed varius scelerisque quam pellentesque porttitor. Suspendisse fermentum luctus dui, vitae cursus turpis. Etiam non tempus orci.</p>
                    </div>
                  </div>
                </li>
                {/* FAQ Item 2 */}
                <li className="accordion block">
                <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}><div className="icon-box"></div>
                  
                    <h5>A break commando unit was shipped off jail?</h5>
                  </div>
                  <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                      <p>Donec ornare sem at tincidunt pharetra. Nam viverra fringilla sem ac molestie. Sed varius scelerisque quam pellentesque porttitor. Suspendisse fermentum luctus dui, vitae cursus turpis. Etiam non tempus orci.</p>
                    </div>
                  </div>
                </li>
                {/* FAQ Item 3 */}
                <li className="accordion block">
                <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(7)}><div className="icon-box"></div>
                   
                    <h5>Mauris ac tempor sem. Nullam et porta urna ?</h5>
                  </div>
                  <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                      <p>Donec ornare sem at tincidunt pharetra. Nam viverra fringilla sem ac molestie. Sed varius scelerisque quam pellentesque porttitor. Suspendisse fermentum luctus dui, vitae cursus turpis. Etiam non tempus orci.</p>
                    </div>
                  </div>
                </li>
                {/* FAQ Item 4 */}
                <li className="accordion block">
                <div className={isActive.key == 8 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(8)}><div className="icon-box"></div>
                 
                    <h5>Nam congue a nisl non auctor Interdum  ?</h5>
                  </div>
                 <div className={isActive.key == 8 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                      <p>Donec ornare sem at tincidunt pharetra. Nam viverra fringilla sem ac molestie. Sed varius scelerisque quam pellentesque porttitor. Suspendisse fermentum luctus dui, vitae cursus turpis. Etiam non tempus orci.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
                </Layout>   
        </>
    )
}



