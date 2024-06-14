import Link from "next/link";
import React from "react";

type Props = {
  teamName: string;
  teamDesignation: string;
};

export default function TeamBiographie({ teamName, teamDesignation }: Props) {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 team-block">
        <div
          className="team-block-one wow fadeInUp animated"
          data-wow-delay="00ms"
          data-wow-duration="1500ms"
        >
          <div className="inner-box">
            <figure className="image-box">
              <img src="assets/images/team/team-1.jpg" alt="" />
            </figure>
            <div className="lower-content">
              <div className="share-box">
                <div className="share-icon">
                  <i className="icon-26"></i>
                </div>
                <ul className="social-links clearfix">
                  <li>
                    <Link href="/">
                      <i className="icon-7"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="icon-6"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="icon-4"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <h3>
                <Link href="team-details">{teamName}</Link>
              </h3>
              <span className="designation">{teamDesignation}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
