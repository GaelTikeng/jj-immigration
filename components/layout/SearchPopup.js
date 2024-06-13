import Link from "next/link"

export default function SearchPopup({ isPopup, handlePopup }) {
    return (
        <>
            <div id="search-popup" className={`search-popup ${isPopup ? "popup-visible" : ""}`}>
                <div className="popup-inner">
                    <div className="upper-box clearfix">
                    <figure className="logo-box pull-left"><Link href="/"><img src="assets/images/logo.png" alt="" /></Link></figure>
                        <div className="close-search pull-right" onClick={handlePopup}>
                            <span className="fa fa-times"></span>
                        </div>
                    </div>
                    <div className="overlay-layer"></div>
                    <div className="auto-container">
                        <div className="search-form">
                            <form method="post" action="/">
                                <div className="form-group">
                                    <fieldset>
                                        <input type="search" className="form-control" name="search-input" placeholder="Search Here" required />
                                        <button type="submit">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </fieldset>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
