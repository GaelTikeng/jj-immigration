import React from 'react';
import Link from 'next/link';
import Layout from "@/components/layout/Layout"
const ProgressBar = ({ label, percent }) => (
    <div className="progress-box">
      <p>{label}</p>
      <div className="bar">
        <div className="bar-inner count-bar" style={{ width: `${percent}%` }}></div>
        <div className="count-text">{`${percent}%`}</div>
      </div>
    </div>
  );
export default function Team() {
  return (
    <>
    <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Team Details"> 
    <section className="team-details p_relative">
      <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-68.png)" }}></div>
      <div className="auto-container">
        <div className="team-details-content mb_50">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <figure className="image-box"><img src="assets/images/team/team-9.jpg" alt="" /></figure>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <h2>Roman Frederick</h2>
                <span className="designation">Regional Manager</span>
                <ul className="social-links clearfix mb_16">
                  <li><Link href="/"><i className="icon-7"></i></Link></li>
                  <li><Link href="/"><i className="icon-6"></i></Link></li>
                  <li><Link href="/"><i className="icon-4"></i></Link></li>
                </ul>
                <div className="text mb_20">
                  <p>Praesent id ante sit amet neque blandituni posuere vitae id ipsum. Proin rutrum est enim, vel aliquam sapien vulputate sit amet.art Integer sit amet finibus ex, nec mattis felis. In volutpat.</p>
                </div>
                <ul className="info-list clearfix">
                  <li><span>Specialization : </span>Manager</li>
                  <li><span>Age : </span>34 Years</li>
                  <li><span>Experience : </span>6 Years</li>
                  <li><span>Email : </span><Link href="mailto:info@yourmail.com">info@yourmail.com</Link></li>
                  <li><span>Phone : </span><Link href="tel:12345678900">(+123) 45678 900</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="biography-box mb_40">
          <h2>Biography</h2>
          <p>Praesent id ante sit amet neque blandituni posuere vitae id ipsum. Proin rutrum est enim, vel aliquam sapien vulputate sit amet.art Integer sit amet finibus ex, nec mattis felis. In volutpat rutrum pellentesque. Maecenas ut orci pulvinar, malesuada ligula ac, facilisis eros. Aenean bibendum ac urna non pellentesque. Duis consectetur tellus odio, ut rhoncus dolor maximus sit amet. Vestibulum aliquam euismod tellus sit amet faucibus. Aliquam euismod tincidunt lectus sit amet rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames at egestas amet feugiat laoreet potenti integer. Viverra at maecenas convallis condimentum egestas nunc sagittis eu. Semper faucibus facilisis vitae sollicitudin. Fringilla mauris magna sit elementum elit. Facilisi lacus, pharetra quam eu urna amet aenean. Nunc mattis vitae tellus bibendum a eu, nunc. Consequat commodo ac cursus in donec orci tempus. Massa sed sit faucibus neque ac. Nibh nisl nisl id fermentum habitant consequat. A ornare in dis sit cras natoque morbi. Phasellus senectus tortor sed magnis. Egestas nunc pellentesque egestas gravida amet.</p>
        </div>
        <div className="lower-content">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 skills-column">
              <div className="skills-box">
                <div className="content_block_five">
                  <div className="content-box">
                    <div className="text mb_25">
                      <h2>My Skills</h2>
                      <p>Praesent id ante sit amet neque blandituni posuere vitae id ipsum. Proin rutrum est enim, vel aliquam sapien vulputate sit amet.</p>
                    </div>
                    <div className="progress-inner">
                    <div className="progress-box mb_25">
                         <ProgressBar label="Student Visa" percent={90} />
                     </div>
                     <div className="progress-box mb_25">
                        <ProgressBar label="Business Visa" percent={70} />
                    </div>
                    <div className="progress-box">
                        <ProgressBar label="Residence Visa" percent={80} />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-column">
              <div className="text-block">
                <h2>Key Responsibilities</h2>
                <ul className="list-item clearfix">
                    <li>Etiam in magna ac dui laoreet iaculis</li>
                    <li>Fusce molestie risus vel odio faucibus. </li>
                    <li>A orci pretium tincidunt</li>
                    <li>Fusce molestie risus vel odio</li>
                    <li>Fusce vehicula libero eget pharetra ultrices</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-column">
              <div className="text mb_20">
                <h2>Experience</h2>
                <p>Praesent id ante sit amet neque blandituni posuere vitae id ipsum. Proin rutrum est enim, vel aliquam sapien vulputate sit amet.</p>
              </div>
              <div className="inner-box">
                <div className="single-item mb_15">
                  <h5>The Walt Company :</h5>
                  <p>Cars varius proin amet at vehicula magna. Platea sed fames.</p>
                </div>
                <div className="single-item">
                  <h5>Ecological Сompatibility:</h5>
                  <p>Cars varius proin amet at vehicula magna. Platea sed fames.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>  
      </>
  );
}

