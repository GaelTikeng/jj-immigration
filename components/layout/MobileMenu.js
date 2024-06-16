"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
}) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="far fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/logo-2.png" alt="" />
            </Link>
          </div>
          <div className="menu-outer" style={{background: 'red'}}>
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li
                  className={
                    isActive.key == 1 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/">Home</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 1 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/" onClick={handleMobileMenu}>
                        Home Page 01
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-2" onClick={handleMobileMenu}>
                        Home Page 02
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-3" onClick={handleMobileMenu}>
                        Home Page 03
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-4" onClick={handleMobileMenu}>
                        Home Page 04
                      </Link>
                    </li>
                    <li>
                      <Link href="/onepage" onClick={handleMobileMenu}>
                        OnePage Home
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(1)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">About</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    <li
                      className={
                        isActive.subMenuKey == 3
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/#">Team</Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == 3 ? "block" : "none"
                          }`,
                        }}
                      >
                        <li>
                          <Link href="/team" onClick={handleMobileMenu}>
                            Our Team
                          </Link>
                        </li>
                        <li>
                          <Link href="/team-details" onClick={handleMobileMenu}>
                            Team Details
                          </Link>
                        </li>
                      </ul>
                      <div
                        className={
                          isActive.subMenuKey == 3
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(2, 3)}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>
                    <li>
                      <Link href="/about-us" onClick={handleMobileMenu}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" onClick={handleMobileMenu}>
                        Faq’s
                      </Link>
                    </li>
                    <li>
                      <Link href="/error" onClick={handleMobileMenu}>
                        404
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>

                <li
                  className={
                    isActive.key == 4 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">Coaching</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 4 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/coaching" onClick={handleMobileMenu}>
                        Coaching Overview
                      </Link>
                    </li>
                    <li>
                      <Link href="/coaching-details" onClick={handleMobileMenu}>
                        IELTS Coaching{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/coaching-details-2"
                        onClick={handleMobileMenu}
                      >
                        PTE Coaching
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/coaching-details-3"
                        onClick={handleMobileMenu}
                      >
                        OET Coaching
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/coaching-details-4"
                        onClick={handleMobileMenu}
                      >
                        GREE Coaching
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/coaching-details-5"
                        onClick={handleMobileMenu}
                      >
                        GMAT Coaching
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/coaching-details-6"
                        onClick={handleMobileMenu}
                      >
                        SAT Coaching
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(4)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li
                  className={
                    isActive.key == 5 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">Countries</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 5 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/countries" onClick={handleMobileMenu}>
                        Countries Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/countries-details"
                        onClick={handleMobileMenu}
                      >
                        United States
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/countries-details-2"
                        onClick={handleMobileMenu}
                      >
                        United Kingdom
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/countries-details-3"
                        onClick={handleMobileMenu}
                      >
                        Canada
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/countries-details-4"
                        onClick={handleMobileMenu}
                      >
                        China
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/countries-details-5"
                        onClick={handleMobileMenu}
                      >
                        Bahamas
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/countries-details-6"
                        onClick={handleMobileMenu}
                      >
                        Australia
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(5)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li
                  className={
                    isActive.key == 6 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">Visa</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 6 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/visa" onClick={handleMobileMenu}>
                        Visa Overview
                      </Link>
                    </li>
                    <li>
                      <Link href="/visa-details" onClick={handleMobileMenu}>
                        Business Visa
                      </Link>
                    </li>
                    <li>
                      <Link href="/visa-details-2" onClick={handleMobileMenu}>
                        Working Visas
                      </Link>
                    </li>
                    <li>
                      <Link href="/visa-details-3" onClick={handleMobileMenu}>
                        Residence Visas
                      </Link>
                    </li>
                    <li>
                      <Link href="/visa-details-4" onClick={handleMobileMenu}>
                        Student Visas
                      </Link>
                    </li>
                    <li>
                      <Link href="/visa-details-5" onClick={handleMobileMenu}>
                        Spouse/Family Visas
                      </Link>
                    </li>
                    <li>
                      <Link href="/visa-details-6" onClick={handleMobileMenu}>
                        Tourist Visas
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(6)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li
                  className={
                    isActive.key == 7 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">Blog</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 7 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/blog" onClick={handleMobileMenu}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-details" onClick={handleMobileMenu}>
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 7 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(7)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>

                <li>
                  <Link href="/contact" onClick={handleMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>152 rue Vallières Val-d'Or (Qc) J9P 4L3</li>
              <li>
                <Link href="tel:+1 581-305-4090">+1 581-305-4090</Link>
              </li>
              <li>
                <Link href="mailto:jjinternationalservcice@gmail.com">
                  jjinternationalservcice@gmail.com
                </Link>
              </li>
            </ul>
          </div>
          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="/">
                  <span className="fab fa-twitter"></span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blanck"
                  href="https://www.facebook.com/profile.php?id=61557544078696&mibextid=ZbWKwL&_rdc=2&_rdr"
                >
                  <span className="fab fa-facebook-square"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-instagram"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-youtube"></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
}
