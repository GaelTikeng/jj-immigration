import NewsSlider from "../../../components/slider/NewsSlider";
import React from "react";

export default function News() {
  return (
    <section className="news-style-two sec-pad">
      <div className="outer-container">
        <div className="sec-title centred mb_50">
          <span className="sub-title">Article</span>
          <h2>Latest Articles</h2>
        </div>
        <div className="content-box">
          {/*Theme Carousel*/}
          <NewsSlider />
        </div>
      </div>
    </section>
  );
}
