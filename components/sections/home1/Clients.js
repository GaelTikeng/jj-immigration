import Link from 'next/link';
import React from 'react';

export default function Clients() {
  return (
    <section className="clients-section p_relative">
      <div className="auto-container">
        <div className="inner-box p_relative pt_90">
          <ul className="clients-list">
            <li className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-1.png" alt="" /></Link></li>
            <li className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-2.png" alt="" /></Link></li>
            <li className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-3.png" alt="" /></Link></li>
            <li className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-4.png" alt="" /></Link></li>
            <li className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-5.png" alt="" /></Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

