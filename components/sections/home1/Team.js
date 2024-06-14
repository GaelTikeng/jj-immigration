import React from "react";
import Link from "next/link";
import TeamBiographie from "../../molecules/teamBiographie";


export default function Team() {
  const teamMembers = [
    {
      teamName: 'Roman Fredetic',
      teamDesignation: 'Regional Manager'
    },
    {
      teamName: 'Jane Cooper',
      teamDesignation: 'Medical assistant'
    },
    {
      teamName: 'Megan Boone',
      teamDesignation: 'Marketing Coordinator'
    },
    {
      teamName: 'Harison Wright',
      teamDesignation: 'CEO of jj-immigration'
    },
  ]
  return (
    <section className="team-section p_relative centred">
      <div className="pattern-layer">
        <div
          className="pattern-1"
          style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}
        ></div>
        <div
          className="pattern-2"
          style={{ backgroundImage: "url(assets/images/shape/shape-14.png)" }}
        ></div>
        <div
          className="pattern-3"
          style={{ backgroundImage: "url(assets/images/shape/shape-15.png)" }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <span className="sub-title">Expert Team Members</span>
          <h2>Our Team at Your Service</h2>
        </div>
        <div className="row clearfix">
          {/* Repeat this block structure for each team member */}
          {teamMembers.map((team, idx) => (
            <TeamBiographie key={idx} teamName={team.teamName} teamDesignation={team.teamDesignation}/>
          ))}
        </div>
      </div>
    </section>
  );
}
