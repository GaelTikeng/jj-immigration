import Link from 'next/link';
import React from 'react';

export default function Clients() {
  return (
    <section className="clients-section alternat-3 p_relative">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-53.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-54.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="inner-box p_relative">
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

