'use client'
import Link from "next/link";
import Layout from "../../components/layout/Layout";

import { useState } from 'react'
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(4)
  const handleOnClick = (index) => {
      setActiveIndex(index)
  }
    const [isOpen, setOpen] = useState(false)
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
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Student Visas">
                {/* visa details section */}
                <section className="visa-details p_relative">
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="visa-sidebar default-sidebar">
                        <div className="sidebar-widget category-widget">
                            <ul className="category-list clearfix">
                            <li><Link href="visa-details">Business Visa</Link></li>
                            <li><Link href="visa-details-2">Working Visas</Link></li>
                            <li><Link href="visa-details-3">Residence Visas</Link></li>
                            <li><Link href="visa-details-4" className="current">Student Visas</Link></li>
                            <li><Link href="visa-details-5">Spouse/Family Visas</Link></li>
                            <li><Link href="visa-details-6">Tourist Visas</Link></li>
                            </ul>
                        </div>
                        <div className="sidebar-widget travel-widget">
                            <div className="widget-content p_relative">
                            <figure className="image-box"><img src="assets/images/resource/travel-1.jpg" alt="" /></figure>
                            <div className="content-box">
                                <h3>Travel Pass</h3>
                                <ul className="list-item clearfix">
                                <li>Application Form</li>
                                <li>Checklist</li>
                                <li>Guidelines</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="sidebar-widget download-widget">
                            <div className="widget-content">
                            <div className="icon-shape"><img src="assets/images/icons/icon-15.png" alt="" /></div>
                            <h3>Annual Report / <br />Online Appointment</h3>
                            <ul className="download-list clearfix">
                                <li>
                                <Link href="visa-details">
                                    <i className="icon-50"></i>
                                    <p>Application Form</p>
                                    <span>450kb</span>
                                </Link>
                                </li>
                                <li>
                                <Link href="visa-details">
                                    <i className="icon-50"></i>
                                    <p>Application Form</p>
                                    <span>450kb</span>
                                </Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="visa-details-content">
                        <div className="content-one mb_60">
                            <div className="text mb_45">
                            <h2>Business Visa</h2>
                            <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum. Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor tempus feugiat dolor and lacinia. Vivamus ac ultricies ex. Donec lacinia lacus libero.</p>
                            </div>
                            <figure className="image-box"><img src="assets/images/resource/visa-19.jpg" alt="" /></figure>
                            <div className="lower-text">
                            <p>A foreign national traveling to the United States to conduct temporary business needs a visitor visa (B-1) unless qualifying for entry under the Visa Waiver Program.</p>
                            </div>
                        </div>
                        <div className="content-two mb_35">
                            <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                <div className="left-content">
                                <h3>Morente reiterates rule on proper wearing of uniform</h3>
                                <p>In a memorandum issued on Wednesday, Morente stated that the BI has been receiving complaints about officials and employees who are not wearing their complete uniform during their tour of duty.</p>
                                <p>Stands for courtesy, accountability, responsibility, efficiency and service. “It is high time that law enforcement be professionalized,” said Morente. “We can implement our laws and policies, but as public servants, we are also expected to be courteous and responsible,” he added.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                <div className="right-content">
                                <h3>Examples of temporary business include:</h3>
                                <ul className="list-item clearfix">
                                    <li><Link href="visa-details">1. Attending business meetings or consultations <i className="icon-9"></i></Link></li>
                                    <li><Link href="visa-details">2. Attending a business convention or conference <i className="icon-9"></i></Link></li>
                                    <li><Link href="visa-details">3. Negotiating contracts <i className="icon-9"></i></Link></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="content-three">
                            <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                <figure className="image-box"><img src="assets/images/resource/visa-13.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <h3>Visitor Visa B</h3>
                                    <p>Stands for courtesy, accountability, responsibility, efficiency and service.</p>
                                    <ul className="list-item clearfix">
                                    <li><Link href="visa-details">1. Overview</Link></li>
                                    <li><Link href="visa-details">2. How to Apply</Link></li>
                                    <li><Link href="visa-details">3. Fees</Link></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                <figure className="image-box"><img src="assets/images/resource/visa-14.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <h3>Visa Waiver Program</h3>
                                    <p>Stands for courtesy, accountability, responsibility, efficiency and service.</p>
                                    <ul className="list-item clearfix">
                                    <li><Link href="visa-details">1. Overview</Link></li>
                                    <li><Link href="visa-details">2. How to Apply</Link></li>
                                    <li><Link href="visa-details">3. Fees</Link></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                <figure className="image-box"><img src="assets/images/resource/visa-15.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <h3>Bermudian Citizens</h3>
                                    <p>Stands for courtesy, accountability, responsibility, efficiency and service.</p>
                                    <ul className="list-item clearfix">
                                    <li><Link href="visa-details">1. Overview</Link></li>
                                    <li><Link href="visa-details">2. How to Apply</Link></li>
                                    <li><Link href="visa-details">3. Fees</Link></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                                    {/*visa details end*/}
                                

                            </Layout>
        </>
    )
}


