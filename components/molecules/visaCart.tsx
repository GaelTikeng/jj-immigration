import Link from "next/link";
import React from "react";

type Props = {
  imgSrc: string;
  visaType: string;
  smallDescription: string;
  visaOptions: string[];
  detailRef: string;
};

export default function VisaCart({
  imgSrc,
  visaType,
  smallDescription,
  visaOptions,
  detailRef
}: Props) {
  return (
    <div className="visa-block-one">
      <div className="inner-box">
        <figure className="image-box">
          <img src={imgSrc} alt="" />
        </figure>
        <div className="lower-content">
          <div className="icon-box">
            <i className="icon-12"></i>
          </div>
          <h3>
            <Link href={detailRef}>{visaType}</Link>
          </h3>
          <p>{smallDescription}</p>
          <ul className="list-style-one clearfix">
            {visaOptions?.map((opt, idx) => (
              <li key={idx}>{opt}</li>
            ))}
          </ul>
          <div className="link-btn">
            <Link href={detailRef}>
              <span>Read More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
