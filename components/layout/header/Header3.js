'use client'
import Link from "next/link";
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header header-style-four ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                
                {/* Header lower*/}
            <div className="header-lower">
            <div className="outer-container">
                <div className="outer-box">
                <div className="logo-box">
                    <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt="" /></Link></figure>
                </div>
                <div className="menu-area clearfix">
                    <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                    <i className="icon-bar"></i>
                    <i className="icon-bar"></i>
                    <i className="icon-bar"></i>
                    </div>
                    <nav className="main-menu navbar-expand-md navbar-light">
                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                        <Menu/>
                    </div>
                    </nav>
                </div>
                <ul className="menu-right-content clearfix">
                    <li className="search-box-outer search-toggler"onClick={handlePopup}>
                    <i className="icon-8"></i>
                    </li>
                    <li><Link href="index-4"><i className="icon-31"></i></Link></li>
                </ul>
                </div>
            </div>
            </div> 
        {/*End Header Upper*/}
        <div className="sticky-header">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt="" /></Link></figure>
          </div>
          <div className="menu-area clearfix">
          <nav className="main-menu navbar-expand-md navbar-light clearfix">
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                <Menu/>
            </div>
        </nav>
          </div>
          <ul className="menu-right-content clearfix">
            <li className="search-box-outer search-toggler" onClick={handlePopup}>
              <i className="icon-8"></i>
            </li>
            <li><Link href="index-4"><i className="icon-31"></i></Link></li>
          </ul>
        </div>
      </div>
    </div> 
              {/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
