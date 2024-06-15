import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  bannaImg: string;
  smallDescription: string;
  title: string;
};

export default function BannaCart({
  bannaImg,
  smallDescription,
  title,
}: Props) {
  return (
    <div>
      <figure className="image-layer">
        <img src={bannaImg} alt="" />
        <img src={bannaImg} alt=""/>
      </figure>
      <div className="auto-container">
        <div className="content-box">
          <div className="experience-inner">
            <figure className="logo-imgag">
              <img src="assets/images/icons/logo-1.png" alt="" />
            </figure>
            <div className="text">5 Years</div>
            <span>Experience</span>
          </div>
          <h2 className="w-[500px]">
            {/* Study In <span>Recognized</span> Universities!... */}
            {title}
          </h2>
          <p className="w-[500px]">{smallDescription}</p>
          <div className="btn-box">
            <Link href="/formulaire-evaluation" className="theme-btn btn-one">
              <span>Formulaire d'évaluation</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
